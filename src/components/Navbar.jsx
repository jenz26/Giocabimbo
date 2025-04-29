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
    ListItemText
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import logo from '../assets/GiocaBimboLogo.png';
  
  const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Preferiti', to: '/preferiti' },
    { text: 'Aggiungi Attività', to: '/nuova' }
  ];
  
  function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = () => setDrawerOpen(prev => !prev);
  
    return (
      <>
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fff' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* LOGO */}
            <Box display="flex" alignItems="center">
              <img src={logo} alt="GiocaBimbo Logo" height={38} style={{ marginRight: 10 }} />
              <Typography variant="h6" color="primary">
                GiocaBimbo
              </Typography>
            </Box>
  
            {/* DESKTOP NAV */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navLinks.map(link => (
                <Button
                  key={link.text}
                  component={Link}
                  to={link.to}
                  color="primary"
                  sx={{
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
  
            {/* MOBILE BURGER */}
            <IconButton
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
  
        {/* MOBILE DRAWER */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer}>
            <List>
              {navLinks.map(link => (
                <ListItem key={link.text} disablePadding>
                  <ListItemButton component={Link} to={link.to}>
                    <ListItemText primary={link.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
  }
  
  export default Navbar;
  