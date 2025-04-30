import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../features/favoritesSlice';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Stack,
  Chip,
  Button,
  Fade,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import categoryColorMap from '../../utils/categoryColorMap';
import FeedbackSnackbar from '../common/FeedbackSnackbar';

import img1 from '../../assets/modale-bg/img1.webp';
import img2 from '../../assets/modale-bg/img2.webp';
import img3 from '../../assets/modale-bg/img3.webp';
import img4 from '../../assets/modale-bg/img4.webp';

const theme = createTheme({
  palette: {
    primary: { main: '#a7c957' },
    secondary: { main: '#f2e94e' },
    info: { main: '#6a994e' },
    success: { main: '#ffe0b2' },
    error: { main: '#ffb3ba' },
    background: { default: '#FAFAFA' },
    text: { primary: '#333' },
  },
  shape: { borderRadius: 8 },
});

const randomImages = [img1, img2, img3, img4];

function ActivityDetailModal({ open, handleClose, activity }) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(activity.id);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(activity.id));
    setSnackMessage(
      isFavorite ? 'Rimosso dai Preferiti 💔' : 'Aggiunto ai Preferiti ❤️'
    );
    setSnackOpen(true);
  };

  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{ backdrop: { timeout: 300 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 600,
              bgcolor: 'background.default',
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[5],
              p: 4,
              outline: 'none',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {/* SFONDO IMMERSIVO */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${randomImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.08,
                zIndex: 0,
                borderRadius: 'inherit',
              }}
            />
  
            {/* CONTENUTO */}
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Typography variant="h5" fontWeight={600} color="text.primary">
                  {activity.title}
                </Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon color="action" />
                </IconButton>
              </Stack>
  
              <Typography
                variant="body1"
                sx={{ mb: 3, whiteSpace: 'pre-line' }}
                color="text.primary"
              >
                {activity.description}
              </Typography>
  
              {activity.materials?.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Materiali Necessari:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {activity.materials.map((m, i) => (
                      <Chip key={i} label={m} variant="outlined" color="info" />
                    ))}
                  </Stack>
                </Box>
              )}
  
              {activity.benefits?.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Benefici Educativi:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {activity.benefits.map((b, i) => (
                      <Chip key={i} label={b} variant="outlined" color="success" />
                    ))}
                  </Stack>
                </Box>
              )}
  
              {activity.category?.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Categorie:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {activity.category.map((cat, i) => (
                      <Chip
                        key={i}
                        label={cat}
                        variant="outlined"
                        color={categoryColorMap[cat] || 'default'}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
  
              <Button
                onClick={handleToggleFavorite}
                variant="contained"
                fullWidth
                startIcon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                sx={{
                  mt: 2,
                  borderRadius: theme.shape.borderRadius * 2.5,
                  bgcolor: isFavorite ? 'error.main' : 'primary.main',
                  '&:hover': {
                    bgcolor: isFavorite ? 'error.dark' : 'primary.dark',
                  },
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                {isFavorite ? 'Rimuovi dai Preferiti' : 'Aggiungi ai Preferiti'}
              </Button>
            </Box>
  
            <FeedbackSnackbar
              open={snackOpen}
              message={snackMessage}
              onClose={() => setSnackOpen(false)}
              severity="success"
            />
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
  
}

export default ActivityDetailModal;
