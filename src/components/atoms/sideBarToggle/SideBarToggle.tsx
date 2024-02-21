import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { BiAlignLeft } from "react-icons/bi";

import { IState } from "./types";
import { RootState } from "../../../store";
import { handleIconColor } from "../../../lib/helper";
import { changeShowSidebar } from "../../../store/appSlice/AppSlice";

import Button from "../button/Button";

const SideBarToggle = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { isDarkMode, isShowSidebar }: IState = useSelector(
    (state: RootState) => state.app,
  );

  const handleShowSidebar = (): void => {
    dispatch(changeShowSidebar(!isShowSidebar));
  };

  return (
    <Button className="sidebar-btn" onClick={handleShowSidebar}>
      <BiAlignLeft color={handleIconColor(isDarkMode)} size={30} />
    </Button>
  );
};

export default SideBarToggle;
