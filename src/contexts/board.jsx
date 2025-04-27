import { createSession } from "@/modules/home/utils";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Initial state
const initialState = {
  isLoading: false, // Start with loading as true
};

const BoradProviderContext = createContext(undefined);

export function BoardProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
  };

  return (
    <BoradProviderContext.Provider value={value}>
      {children}
    </BoradProviderContext.Provider>
  );
}

export const useBoard = () => {
  const context = useContext(BoradProviderContext);

  if (!context) {
    throw new Error("useBoard must be used within an BoardProvider");
  }

  return context;
};
