import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCirclePlus, faEnvelope, faHeart, faHouse, faMagnifyingGlass, faRightFromBracket, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faComment as faCommentRegular, faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

// Exporting the icons as constants
export const HomeIcon = <FontAwesomeIcon icon={faHouse} />;
export const SearchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
export const messageIcon = <FontAwesomeIcon icon={faEnvelope} />;
export const createIcon = <FontAwesomeIcon icon={faCirclePlus} />;
export const profileIcon = <FontAwesomeIcon icon={faUser} />;
export const LogoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;
export const LikeUnFillIcon = <FontAwesomeIcon icon={faHeartRegular} style={{ color: "#030303" }} />;
export const LikeFilledIcon = <FontAwesomeIcon icon={faHeart} style={{ color: "#ea2a2a" }} />;
export const commentIcon = <FontAwesomeIcon icon={faCommentRegular} />;
export const BookmarkUnFilledIcon = <FontAwesomeIcon icon={faBookmarkRegular} />;
export const BookmarkFilledIcon = <FontAwesomeIcon icon={faBookmark} style={{ color: "#000000" }} />;
export const DeleteIcon = <FontAwesomeIcon icon={faTrash} />;
