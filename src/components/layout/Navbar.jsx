import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/GiocaBimboLogo.png';

const navLinks = [
  { text: 'Home', to: '/' },
  { text: 'Preferiti', to: '/preferiti' },
  { text: 'Aggiungi Attività', to: '/nuova' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const trigger = useScrollTrigger();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e0e0e0',
          zIndex: 1100,
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo + Nome */}
          <Box display="flex" alignItems="center">
            <img src={logo} alt="GiocaBimbo Logo" height={36} style={{ marginRight: 10 }} />
            <Typography variant="h6" color="primary" fontWeight={600}>
              GiocaBimbo
            </Typography>
          </Box>

          {/* Link Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.text}
                component={Link}
                to={link.to}
                color="primary"
                sx={{
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(167,201,87,0.15)',
                  },
                }}
              >
                {link.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
