import React from "react";
export const SupabaseContext = React.createContext();

export const SupabaseProvider = ({ supabase, children }) => {
  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => React.useContext(SupabaseContext);
