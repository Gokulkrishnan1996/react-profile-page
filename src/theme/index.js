import { createTheme } from "@mui/material/styles";

const theme = () => {
  return createTheme({
    direction: "ltr",
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1280,
        xl: 1400,
      },
    },
    palette: {
      primary: {
        main: "#c62828",
      },
    },
    typography: {
      mainContent: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        minHeight: "100vh",
        flexGrow: 1,
        padding: "20px",
        marginTop: "88px",
      },
    },
  });
};

export default theme;
