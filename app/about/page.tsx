"use client";

import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import Link from "next/link";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HistoryIcon from "@mui/icons-material/History";
import GroupsIcon from "@mui/icons-material/Groups";
import EcoIcon from "@mui/icons-material/Park";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import HighQualityIcon from "@mui/icons-material/HighQuality";

const values = [
  {
    icon: HighQualityIcon,
    title: "FAITHFUL EXCELLENCE",
    description:
      "We believe that whatever we do, we should work heartily as unto the Lord. We believe in excellence in our work and craftsmanship.",
  },
  {
    icon: VerifiedIcon,
    title: "QUALITY CRAFT",
    description:
      "Every board is milled with care and attention to detail. We take pride in producing lumber that meets the highest standards.",
  },
  {
    icon: HandshakeIcon,
    title: "LOCAL & TRUSTED",
    description:
      "Serving Central Illinois since 2014. We're your neighbors, and we stand behind every cut we make.",
  },
  {
    icon: HistoryIcon,
    title: "EXPERIENCED",
    description:
      "Over a decade of experience milling hardwoods of all species and sizes. We've seen it all and know how to handle it.",
  },
  {
    icon: GroupsIcon,
    title: "PERSONAL SERVICE",
    description:
      "No order is too small. We work directly with homeowners, farmers, woodworkers, and contractors to get exactly what they need.",
  },
  {
    icon: EcoIcon,
    title: "SUSTAINABLE",
    description:
      "We source from local landowners and tree services, keeping timber in the community and reducing waste.",
  },
];

export default function AboutPage() {
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
            OUR STORY
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
              Rooted in Central Illinois.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>
        </Container>
      </Box>

      {/* About Content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
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
                  src="/controls_side.jpg"
                  alt="Stack of freshly milled lumber showing wood grain"
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
                  EST. 2014
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
                    color: "#2D2418",
                    mb: 3,
                    letterSpacing: "0.03em",
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                  }}
                >
                  SAWMILLING DONE RIGHT
                </Typography>

                <Typography
                  sx={{
                    color: "#5C4A3D",
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  Heartland Sawmill started with a simple idea: bring quality
                  sawmilling services directly to the people who need them. What
                  began as a guy with a manual bandsaw mill cutting his own
                  trees for personal use has grown into a trusted local business
                  serving Central Illinois and the surrounding areas with a
                  portable, hydraulic sawmill. The Lord has blessed the business
                  and we now have over a decade of experience milling a wide
                  variety of hardwoods, and we know how to handle most any job,
                  big or small. Our faithful commitment to quality,
                  sustainability, and personal service has made us the go-to
                  sawmill for homeowners, farmers, woodworkers, and contractors
                  alike.
                </Typography>

                <Typography
                  sx={{
                    color: "#5C4A3D",
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  Whether you need us to come to your property to mill fallen
                  trees, storm-damaged timber, or hardwood logs, or you'd prefer
                  to drop off your logs at our location, we're here to help turn
                  your raw timber into something lasting and beautiful.
                </Typography>

                <Typography
                  sx={{
                    color: "#5C4A3D",
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: "1rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  We also stock a rotating inventory of freshly milled lumber in
                  a variety of species, available for purchase at our location.
                  From white oak and black walnut to live edge slabs and
                  dimensional boards, we've got quality local hardwood ready for
                  your next project.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Grid */}
      <Box
        sx={{
          bgcolor: "#EDE6D8",
          py: { xs: 6, md: 10 },
          borderTop: "1px solid #D4C4A8",
          borderBottom: "1px solid #D4C4A8",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#2D2418",
              letterSpacing: "0.03em",
              mb: 1,
              textAlign: "center",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            WHAT DRIVES US
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 5,
            }}
          >
            <Box sx={{ width: 40, height: "2px", bgcolor: "#3D5A3D" }} />
            <Typography
              sx={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#3D5A3D",
              }}
            >
              Our values
            </Typography>
            <Box sx={{ width: 40, height: "2px", bgcolor: "#3D5A3D" }} />
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      border: "2px solid #8B6914",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#F5F0E6",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <value.icon sx={{ fontSize: 26, color: "#8B6914" }} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#2D2418",
                      letterSpacing: "0.05em",
                      mb: 1,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {value.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#5C4A3D",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      fontFamily: '"Lora", serif',
                    }}
                  >
                    {value.description}
                  </Typography>
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
                LET'S WORK TOGETHER
              </Typography>
              <Typography
                sx={{
                  color: "#A89A7C",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  fontFamily: '"Lora", serif',
                }}
              >
                Have logs to mill or looking for quality lumber?
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
              Reach Out
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
