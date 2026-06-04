"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function CallToAction() {
  return (
    <Box
      sx={{
        bgcolor: "#2D2418",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#F5F0E6",
                mb: 1,
              }}
            >
              READY TO GET STARTED?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#A89A7C",
                fontSize: { xs: "0.95rem", md: "1.1rem" },
              }}
            >
              Let&apos;s talk about your logs and your vision.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 3, md: 6 },
            }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderColor: "#F5F0E6",
                color: "#F5F0E6",
                px: 4,
                py: 1.5,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "#8B6914",
                  color: "#8B6914",
                  bgcolor: "transparent",
                },
              }}
            >
              Get an Estimate
            </Button>

            {/* Circular Logo Stamp */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "2px solid #5C4A3D",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  transform: "rotate(-10deg)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#8B6914",
                    fontFamily: '"Playfair Display", serif',
                    letterSpacing: "0.1em",
                  }}
                >
                  HEARTLAND
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.55rem",
                    color: "#A89A7C",
                    fontFamily: '"Lora", serif',
                    letterSpacing: "0.05em",
                  }}
                >
                  SAWMILL
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
