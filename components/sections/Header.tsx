"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

const navItems = ["Services", "Lumber", "About", "Gallery", "Contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <Box sx={{ mb: 2, px: 2 }}>
        <Logo />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              href={`/${item.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#2D2418",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/contact"
            sx={{
              textAlign: "center",
              bgcolor: "#3D5A3D",
              backgroundColor: "none",
              mt: 2,
              px: 2,
              py: 1.25,
              borderRadius: 1,
              color: "#F5F0E6",
              minHeight: 48,
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#356F3D",
              },
              "&.Mui-focusVisible, &:active": {
                backgroundColor: "#3D5A3D",
              },
            }}
          >
            <ListItemText
              primary="Get an Estimate"
              primaryTypographyProps={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                color: "#F5F0E6",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#F5F0E6",
          borderBottom: "2px solid #D4C4A8",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", py: 1 }}
          >
            <Logo />

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "#2D2418" }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={Link}
                    href={`/${item.toLowerCase()}`}
                    sx={{
                      color: "#2D2418",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      letterSpacing: "0.08em",
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "#3D5A3D",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={{
                    bgcolor: "#3D5A3D",
                    color: "#F5F0E6",
                    px: 3,
                    "&:hover": {
                      bgcolor: "#1a1610",
                    },
                  }}
                >
                  Get an Estimate
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "#F5F0E6",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,

          px: 2,
          py: 1,
          bgcolor: "#F5F0E6",
        }}
      >
        <Link href="/" passHref>
          <Box
            component="img"
            src="/heartland_sawmill_logo.PNG"
            alt="Heartland Sawmill Logo"
            sx={{
              width: "80%",
              objectFit: "cover",
              display: "block",
              cursor: "pointer",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
}
