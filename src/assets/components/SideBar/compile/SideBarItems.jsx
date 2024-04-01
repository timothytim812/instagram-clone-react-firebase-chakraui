import SideBarHome from "../items/Home";
import SideBarSearchBar from "../items/SearchBar";
import SideBarNotification from "../items/Notification";
import SideBarCreate from "../items/Create";
import SideBarProfile from "../items/PersonalProfile";

const SideBarItems = () => {
  return (
    <>
      <SideBarHome />
      <SideBarSearchBar />
      <SideBarNotification />
      <SideBarCreate />
      <SideBarProfile />
    </>
  );
};

export default SideBarItems;
