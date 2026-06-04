"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Link,
  Divider,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
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
            GET IN TOUCH
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
              Let&apos;s talk about your project.
            </Typography>
            <Box
              sx={{ flex: 1, height: "2px", bgcolor: "#3D5A3D", maxWidth: 60 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  border: "1px solid #D4C4A8",
                  borderRadius: 2,
                  bgcolor: "#FFFFFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    color: "#2D2418",
                    fontFamily: '"Playfair Display", serif',
                    letterSpacing: "0.03em",
                    mb: 3,
                  }}
                >
                  SEND US A MESSAGE
                </Typography>

                <form
                  id="contactform"
                  action="https://formsubmit.io/send/4f13827f-5efd-4b1f-800f-6b01ba7a68e0"
                  method="POST"
                >
                  <input
                    name="_redirect"
                    type="hidden"
                    id="_redirect"
                    value="/success"
                  />
                  <input
                    name="_formsubmit_id"
                    type="text"
                    style={{ display: "none" }}
                  />

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        id="name"
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            borderColor: "#D4C4A8",
                            fontFamily: '"Lora", serif',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#8B6914",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#3D5A3D",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Lora", serif',
                            color: "#5C4A3D",
                            "&.Mui-focused": {
                              color: "#3D5A3D",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        id="email"
                        type="email"
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            borderColor: "#D4C4A8",
                            fontFamily: '"Lora", serif',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#8B6914",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#3D5A3D",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Lora", serif',
                            color: "#5C4A3D",
                            "&.Mui-focused": {
                              color: "#3D5A3D",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        id="phone"
                        type="tel"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            borderColor: "#D4C4A8",
                            fontFamily: '"Lora", serif',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#8B6914",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#3D5A3D",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Lora", serif',
                            color: "#5C4A3D",
                            "&.Mui-focused": {
                              color: "#3D5A3D",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="comment"
                        id="comment"
                        required
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1,
                            borderColor: "#D4C4A8",
                            fontFamily: '"Lora", serif',
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#8B6914",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#3D5A3D",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontFamily: '"Lora", serif',
                            color: "#5C4A3D",
                            "&.Mui-focused": {
                              color: "#3D5A3D",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: "#3D5A3D",
                          color: "#F5F0E6",
                          py: 1.5,
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          fontFamily: '"Playfair Display", serif',
                          textTransform: "uppercase",
                          borderRadius: 1,
                          "&:hover": {
                            bgcolor: "#2A3F2A",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Contact Details Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 700,
                      color: "#2D2418",
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "0.03em",
                      mb: 3,
                    }}
                  >
                    CONTACT INFO
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                  >
                    {/* Phone */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          border: "2px solid #8B6914",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#F5F0E6",
                          flexShrink: 0,
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 20, color: "#8B6914" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#8B6914",
                            letterSpacing: "0.08em",
                            fontFamily: '"Playfair Display", serif',
                            textTransform: "uppercase",
                            mb: 0.25,
                          }}
                        >
                          PHONE (TEXT OR CALL)
                        </Typography>
                        <Link
                          href="tel:+13098537497"
                          underline="hover"
                          sx={{
                            color: "#2D2418",
                            fontSize: "1rem",
                            fontFamily: '"Lora", serif',
                            "&:hover": {
                              color: "#3D5A3D",
                            },
                          }}
                        >
                          (309) 853-7497
                        </Link>
                      </Box>
                    </Box>

                    <Divider sx={{ borderColor: "#D4C4A8" }} />

                    {/* Email */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          border: "2px solid #8B6914",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#F5F0E6",
                          flexShrink: 0,
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 20, color: "#8B6914" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#8B6914",
                            letterSpacing: "0.08em",
                            fontFamily: '"Playfair Display", serif',
                            textTransform: "uppercase",
                            mb: 0.25,
                          }}
                        >
                          EMAIL
                        </Typography>
                        <Link
                          href="mailto:caleb@heartlandsawmill.com"
                          underline="hover"
                          sx={{
                            color: "#2D2418",
                            fontSize: "1rem",
                            fontFamily: '"Lora", serif',
                            "&:hover": {
                              color: "#3D5A3D",
                            },
                          }}
                        >
                          caleb@heartlandsawmill.com
                        </Link>
                      </Box>
                    </Box>

                    <Divider sx={{ borderColor: "#D4C4A8" }} />

                    {/* Location */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          border: "2px solid #8B6914",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#F5F0E6",
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnIcon
                          sx={{ fontSize: 20, color: "#8B6914" }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#8B6914",
                            letterSpacing: "0.08em",
                            fontFamily: '"Playfair Display", serif',
                            textTransform: "uppercase",
                            mb: 0.25,
                          }}
                        >
                          SERVICE AREA
                        </Typography>
                        <Typography
                          sx={{
                            color: "#2D2418",
                            fontSize: "1rem",
                            fontFamily: '"Lora", serif',
                          }}
                        >
                          Central Illinois & surrounding areas
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>

                {/* Social Media Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: "1px solid #D4C4A8",
                    borderRadius: 2,
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 700,
                      color: "#2D2418",
                      fontFamily: '"Playfair Display", serif',
                      letterSpacing: "0.03em",
                      mb: 3,
                    }}
                  >
                    FOLLOW US
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2 }}>
                    {/* Facebook */}
                    <Link
                      href="https://www.facebook.com/heartlandsawmill/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        border: "2px solid #8B6914",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#F5F0E6",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#3D5A3D",
                          borderColor: "#3D5A3D",
                          "& .MuiSvgIcon-root": {
                            color: "#F5F0E6",
                          },
                        },
                      }}
                    >
                      <FacebookIcon sx={{ fontSize: 24, color: "#8B6914" }} />
                    </Link>

                    {/* YouTube */}
                    <Link
                      href="https://www.youtube.com/channel/UC_17-xfDovREZsvK8rbBljA"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        border: "2px solid #8B6914",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#F5F0E6",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#3D5A3D",
                          borderColor: "#3D5A3D",
                          "& .MuiSvgIcon-root": {
                            color: "#F5F0E6",
                          },
                        },
                      }}
                    >
                      <YouTubeIcon sx={{ fontSize: 24, color: "#8B6914" }} />
                    </Link>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
