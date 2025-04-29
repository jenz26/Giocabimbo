import { Box, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import activitiesData from '../data/activities.json';
import ActivityCard from '../components/ActivityCard';
import Filters from '../components/Filters';
import ActivityDetailModal from '../components/ActivityDetailModal';
import HeroSection from '../components/HeroSection'; // ✅ usiamo il componente esistente

function Home() {
  const [allActivities, setAllActivities] = useState([]);
  const [filters, setFilters] = useState({
    age: '',
    time: '',
    materials: [],
    category: []
  });

  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const customActivities = JSON.parse(localStorage.getItem('customActivities')) || [];
    setAllActivities([...activitiesData, ...customActivities]);
  }, []);

  const filteredActivities = allActivities.filter(activity => {
    const ageMatch = filters.age ? activity.age === filters.age : true;
    const timeMatch = filters.time
      ? activity.time?.toLowerCase().includes(filters.time.toLowerCase())
      : true;
    const materialsMatch = filters.materials.length
      ? filters.materials.some(m => activity.materials?.includes(m))
      : true;
    const categoryMatch = filters.category.length
      ? filters.category.some(cat => activity.category?.includes(cat))
      : true;

    return ageMatch && timeMatch && materialsMatch && categoryMatch;
  });

  return (
    <Box sx={{ width: '100%' }}>
      {/* HERO */}
      <HeroSection />

      {/* FILTRI */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <Filters activities={allActivities} filters={filters} setFilters={setFilters} />
      </Box>

      {/* CONTENUTO */}
      <Box sx={{ px: { xs: 2, md: 6 }, pb: 6 }}>
        {filteredActivities.length > 0 ? (
          <Grid container spacing={3}>
            {filteredActivities.map(activity => (
              <Grid item xs={12} sm={6} md={4} key={activity.id}>
                <ActivityCard
                  activity={activity}
                  onPreview={() => setSelectedActivity(activity)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 4, textAlign: 'center' }}
          >
            Nessuna attività trovata con i filtri attuali.
          </Typography>
        )}
      </Box>

      {/* MODALE */}
      {selectedActivity && (
        <ActivityDetailModal
          open={Boolean(selectedActivity)}
          handleClose={() => setSelectedActivity(null)} // 💥 QUI IL CAMBIO
          activity={selectedActivity}
        />
      )}

      {/* FOOTER BASE */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} GiocaBimbo – Tutti i diritti riservati
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
