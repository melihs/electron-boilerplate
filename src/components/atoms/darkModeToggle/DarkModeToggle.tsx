import cn from "classnames";
import { Dispatch, ReactElement } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { handleIconColor } from "../../../lib/helper";
import { changeDarkMode } from "../../../store/appSlice/AppSlice";

import Button from "../button/Button";

const DarkModeToggle = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const isDarkMode: boolean = useSelector(
    (state: RootState) => state.app.isDarkMode,
  );

  const handleDarkMode = async (): Promise<void> => {
    dispatch(changeDarkMode(!isDarkMode));
    await window?.darkMode?.toggle();
  };

  const renderByMode = (): ReactElement => {
    return isDarkMode ? (
      <BiSun color={handleIconColor(isDarkMode)} size={30} />
    ) : (
      <BiMoon color={handleIconColor(isDarkMode)} size={30} />
    );
  };

  const btnClass: string = cn("darkmode-btn", {
    "button-light": !isDarkMode,
  });

  return (
    <div>
      <Button className={btnClass} onClick={handleDarkMode}>
        {renderByMode()}
      </Button>
    </div>
  );
};

export default DarkModeToggle;
