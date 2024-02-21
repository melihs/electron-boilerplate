import SideBarToggle from "../../atoms/sideBarToggle/SideBarToggle";
import DarkModeToggle from "../../atoms/darkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBarToggle />
      <div>Navbar</div>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
