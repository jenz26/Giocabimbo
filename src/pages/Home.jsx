import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import HeroSection from '../components/layout/HeroSection';
import Filters from '../components/activity/Filters';
import ActivityCard from '../components/activity/ActivityCard';
import ActivityDetailModal from '../components/activity/ActivityDetailModal';
import activitiesJSON from '../data/activities.json';
import { sanitizeActivities } from '../utils/sanitizeActivities';

function Home() {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [filter, setFilter] = useState({
    age: '',
    time: '',
    materials: [],
    category: [], // ✅ dev'essere array per <Select multiple />
  });

  // Step 1: carica e sanifica
  useEffect(() => {
    const localActivities = JSON.parse(localStorage.getItem('customActivities')) || [];
    const combined = [...activitiesJSON, ...localActivities];
    const sanitized = sanitizeActivities(combined);

    console.log('📦 [Home] Activities from JSON + LocalStorage:', combined);
    console.log('🧹 [Home] Sanitized activities:', sanitized);

    setActivities(sanitized);
  }, []);

  // Step 2: applica i filtri
  useEffect(() => {
    let result = [...activities];

    console.log('🎛️ [Filter] Current filters:', filter);

    if (filter.age) {
      result = result.filter((a) => a.age === filter.age);
    }
    if (filter.time) {
      result = result.filter((a) => a.time === filter.time);
    }
    if (filter.materials.length > 0) {
      result = result.filter((a) =>
        filter.materials.every((m) => a.materials.includes(m))
      );
    }
    if (filter.category.length > 0) {
      result = result.filter((a) =>
        filter.category.every((c) => a.category.includes(c))
      );
    }

    console.log('🧮 [Filter] Filtered activities:', result);

    setFilteredActivities(result);
  }, [filter, activities]);

  return (
    <>
      <HeroSection />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Scopri attività per giocare con intelligenza 🎲
        </Typography>

        <Filters filters={filter} setFilters={setFilter} activities={activities} />

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {filteredActivities.map((activity) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              display="flex"
              key={activity.id}
            >
              <ActivityCard
                activity={activity}
                onPreview={() => setSelectedActivity(activity)}
              />
            </Grid>
          ))}
        </Grid>


        {filteredActivities.length === 0 && (
          <Box mt={4} textAlign="center">
            <Typography variant="body1" color="text.secondary">
              Nessuna attività trovata con i filtri attuali 😢
            </Typography>
          </Box>
        )}

        {selectedActivity && (
          <ActivityDetailModal
            open={Boolean(selectedActivity)}
            handleClose={() => setSelectedActivity(null)}
            activity={selectedActivity}
          />
        )}
      </Container>
    </>
  );
}

export default Home;
