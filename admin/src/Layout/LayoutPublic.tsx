import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./styles.scss";
import "../styles/dark.scss";
import { DarkModeContext } from "../context/ContextDark";
const LayoutPublic = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `layout dark ` : "layout"}>
      <Sidebar />

      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
