"use client";

import { createTheme } from "@mui/material/styles";

// Earth-tone rustic vintage palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#3D5A3D", // Forest green
      light: "#5C7A5C",
      dark: "#2A3F2A",
      contrastText: "#F5F0E6",
    },
    secondary: {
      main: "#8B6914", // Antique gold/amber
      light: "#A68A3D",
      dark: "#5C4610",
      contrastText: "#F5F0E6",
    },
    background: {
      default: "#F5F0E6", // Cream/off-white
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D2418", // Dark brown
      secondary: "#5C4A3D",
    },
    divider: "#D4C4A8",
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Lora", "Georgia", serif',
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Lora", "Georgia", serif',
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "12px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          },
        },
        contained: {
          "&.MuiButton-containedPrimary": {
            backgroundColor: "#3D5A3D",
            "&:hover": {
              backgroundColor: "#2A3F2A",
            },
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: "1px solid #D4C4A8",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #D4C4A8",
        },
      },
    },
  },
});

export default theme;
