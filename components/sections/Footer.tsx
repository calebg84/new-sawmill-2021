"use client";

import { Box, Container, Typography, Grid, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const quickLinks = ["Services", "Lumber", "About", "Gallery", "Contact"];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#3D3A35",
        py: { xs: 6, md: 8 },
        borderTop: "4px solid #8B6914",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #5C5A55",
                borderRadius: 1,
                px: 2,
                py: 1.5,
                bgcolor: "#2D2B27",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.5rem",
                  color: "#A89A7C",
                  letterSpacing: "0.1em",
                  fontFamily: '"Lora", serif',
                }}
              >
                EST. 2014
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#3D5A3D",
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                HEARTLAND
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#8B6914",
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "0.15em",
                }}
              >
                SAWMILL
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.4rem",
                  color: "#A89A7C",
                  letterSpacing: "0.03em",
                  fontFamily: '"Lora", serif',
                  textAlign: "center",
                }}
              >
                MOBILE SAWMILLING • QUALITY LOCAL LUMBER
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#F5F0E6",
                letterSpacing: "0.05em",
                mb: 2,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              QUICK LINKS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  underline="hover"
                  sx={{
                    color: "#A89A7C",
                    fontSize: "0.9rem",
                    fontFamily: '"Lora", serif',
                    "&:hover": {
                      color: "#F5F0E6",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Service Area */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#F5F0E6",
                letterSpacing: "0.05em",
                mb: 2,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              SERVICE AREA
            </Typography>
            <Typography
              sx={{
                color: "#A89A7C",
                fontSize: "0.9rem",
                fontFamily: '"Lora", serif',
                mb: 2,
              }}
            >
              Central Illinois and surrounding areas.
            </Typography>
            {/* Google Maps - Bloomington IL */}
            <Box
              sx={{
                borderRadius: 1,
                overflow: "hidden",
                border: "1px solid #5C5A55",
              }}
            >
              <iframe
                title="Heartland Sawmill Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48636.56098638093!2d-89.02398795!3d40.4842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887481a513f50577%3A0x6b44b5e20e21a0e2!2sBloomington%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#F5F0E6",
                letterSpacing: "0.05em",
                mb: 2,
                fontFamily: '"Playfair Display", serif',
              }}
            >
              GET IN TOUCH
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 18, color: "#8B6914" }} />
                <Typography
                  sx={{
                    color: "#A89A7C",
                    fontSize: "0.9rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  (309) 853-7497
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 18, color: "#8B6914" }} />
                <Typography
                  sx={{
                    color: "#A89A7C",
                    fontSize: "0.9rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  caleb@heartlandsawmill.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 18, color: "#8B6914" }} />
                <Typography
                  sx={{
                    color: "#A89A7C",
                    fontSize: "0.9rem",
                    fontFamily: '"Lora", serif',
                  }}
                >
                  On-site or at our location
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid #5C5A55",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#7A7570",
              fontSize: "0.8rem",
              fontFamily: '"Lora", serif',
            }}
          >
            © 2026 Heartland Sawmill
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
