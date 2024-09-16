import { createContext, useContext, useState } from "react";

// Create the context
const ProfileContext = createContext();

// Custom hook to use the ProfileContext
export const useProfile = () => useContext(ProfileContext);

// SocialProvider component that wraps around the children
export const ProfileProvider = ({ children }) => {
  const [myProfileData, setMyProfileData] = useState("");
  const [followersCheck, setFollowersCheck] = useState(false);

  const contextValue = {
    myProfileData,
    setMyProfileData,
    followersCheck,
    setFollowersCheck,
  };

  return <ProfileContext.Provider value={contextValue}>{children}</ProfileContext.Provider>;
};
