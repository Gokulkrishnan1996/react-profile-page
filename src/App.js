import { ThemeProvider } from "@mui/material";
import "./App.css";

import theme from "./theme";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
