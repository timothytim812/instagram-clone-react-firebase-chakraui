import { AiFillHome } from "react-icons/ai";
import { CreatePostLogo, NotificationsLogo, SearchLogo } from "./logos";
import { Avatar } from "@chakra-ui/react";

const SideBarItems = [
  {
    icon: <AiFillHome size={25} />,
    text: "Home",
    link: "/",
  },
  {
    icon: <SearchLogo />,
    text: "Search",
  },
  {
    icon: <NotificationsLogo />,
    text: "Notifications",
  },
  {
    icon: <CreatePostLogo />,
    text: "Create",
  },
  {
    icon: (
      <Avatar size={"sm"} name="Timothy Benjamin" src="/images/home/profile-pic.jpg" />
    ),
    text: "Profile",
    link: "/",
  },
];

export default SideBarItems;
