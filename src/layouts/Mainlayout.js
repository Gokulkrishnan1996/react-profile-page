import React from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import SideBar from "./SideBar";
import clsx from "clsx";
import { CssBaseline } from "@mui/material";
import { drawerWidth } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    ...theme.typography.mainContent,
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

export const Mainlayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Side bar*/}
      <SideBar />
      {/* main content */}
      <main className={clsx([classes.content])}>
        <Outlet />
      </main>
    </div>
  );
};
