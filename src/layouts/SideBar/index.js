import { Button, Drawer, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { drawerWidth } from "../../constants";
import { MenuItemsList } from "./MenuItemsList";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#9e9e9e",
  },
  ScrollHeight: {
    height: "calc(100vh - 20vh)",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  boxContainer: {
    display: "flex",
    padding: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  grow: {
    flexGrow: 1,
  },
}));

const SideBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <>
          {/* logo */}
          <div className={classes.boxContainer}>
            <Typography color={"primary"} variant="h3">
              GK
            </Typography>
          </div>
          {/* menulist */}
          <div className={classes.ScrollHeight}>
            <MenuItemsList />
          </div>
          <Button color="inherit" startIcon={<ExitToAppIcon />}>
            Signout
          </Button>
        </>
      </Drawer>
    </nav>
  );
};

export default SideBar;
