// localStorage-based auth mockup
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const AUTH_KEY = "aura_auth_user";
const USERS_KEY = "aura_users";
const OTP_KEY = "aura_auth_otp";
const RESET_KEY = "aura_reset_verified";

type StoredUser = AuthUser & { password: string };

type PendingOtpMode = "signup" | "reset";

interface PendingOtpSession {
  mode: PendingOtpMode;
  email: string;
  otp: string;
  expiresAt: string;
  name?: string;
  password?: string;
}

const getUsers = (): StoredUser[] => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const generateOtp = () => `${Math.floor(100000 + Math.random() * 900000)}`;

const savePendingOtp = (session: PendingOtpSession) => {
  localStorage.setItem(OTP_KEY, JSON.stringify(session));
};

const getPendingOtp = (): PendingOtpSession | null => {
  const raw = localStorage.getItem(OTP_KEY);
  if (!raw) return null;

  const parsed = JSON.parse(raw) as PendingOtpSession;
  if (new Date(parsed.expiresAt).getTime() < Date.now()) {
    localStorage.removeItem(OTP_KEY);
    return null;
  }

  return parsed;
};

const clearPendingOtp = () => {
  localStorage.removeItem(OTP_KEY);
};

const createUser = (name: string, email: string, password: string): AuthUser => {
  const user: AuthUser = {
    id: crypto.randomUUID(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };

  const users = getUsers();
  if (users.find((storedUser) => storedUser.email === email)) {
    throw new Error("An account with this email already exists");
  }

  users.push({ ...user, password });
  saveUsers(users);
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
};

export const signUp = (name: string, email: string, password: string): AuthUser => {
  return createUser(name, email, password);
};

export const requestSignUpOtp = (name: string, email: string, password: string) => {
  if (getUsers().find((user) => user.email === email)) {
    throw new Error("An account with this email already exists");
  }

  const otp = generateOtp();
  savePendingOtp({
    mode: "signup",
    email,
    otp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    name,
    password,
  });

  return otp;
};

export const requestPasswordResetOtp = (email: string) => {
  const user = getUsers().find((storedUser) => storedUser.email === email);
  if (!user) throw new Error("We couldn't find an account with that email");

  const otp = generateOtp();
  savePendingOtp({
    mode: "reset",
    email,
    otp,
    expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
  });

  return otp;
};

export const getOtpSession = (mode: PendingOtpMode, email: string) => {
  const session = getPendingOtp();
  if (!session || session.mode !== mode || session.email !== email) return null;
  return session;
};

export const verifyOtp = (mode: PendingOtpMode, email: string, otp: string) => {
  const session = getOtpSession(mode, email);
  if (!session) throw new Error("Your verification session has expired. Please request a new code.");
  if (session.otp !== otp) throw new Error("Invalid verification code");

  if (mode === "signup") {
    clearPendingOtp();
    return createUser(session.name || "", session.email, session.password || "");
  }

  localStorage.setItem(RESET_KEY, email);
  clearPendingOtp();
  return true;
};

export const resendOtp = (mode: PendingOtpMode, email: string) => {
  if (mode === "signup") {
    const session = getOtpSession("signup", email);
    if (!session?.name || !session.password) {
      throw new Error("Your signup session has expired. Please create your account again.");
    }

    return requestSignUpOtp(session.name, email, session.password);
  }

  return requestPasswordResetOtp(email);
};

export const canResetPassword = (email: string) => localStorage.getItem(RESET_KEY) === email;

export const resetPassword = (email: string, password: string) => {
  if (!canResetPassword(email)) {
    throw new Error("Please verify your code before resetting your password");
  }

  const users = getUsers();
  const index = users.findIndex((user) => user.email === email);
  if (index === -1) throw new Error("We couldn't find an account with that email");

  users[index] = { ...users[index], password };
  saveUsers(users);
  localStorage.removeItem(RESET_KEY);
};

export const login = (email: string, password: string): AuthUser => {
  const users = getUsers();
  const found = users.find((u) => u.email === email && u.password === password);
  if (!found) throw new Error("Invalid email or password");
  const { password: _, ...user } = found;
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getUser = (): AuthUser | null => {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
};

export const isAuthenticated = (): boolean => !!getUser();
