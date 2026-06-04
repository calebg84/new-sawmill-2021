"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const galleryImages = [
  {
    src: "/walnut_stickered.jpg",
    alt: "Stacked hardwood lumber boards",
    category: "Lumber",
  },
  {
    src: "/overhead_of_mill.jpg",
    alt: "Mobile sawmill in action",
    category: "Milling",
  },
  {
    src: "LT40zoomed.jpg",
    alt: "Wide cutting sawmill",
    category: "Milling",
  },
  {
    src: "/logs.jpg",
    alt: "Hickory logs ready for milling",
    category: "Logs",
  },
  {
    src: "stacked_oak.jpg",
    alt: "Oak lumber drying",
    category: "Lumber",
  },
  {
    src: "/controls_zoomed.jpg",
    alt: "Portable bandsaw mill setup",
    category: "Milling",
  },
  {
    src: "custom_fab1.jpeg",
    alt: "Custom Fabrication",
    category: "Fabrication",
  },
  {
    src: "/stickered_slabs.jpg",
    alt: "Live edge slabs",
    category: "Slabs",
  },
];

export default function GalleryPage() {
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
            GALLERY
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
            <Typography
              sx={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#3D5A3D",
              }}
            >
              See our work in action.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {galleryImages.map((image, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "#FFFFFF",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 32px rgba(45, 36, 24, 0.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      width: "100%",
                      height: 280,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "#5C4A3D",
                        fontFamily: '"Lora", serif',
                      }}
                    >
                      {image.alt}
                    </Typography>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        bgcolor: "#F5F0E6",
                        border: "1px solid #D4C4A8",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: "#8B6914",
                          letterSpacing: "0.05em",
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {image.category}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Video Embeds */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 8 }}>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
            <Typography
              sx={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#3D5A3D",
              }}
            >
              Sawmill Videos.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              {["mnFAa0VG0qM", "TajFOYD2yQs", "p5N-CAT_gFU"].map((i, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`video-${i}`}>
                  <Paper
                    elevation={0}
                    sx={{
                      border: "1px solid #D4C4A8",
                      borderRadius: 2,
                      overflow: "hidden",
                      bgcolor: "#FFFFFF",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 32px rgba(45, 36, 24, 0.15)",
                      },
                    }}
                  >
                    <Box
                      component="iframe"
                      src={`https://www.youtube.com/embed/${i}?rel=0`}
                      title={`Gallery video ${idx}`}
                      sx={{ width: "100%", height: 280, border: "none" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#5C4A3D",
                          fontFamily: '"Lora", serif',
                        }}
                      >
                        Video {idx + 1}
                      </Typography>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          bgcolor: "#F5F0E6",
                          border: "1px solid #D4C4A8",
                          borderRadius: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "#8B6914",
                            letterSpacing: "0.05em",
                            fontFamily: '"Playfair Display", serif',
                          }}
                        >
                          Video
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
