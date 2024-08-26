import { HomeIcon, SearchIcon, messageIcon, createIcon, profileIcon, LogoutIcon } from "../assets/icons";

export const appUrl = import.meta.env.VITE_API_URL;

export const dropdownValuesForRole = [
  { value: "ADMIN", label: "Admin" },
  { value: "USER", label: "User" },
];
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
    path: "/login",
  },
];

export const dropdownValuesForCountryCodes = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+86", label: "China (+86)" },
  { value: "+39", label: "Italy (+39)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+34", label: "Spain (+34)" },
  { value: "+82", label: "South Korea (+82)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+27", label: "South Africa (+27)" },
];
