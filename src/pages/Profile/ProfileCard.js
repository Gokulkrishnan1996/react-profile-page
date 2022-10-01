import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: "250px",
    height: "250px",
    borderRadius: "5%",
    objectFit: "cover",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  textName: {
    fontSize: "25px",
    fontWeight: "bold",
    margin: "20px 0",
  },
}));

export const ProfileCard = ({ profileState }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <img
        className={classes.profileImage}
        src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
      />
      <span className={classes.textName}>{profileState?.display_name}</span>
      <Typography variant="subtitle1">{profileState?.email}</Typography>
      <Typography variant="subtitle2">
        {profileState?.phone_no_work_1}
      </Typography>
    </div>
  );
};
