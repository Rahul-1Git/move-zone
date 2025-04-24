import React from "react";
import "./darkmode.css";
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  return (
    <div className="dark_mode">
      <MdLightMode onClick={setLightTheme} />
      <CiDark onClick={setDarkTheme} />
    </div>
  );
};

export default DarkMode;
