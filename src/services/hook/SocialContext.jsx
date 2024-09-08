import { createContext, useContext, useState } from "react";

// Create the context
const SocialContext = createContext();

// Custom hook to use the SocialContext
export const useSocial = () => useContext(SocialContext);

// SocialProvider component that wraps around the children
export const SocialProvider = ({ children }) => {
  const [followData, setFollowData] = useState([]);
  const contextValue = {
    followData,
    setFollowData,
  };

  return <SocialContext.Provider value={contextValue}>{children}</SocialContext.Provider>;
};
