import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import axios from "axios";
import { ProfileForm } from "./ProfileForm";
import { ProfileCard } from "./ProfileCard";

const useStyles = makeStyles((theme) => ({}));

const profile_url = "http://localhost:5000/profile";

export const Home = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    profile: {
      first_name: "",
      last_name: "",
      display_name: "",
      email: "",
      phone_no_work_1: null,
      phone_no_work_2: null,
      location: "",
    },
    enableProfileReset: false,
  });

  useEffect(() => {
    axios
      .get(profile_url)
      .then((res) => res.data)
      .then((data) => setState((prev) => ({ ...prev, profile: data })))
      .catch(console.log);
  }, []);

  const handleUpdateProfile = (data) => {
    if (!sessionStorage.getItem("profileData")) {
      sessionStorage.setItem(
        "profileData",
        JSON.stringify(state?.profile ?? "")
      );
    }

    setState((prev) => ({ ...prev, profile: data, enableProfileReset: true }));
    axios.post(profile_url, data);
  };

  const handleProfileUpdateReset = () => {
    const profile = JSON.parse(sessionStorage.getItem("profileData") ?? {});
    axios.post(profile_url, profile);
    setState((prev) => ({ ...prev, profile, enableProfileReset: false }));
  };

  return (
    <div>
      <Typography variant="h5">My Profile</Typography>
      <Grid container marginTop={2} justifyContent="center" spacing={3}>
        <Grid item xs={7}>
          <ProfileForm
            profileState={state["profile"]}
            handleUpdateProfile={handleUpdateProfile}
            handleProfileUpdateReset={handleProfileUpdateReset}
            enableProfileReset={state["enableProfileReset"]}
          />
        </Grid>
        <Grid item xs={5}>
          <ProfileCard profileState={state["profile"]} />
        </Grid>
      </Grid>
    </div>
  );
};
