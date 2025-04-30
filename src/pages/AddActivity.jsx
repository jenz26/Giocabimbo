import { Box } from '@mui/material';
import HeroSection from '../components/layout/HeroSection';
import FormNewActivity from '../components/forms/FormNewActivity';
import MainLayout from '../components/layout/MainLayout';

function AddActivity() {
  return (
    <MainLayout>
      <HeroSection
        title="Crea una nuova attività ✨"
        subtitle="Condividi la tua idea e aiutiamo insieme i genitori a giocare con i loro bimbi!"
        button={false}
        image={null}
      />
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
        <FormNewActivity />
      </Box>
    </MainLayout>
  );
}

export default AddActivity;
