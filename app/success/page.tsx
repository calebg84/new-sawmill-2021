"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function SuccessPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F0E6" }}>
      <Header />

      {/* Page Header */}
      <Box
        sx={{
          bgcolor: "#F5F0E6",
          py: { xs: 6, md: 8 },
          borderBottom: "4px solid #D4C4A8",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#2D2418",
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            THANK YOU
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              border: "1px solid #D4C4A8",
              borderRadius: 2,
              bgcolor: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#F5F0E6",
                border: "2px solid #3D5A3D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 40, color: "#3D5A3D" }} />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 700,
                color: "#2D2418",
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "0.03em",
                mb: 2,
              }}
            >
              Thanks for reaching out.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "#5C4A3D",
                fontFamily: '"Lora", serif',
                lineHeight: 1.7,
              }}
            >
              We&apos;ll be in touch soon!
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
