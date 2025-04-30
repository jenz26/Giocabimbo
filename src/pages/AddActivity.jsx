import { Box, Typography } from '@mui/material';
import HeroSection from '../components/layout/HeroSection';
import FormNewActivity from '../components/forms/FormNewActivity';

function AddActivity() {
  return (
    <Box sx={{ width: '100%' }}>
      {/* HERO */}
      <HeroSection
        title="Crea una nuova attività ✨"
        subtitle="Condividi la tua idea e aiutiamo insieme i genitori a giocare con i loro bimbi!"
        button={false}
        image={null}
      />

      {/* CONTENUTO */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <FormNewActivity />
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} GiocaBimbo – Tutti i diritti riservati
        </Typography>
      </Box>
    </Box>
  );
}

export default AddActivity;
