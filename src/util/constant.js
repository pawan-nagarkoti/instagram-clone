import { HomeIcon, SearchIcon, messageIcon, createIcon, profileIcon, LogoutIcon } from "../assets/icons";

export const navbarItem = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/",
  },
  {
    icon: SearchIcon,
    name: "Search",
    path: "/search",
  },
  {
    icon: messageIcon,
    name: "Message",
    path: "/message",
  },
  {
    icon: createIcon,
    name: "Create",
    path: "/create",
  },
  {
    icon: profileIcon,
    name: "Profile",
    path: "/profile",
  },
  {
    icon: LogoutIcon,
    name: "Logout",
    path: "/logout",
  },
];
