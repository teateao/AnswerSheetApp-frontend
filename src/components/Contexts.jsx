import { createContext, useState } from "react";

export const URLContext = createContext();
const URLinitialData = "/";
function URLProvider({ children }) {
  const [URLData, setURLData] = useState(URLinitialData);
  return (
    <URLContext.Provider value={{ URLData, setURLData }}>
      {children}
    </URLContext.Provider>
  );
}
export function ContextsProvider({ children }) {
  return <URLProvider>{children}</URLProvider>;
}
