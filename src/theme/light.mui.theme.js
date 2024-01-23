import { createTheme } from "@mui/material";
import { lightColors } from "./lightColor";
import typography from "./typographyold";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightColors,
  },
  typography: {
    ...typography,
    ...(typography.cst_h1_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h2_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h3_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h4_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h5_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h6_semiBold.color = "#3C4D6B"),
    ...(typography.cst_h7_semiBold.color = "#3C4D6B"),

    ...(typography.cst_h1_medium.color = "#3C4D6B"),
    ...(typography.cst_h2_medium.color = "#3C4D6B"),
    ...(typography.cst_h3_medium.color = "#3C4D6B"),
    ...(typography.cst_h4_medium.color = "#3C4D6B"),
    ...(typography.cst_h5_medium.color = "#3C4D6B"),
    ...(typography.cst_h6_medium.color = "#3C4D6B"),
    ...(typography.cst_h7_medium.color = "#3C4D6B"),

    ...(typography.cst_p1_semiBold.color = "#3C4D6B"),
    ...(typography.cst_p2_semiBold.color = "#3C4D6B"),
    ...(typography.cst_p3_semiBold.color = "#3C4D6B"),
    ...(typography.cst_p4_semiBold.color = "#3C4D6B"),

    ...(typography.cst_p1_medium.color = "#3C4D6B"),
    ...(typography.cst_p2_medium.color = "#3C4D6B"),
    ...(typography.cst_p3_medium.color = "#3C4D6B"),
    ...(typography.cst_p4_medium.color = "#3C4D6B"),

    ...(typography.cst_p1.color = "#3C4D6B"),
    ...(typography.cst_p2.color = "#3C4D6B"),
    ...(typography.cst_p3.color = "#3C4D6B"),
    ...(typography.cst_p4.color = "#3C4D6B"),
    ...(typography.cst_p5.color = "#3C4D6B"),
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito",
          borderRadius: "4px",
          flex: "none",
          order: 0,
          border: "1px solid #DADCDF",
          alignSelf: "stretch",
          flexGrow: 0,
          "& .MuiSvgIcon-root": {
            color: "#667085",
            marginRight: "5px",
            cursor: "pointer",
          },
          "& .MuiSelect-select:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito",
          borderRadius: "4px",
          fontWeight: 600,
          fontSize: "14px",
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
          height: "44px",
          margin: "0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #f2f6fc",
          backgroundColor: "#fff",
          color: "#3C4D6B",
          padding: "0px 10px",
          margin: "0",
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: "0",
          paddingTop: "0px",
          fontFamily: "Nunito",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "11px",
          fontStyle: "italic",
          marginLeft: "0",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#e0f0ea",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          pt: 0,
          "& .MuiGrid-item": {
            margin: 0,
            pt: 0,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: "0",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito",
          padding: "0px 0px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: "none",
          marginLeft: "0px !important",
        },
        docked: {
          marginLeft: "0px !important",
        },
      },
    },
    MuiStack: {
      styleOverrides: {},
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(171, 191, 228)",
          height: "20px",
          width: "20px",
          fontSize: "10px",
          color: "rgb(4, 4, 86)",
          zIndex: 0.5,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "#3c2a4d",
          color: "#e0f0ea",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
          // backgroundColor: "#e0f0ea",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1920,
    },
  },
});

[lightTheme.breakpoints.between("lg", "xl")].forEach((key) => {
  lightTheme.typography.cst_h1_Bold[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h2_Bold[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h3_Bold[key] = {
    fontSize: "30px",
  };
  lightTheme.typography.cst_h4_Bold[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h5_Bold[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h6_Bold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h7_Bold[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_h1_semiBold[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h2_semiBold[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h3_semiBold[key] = {
    fontSize: "30px",
  };
  lightTheme.typography.cst_h4_semiBold[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h5_semiBold[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h6_semiBold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h7_semiBold[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_h1_medium[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h2_medium[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h3_medium[key] = {
    fontSize: "30px",
  };
  lightTheme.typography.cst_h4_medium[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h5_medium[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h6_medium[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h7_medium[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_h1[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h2[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h3[key] = {
    fontSize: "30px",
  };
  lightTheme.typography.cst_h4[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h5[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h6[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h7[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_h8[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_p1_semiBold[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p2_semiBold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p3_semiBold[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p4_semiBold[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_p4_semiBold_2[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_p1_medium[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p2_medium[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p3_medium[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p3_medium_2[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p3_medium_3[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p4_medium[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_p5_medium[key] = {
    fontSize: "8px",
  };
  lightTheme.typography.cst_p1[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p2[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p3[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p4[key] = {
    fontSize: "10px",
  };
  lightTheme.typography.cst_p5[key] = {
    fontSize: "8px",
  };
});

[lightTheme.breakpoints.up("xxl")].forEach((key) => {
  lightTheme.typography.cst_h1_Bold[key] = {
    fontSize: "42px",
  };
  lightTheme.typography.cst_h2_Bold[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h3_Bold[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h4_Bold[key] = {
    fontSize: "26px",
  };
  lightTheme.typography.cst_h5_Bold[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h6_Bold[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h7_Bold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h1_semiBold[key] = {
    fontSize: "42px",
  };
  lightTheme.typography.cst_h2_semiBold[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h3_semiBold[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h4_semiBold[key] = {
    fontSize: "26px",
  };
  lightTheme.typography.cst_h5_semiBold[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h6_semiBold[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h7_semiBold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h1_medium[key] = {
    fontSize: "42px",
  };
  lightTheme.typography.cst_h2_medium[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h3_medium[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h4_medium[key] = {
    fontSize: "26px",
  };
  lightTheme.typography.cst_h5_medium[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h6_medium[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h7_medium[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h1[key] = {
    fontSize: "42px",
  };
  lightTheme.typography.cst_h2[key] = {
    fontSize: "38px",
  };
  lightTheme.typography.cst_h3[key] = {
    fontSize: "34px",
  };
  lightTheme.typography.cst_h4[key] = {
    fontSize: "26px",
  };
  lightTheme.typography.cst_h5[key] = {
    fontSize: "22px",
  };
  lightTheme.typography.cst_h6[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_h7[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_h8[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p1_semiBold[key] = {
    fontSize: "20px",
  };
  lightTheme.typography.cst_p2_semiBold[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_p3_semiBold[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p4_semiBold[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p4_semiBold_2[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p1_medium[key] = {
    fontSize: "20px",
  };
  lightTheme.typography.cst_p2_medium[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_p3_medium[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p3_medium_2[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p3_medium_3[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p4_medium[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p5_medium[key] = {
    fontSize: "12px",
  };
  lightTheme.typography.cst_p1[key] = {
    fontSize: "20px",
  };
  lightTheme.typography.cst_p2[key] = {
    fontSize: "18px",
  };
  lightTheme.typography.cst_p3[key] = {
    fontSize: "16px",
  };
  lightTheme.typography.cst_p4[key] = {
    fontSize: "14px",
  };
  lightTheme.typography.cst_p5[key] = {
    fontSize: "12px",
  };
  // --- component
  lightTheme.components.MuiTableRow.styleOverrides.root[key] = {
    height: "56px",
  };
});

export default lightTheme;
