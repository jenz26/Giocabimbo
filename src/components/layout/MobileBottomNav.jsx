import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'block', md: 'none' },
        zIndex: 1300,
      }}
      elevation={6}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Preferiti" value="/preferiti" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nuova" value="/nuova" icon={<AddCircleOutlineIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default MobileBottomNav;
