"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";

const aboutFeatures = [
  {
    icon: ParkIcon,
    title: "MOBILE SAWMILLING",
    description: "We bring the mill to your location.",
  },
  {
    icon: VerifiedIcon,
    title: "QUALITY & CARE",
    description: "Every board milled with pride.",
  },
  {
    icon: HandshakeIcon,
    title: "LOCAL & TRUSTED",
    description: "A local business you can count on.",
  },
];

export default function About() {
  return (
    <Box sx={{ bgcolor: "#F5F0E6", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(45, 36, 24, 0.15)",
              }}
            >
              <Box
                component="img"
                src="/man_milling_from_loading_side.jpg"
                alt="Stack of freshly cut lumber boards showing wood grain"
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 450 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                sx={{
                  color: "#8B6914",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  fontSize: "0.85rem",
                  mb: 2,
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                MOBILE. LOCAL. PERSONAL.
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  color: "#2D2418",
                  mb: 3,
                  letterSpacing: "0.03em",
                }}
              >
                MILLING DONE RIGHT
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#5C4A3D",
                  mb: 4,
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                Heartland Sawmill is a mobile sawmill business serving Central
                Illinois and surrounding areas. Whether you need us to come to
                you or you&apos;d like to drop your logs off at our location,
                we&apos;re here to turn your timber into something lasting.
              </Typography>

              <Grid container spacing={3}>
                {aboutFeatures.map((feature, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={index}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        border: "1px solid #D4C4A8",
                        borderRadius: 1,
                        bgcolor: "#FAF7F0",
                      }}
                    >
                      <feature.icon
                        sx={{ fontSize: 36, color: "#8B6914", mb: 1 }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#2D2418",
                          letterSpacing: "0.05em",
                          mb: 0.5,
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#5C4A3D", fontSize: "0.8rem" }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
