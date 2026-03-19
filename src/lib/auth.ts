// localStorage-based auth mockup
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const AUTH_KEY = "aura_auth_user";

export const signUp = (name: string, email: string, password: string): AuthUser => {
  const user: AuthUser = {
    id: crypto.randomUUID(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  // Store user in "database"
  const users = JSON.parse(localStorage.getItem("aura_users") || "[]");
  if (users.find((u: AuthUser) => u.email === email)) {
    throw new Error("An account with this email already exists");
  }
  users.push({ ...user, password });
  localStorage.setItem("aura_users", JSON.stringify(users));
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
};

export const login = (email: string, password: string): AuthUser => {
  const users = JSON.parse(localStorage.getItem("aura_users") || "[]");
  const found = users.find((u: any) => u.email === email && u.password === password);
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
