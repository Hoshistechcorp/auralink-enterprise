import { createContext, useContext, useState, ReactNode } from "react";

export type AccountType = "restaurant" | "destination";

interface AccountTypeContextValue {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
}

const AccountTypeContext = createContext<AccountTypeContextValue>({
  accountType: "restaurant",
  setAccountType: () => {},
});

export const AccountTypeProvider = ({ children }: { children: ReactNode }) => {
  const [accountType, setAccountType] = useState<AccountType>(
    () => (localStorage.getItem("auralink-account-type") as AccountType) || "restaurant"
  );

  const handleSet = (type: AccountType) => {
    setAccountType(type);
    localStorage.setItem("auralink-account-type", type);
  };

  return (
    <AccountTypeContext.Provider value={{ accountType, setAccountType: handleSet }}>
      {children}
    </AccountTypeContext.Provider>
  );
};

export const useAccountType = () => useContext(AccountTypeContext);
