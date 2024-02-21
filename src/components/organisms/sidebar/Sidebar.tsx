import cn from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Sidebar = () => {
  const isShowSidebar: boolean = useSelector(
    (state: RootState) => state.app.isShowSidebar,
  );

  const sidebarClass: string = cn("sidebar", {
    hide: !isShowSidebar,
  });

  return <div className={sidebarClass}>Sidebar</div>;
};

export default Sidebar;
