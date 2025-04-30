import { useSelector } from 'react-redux';
import { Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import activitiesData from '../data/activities.json';
import ActivityCard from '../components/activity/ActivityCard';
import HeroSection from '../components/layout/HeroSection';
import MainLayout from '../components/layout/MainLayout';

function Favorites() {
  const favorites = useSelector(state => state.favorites);

  const favoriteActivities = activitiesData.filter(activity =>
    favorites.includes(activity.id)
  );

  return (
    <MainLayout>
      <HeroSection
        title="I tuoi Preferiti ❤️"
        subtitle="Qui troverai tutte le attività che hai salvato per il tuo bambino!"
        button={false}
        image={null}
      />

      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        {favoriteActivities.length > 0 ? (
          <Grid container spacing={3}>
            {favoriteActivities.map(activity => (
              <Grid item xs={12} sm={6} md={4} key={activity.id}>
                <ActivityCard activity={activity} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" sx={{ mt: 8 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Nessuna attività salvata tra i preferiti.
            </Typography>
            <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
              Scopri attività
            </Button>
          </Box>
        )}
      </Box>
    </MainLayout>
  );
}

export default Favorites;
