// src/components/layout/MainLayout.jsx
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from "./MobileBottomNav";
import HeroSection from './HeroSection';

const MainLayout = ({ children, showHero = false }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Navbar />
      {showHero && <HeroSection />}
      <Box component="main" sx={{ px: { xs: 2, md: 6 }, pt: 4 }}>
        {children}
      </Box>
      <Footer />
      <BottomNav />
    </Box>
  );
};

export default MainLayout;
