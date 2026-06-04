"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#F5F0E6",
        py: { xs: 6, md: 8 },
        borderBottom: "4px solid #D4C4A8",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#2D2418",
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                WE BRING
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#2D2418",
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                THE MILL
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    flex: 1,
                    height: "2px",
                    bgcolor: "#3D5A3D",
                    maxWidth: 60,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Lora", serif',
                    fontStyle: "italic",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "#3D5A3D",
                  }}
                >
                  to you.
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    height: "2px",
                    bgcolor: "#3D5A3D",
                    maxWidth: 60,
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "#5C4A3D",
                mb: 4,
                maxWidth: 400,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              On-site sawmilling at your location or at ours. Quality local
              hardwood with care.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  bgcolor: "#3D5A3D",
                  color: "#F5F0E6",
                  px: 4,
                  py: 1.5,
                  fontSize: "0.9rem",
                  "&:hover": {
                    bgcolor: "#2A3F2A",
                  },
                }}
              >
                Get an Estimate
              </Button>
              <Button
                variant="outlined"
                href="/services"
                sx={{
                  borderColor: "#2D2418",
                  color: "#2D2418",
                  px: 4,
                  py: 1.5,
                  fontSize: "0.9rem",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "#3D5A3D",
                    color: "#3D5A3D",
                    bgcolor: "transparent",
                  },
                }}
              >
                View Our Services
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(45, 36, 24, 0.2)",
              }}
            >
              <Box
                component="img"
                src="/man_running_mill.jpg"
                alt="Mobile sawmill equipment processing logs in a forest setting"
                sx={{
                  width: "100%",
                  height: { xs: 280, md: 400 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
