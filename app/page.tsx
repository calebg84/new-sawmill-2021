"use client";

import { Box } from "@mui/material";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F0E6" }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </Box>
  );
}
