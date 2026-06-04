"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NatureIcon from "@mui/icons-material/Nature";
import ConstructionIcon from "@mui/icons-material/Construction";
import InventoryIcon from "@mui/icons-material/Inventory";

const features = [
  {
    icon: LocationOnIcon,
    title: "WE COME TO YOU",
    description: "On-site milling at your location.",
  },
  {
    icon: NatureIcon,
    title: "QUALITY HARDWOOD",
    description: "Locally sourced. Built to last.",
  },
  {
    icon: ConstructionIcon,
    title: "SAWMILL SERVICES",
    description: "From log to lumber.",
  },
  {
    icon: InventoryIcon,
    title: "LUMBER AVAILABLE",
    description: "Quality local lumber at our location.",
  },
];

export default function Features() {
  return (
    <Box
      sx={{
        bgcolor: "#EDE6D8",
        py: 6,
        borderBottom: "1px solid #D4C4A8",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "2px solid #8B6914",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    bgcolor: "#F5F0E6",
                  }}
                >
                  <feature.icon sx={{ fontSize: 28, color: "#8B6914" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.75rem", md: "0.9rem" },
                    fontWeight: 700,
                    color: "#2D2418",
                    letterSpacing: "0.05em",
                    mb: 1,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5C4A3D",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
