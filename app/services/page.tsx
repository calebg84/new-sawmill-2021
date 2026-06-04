"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConstructionIcon from "@mui/icons-material/Construction";
import InventoryIcon from "@mui/icons-material/Inventory";
import HardwareIcon from "@mui/icons-material/Hardware";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const services = [
  {
    icon: LocationOnIcon,
    title: "MOBILE OR DROP-OFF SAWMILLING",
    description:
      "We bring our portable sawmill directly to your property. Whether you have fallen trees, storm damage, or hardwood logs that need milling, we come to you. Our mobile service covers Central Illinois and surrounding areas. Or drop off your logs at our location for milling. We can process a wide range of log sizes and species, turning your raw timber into usable lumber right on-site.",
    details: [
      "On-site log processing",
      "Custom dimension lumber",
      "Slabs & offcuts available",
      "No job too big or small",
    ],
  },
  {
    icon: InventoryIcon,
    title: "CUSTOM LUMBER",
    description:
      "Need specific dimensions or species? We'll work with you to mill our logs into the exact lumber you need. From rough-cut boards to finished dimensions, we deliver quality every time.",
    details: [
      "Hardwood & softwood",
      "Trailer Decking",
      "Live edge slabs",
      "Dimensional lumber",
      "Beams & timbers",
    ],
  },
  {
    icon: ConstructionIcon,
    title: "CNC MILLING SERVICES",
    description:
      "In addition to our sawmilling services, we offer CNC milling for custom woodworking projects. We can create intricate designs, joinery, and custom cuts with precision. Perfect for furniture makers, woodworkers, and DIY enthusiasts looking to take their projects to the next level. As part of our CNC services, we also offer slab flattening to ensure your live edge slabs are flat, level and ready for your next project.",
    details: [
      "Custom CNC cutting and shaping",
      "Slab Flattening services",
      "Signage and decorative elements",
      "Pickup when ready",
    ],
  },
  {
    icon: HardwareIcon,
    title: "CUSTOM FABRICATION",
    description:
      "Need custom woodworking projects? We can create anything from furniture to architectural elements using our high-quality lumber.",
    details: [
      "Trim work & moldings",
      "Cabinetry and furniture",
      "Slab Tables & countertops",
      "Estimates available upon request",
    ],
  },
];

export default function ServicesPage() {
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
            OUR SERVICES
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
              From log to finished lumber.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                    height: "100%",
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
                      mb: 2,
                    }}
                  >
                    <service.icon sx={{ fontSize: 26, color: "#8B6914" }} />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      fontWeight: 700,
                      color: "#2D2418",
                      letterSpacing: "0.05em",
                      mb: 1.5,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#5C4A3D",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      fontFamily: '"Lora", serif',
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2,
                      listStyle: "none",
                    }}
                  >
                    {service.details.map((detail, i) => (
                      <Typography
                        component="li"
                        key={i}
                        sx={{
                          color: "#5C4A3D",
                          fontSize: "0.9rem",
                          fontFamily: '"Lora", serif',
                          mb: 0.5,
                          position: "relative",
                          pl: 2,
                          "&::before": {
                            content: '"•"',
                            position: "absolute",
                            left: 0,
                            color: "#8B6914",
                            fontWeight: 700,
                          },
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Table */}
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
            MILLING RATES
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: "2px",
                bgcolor: "#3D5A3D",
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#3D5A3D",
              }}
            >
              Pricing overview
            </Typography>
            <Box
              sx={{
                width: 40,
                height: "2px",
                bgcolor: "#3D5A3D",
              }}
            />
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #D4C4A8",
              borderRadius: 2,
              bgcolor: "#FFFFFF",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#3D5A3D" }}>
                  <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    SERVICE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    RATE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    NOTES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    Mobile Sawmilling
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $150 / hr
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $100 Travel fee plus $2.50 / mile for roundtrip; 2hr minimum
                  </TableCell>
                </TableRow>
                <TableRow sx={{ bgcolor: "#FAF7F0" }}>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    Drop-Off Milling
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $150 / hr
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    zero travel expenses; one hour minimum
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    Logs Larger than 3 ft Diameter{" "}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $225 / hr
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    Travel fees above apply to mobile milling of larger logs
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            sx={{
              textAlign: "center",
              mt: 3,
              color: "#5C4A3D",
              fontSize: "0.85rem",
              fontFamily: '"Lora", serif',
              fontStyle: "italic",
            }}
          >
            * Rates may vary based on log species, size, and condition. Contact
            us for an accurate estimate.
          </Typography>
        </Container>
      </Box>

      {/* Slab Flattening Rates Table */}
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
            SLAB FLATTENING RATES
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: "2px",
                bgcolor: "#3D5A3D",
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#3D5A3D",
              }}
            >
              Pricing overview
            </Typography>
            <Box
              sx={{
                width: 40,
                height: "2px",
                bgcolor: "#3D5A3D",
              }}
            />
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #D4C4A8",
              borderRadius: 2,
              bgcolor: "#FFFFFF",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#3D5A3D" }}>
                  <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    SLAB SQUARE FOOTAGE
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    FLATTENING FEE
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      color: "#F5F0E6",
                      fontWeight: 700,
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "0.95rem",
                      letterSpacing: "0.03em",
                      borderBottom: "none",
                    }}
                  >
                    NOTES
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    0 - 9.9 sq ft
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $100
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $100 Travel fee plus $2.50 / mile for roundtrip; 2hr minimum
                  </TableCell> */}
                </TableRow>
                <TableRow sx={{ bgcolor: "#FAF7F0" }}>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    10 - 19.9 sq ft
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $150
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    zero travel expenses; one hour minimum
                  </TableCell> */}
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    20-32 sq ft
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#2D2418",
                      fontWeight: 600,
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    $200
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      fontFamily: '"Lora", serif',
                      color: "#5C4A3D",
                      borderBottom: "1px solid #D4C4A8",
                    }}
                  >
                    Travel fees above apply to mobile milling of larger logs
                  </TableCell> */}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            sx={{
              textAlign: "center",
              mt: 3,
              color: "#5C4A3D",
              fontSize: "0.85rem",
              fontFamily: '"Lora", serif',
              fontStyle: "italic",
            }}
          >
            * Rates may vary based on slab size and condition. Contact us for an
            accurate estimate.
          </Typography>
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
                READY TO GET STARTED?
              </Typography>
              <Typography
                sx={{
                  color: "#A89A7C",
                  fontSize: { xs: "0.95rem", md: "1.1rem" },
                  fontFamily: '"Lora", serif',
                }}
              >
                Get a free estimate for your project today.
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
              Get an Estimate
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
