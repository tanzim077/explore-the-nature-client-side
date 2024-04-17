

import {createTheme} from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography,
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          // background: "#F8F8F8",
          background: "#",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          border: "1px solid #DADCDF",
          alignSelf: "stretch",
          flexGrow: 0,
          padding: "0px",
          "& .MuiSvgIcon-root": {
            // color: "rgba(45, 88, 255, 1)",
            marginRight: "10px",
            cursor: "pointer",
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "14px",
          fontWeight: 600,
          color: "##969CAF",
          width: "100%",
          "& .Mui-selected": {
            color: "#2D58FF",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    }
  },
});


theme.typography.wpf_p3_semiBold = {
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "14px",
  },
};
theme.typography.wpf_p4_semiBold = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "12px",
  },
};

theme.typography.wpf_h5_semiBold = {
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "42px",
  },
};

export default theme;
