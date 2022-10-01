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
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export const ProfileForm = ({
  profileState,
  handleUpdateProfile,
  enableProfileReset,
  handleProfileUpdateReset,
}) => {
  const classes = useStyles();

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(profileState);
  }, [profileState]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateProfile(profileData);
  };

  return (
    <Card>
      <CardContent>
        <form
          autoComplete="off"
          className={classes.content}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                name="first_name"
                type="text"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.first_name ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                name="last_name"
                type="text"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.last_name ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Display Name"
                margin="normal"
                name="display_name"
                type="text"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.display_name ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                type="email"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.email ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone No(Work)"
                margin="normal"
                name="phone_no_work_1"
                type="tel"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.phone_no_work_1 ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone No(Work)"
                margin="normal"
                name="phone_no_work_2"
                type="tel"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.phone_no_work_2 ?? ""}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location"
                margin="normal"
                name="location"
                type="text"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={profileData?.location ?? ""}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
          <div style={{ alignSelf: "center" }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>

            {enableProfileReset && (
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                onClick={handleProfileUpdateReset}
              >
                reset
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
