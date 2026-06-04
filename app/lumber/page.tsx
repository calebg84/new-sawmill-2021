"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const lumberTypes = [
  {
    name: "White Oak",
    image: "/white_oak.jpg",
    description:
      "Durable, rot-resistant hardwood ideal for furniture, flooring, and outdoor projects. One of the most sought-after species in our region.",
    uses: ["Trailer Decking", "Furniture", "Flooring", "Cabinetry", "Outdoor"],
    availability: "In Stock",
  },
  {
    name: "Red Oak",
    image: "/red_oak.jpg",
    description:
      "Strong, attractive hardwood with a prominent grain pattern. Great for interior projects, millwork, and decorative applications.",
    uses: ["Furniture", "Millwork", "Trim", "Veneer"],
    availability: "In Stock",
  },
  {
    name: "Black Walnut",
    image: "walnut1.jpg",
    description:
      "Premium hardwood prized for its rich, dark color and straight grain. A favorite for high-end furniture, gunstocks, and decorative pieces.",
    uses: ["Fine Furniture", "Gunstocks", "Turning", "Decorative"],
    availability: "In Stock",
  },
  {
    name: "Hard Maple",
    image: "maple.jpg",
    description:
      "Hard, dense wood with a smooth, light-colored appearance. Excellent for cutting boards, workbenches, and flooring.",
    uses: ["Cutting Boards", "Flooring", "Workbenches", "Turnings"],
    availability: "Limited",
  },
  {
    name: "Cherry",
    image: "/cherry.png",
    description:
      "Beautiful reddish-brown hardwood that darkens with age. Highly workable and perfect for fine furniture and cabinetry.",
    uses: ["Furniture", "Cabinetry", "Carving", "Musical Instruments"],
    availability: "Limited",
  },
  {
    name: "Ash",
    image: "/ash.png",
    description:
      "Tough, shock-resistant hardwood with excellent bending qualities. Traditionally used for tool handles and sports equipment.",
    uses: ["Tool Handles", "Furniture", "Sporting Goods", "Bending"],
    availability: "Limited",
  },
  {
    name: "Live Edge Slabs",
    image: "/stickered_slabs.jpg",
    description:
      "Natural edge slabs from a variety of species. Perfect for custom tables, shelves, mantels, and artistic projects.",
    uses: ["Tables", "Shelves", "Mantels", "Art"],
    availability: "Call for Options",
  },
];

export default function LumberPage() {
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
            AVAILABLE LUMBER
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
              Quality local hardwood.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>

          <Typography
            sx={{
              mt: 3,
              color: "#5C4A3D",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
              maxWidth: 700,
              fontFamily: '"Lora", serif',
            }}
          >
            All lumber is milled locally from sustainably sourced hardwood logs.
            Inventory changes regularly. Contact us for current availability,
            dimensions, and pricing.
          </Typography>
        </Container>
      </Box>

      {/* Lumber Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {lumberTypes.map((lumber, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component="img"
                    src={lumber.image}
                    alt={lumber.name}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <Box
                    sx={{
                      p: 3,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#2D2418",
                          fontFamily: '"Playfair Display", serif',
                        }}
                      >
                        {lumber.name}
                      </Typography>
                      <Chip
                        label={lumber.availability}
                        size="small"
                        sx={{
                          bgcolor:
                            lumber.availability === "In Stock"
                              ? "#3D5A3D"
                              : lumber.availability === "Limited"
                                ? "#8B6914"
                                : "#5C4A3D",
                          color: "#F5F0E6",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          fontFamily: '"Playfair Display", serif',
                          letterSpacing: "0.03em",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: "#5C4A3D",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        fontFamily: '"Lora", serif',
                        mb: 2,
                        flex: 1,
                      }}
                    >
                      {lumber.description}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#8B6914",
                        letterSpacing: "0.05em",
                        mb: 1,
                        fontFamily: '"Playfair Display", serif',
                        textTransform: "uppercase",
                      }}
                    >
                      Common Uses
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {lumber.uses.map((use, i) => (
                        <Chip
                          key={i}
                          label={use}
                          size="small"
                          sx={{
                            bgcolor: "#F5F0E6",
                            border: "1px solid #D4C4A8",
                            fontSize: "0.7rem",
                            fontFamily: '"Lora", serif',
                            color: "#5C4A3D",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          bgcolor: "#2D2418",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
              textAlign: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "#F5F0E6",
                  mb: 1,
                  fontWeight: 700,
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "0.03em",
                }}
              >
                LOOKING FOR SOMETHING SPECIFIC?
              </Typography>
              <Typography
                sx={{
                  color: "#A89A7C",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  fontFamily: '"Lora", serif',
                }}
              >
                We can mill custom orders to your specifications.
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{
                borderColor: "#F5F0E6",
                color: "#F5F0E6",
                px: 4,
                py: 1.5,
                borderWidth: 2,
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                fontFamily: '"Playfair Display", serif',
                textTransform: "uppercase",
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "#8B6914",
                  color: "#8B6914",
                  bgcolor: "transparent",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
