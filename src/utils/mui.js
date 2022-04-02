import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fca311",
    },
    secondary: {
      main: "#e5e5e5",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;
