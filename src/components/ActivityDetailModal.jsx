import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favoritesSlice';
import { Modal, Box, Typography, IconButton, Stack, Chip, Button, Fade, createTheme, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Definizione di un tema con colori pastello
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 10 },
        outlinedInfo: { borderColor: '#6a994e', color: '#6a994e' },
        outlinedSuccess: { borderColor: '#ffe0b2', color: '#d89216' },
        outlinedPrimary: { borderColor: '#a7c957', color: '#a7c957' },
        outlinedError: { borderColor: '#ffb3ba', color: '#e35b5a' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

const randomImages = [
  '/assets/modale-bg/img1.webp',
  '/assets/modale-bg/img2.webp',
  '/assets/modale-bg/img3.webp',
  '/assets/modale-bg/img4.webp',
];

function ActivityDetailModal({ open, handleClose, activity }) {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(activity.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(activity.id));
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
            }}
          >
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h5" fontWeight={600} color="text.primary">
                {activity.title}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon color="action" />
              </IconButton>
            </Stack>

            {/* Immagine */}
            <Box
              component="img"
              src={randomImage}
              alt="Anteprima attività"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: theme.shape.borderRadius / 2,
                mb: 3,
              }}
            />

            {/* Descrizione */}
            <Typography variant="body1" sx={{ mb: 3, whiteSpace: 'pre-line' }} color="text.primary">
              {activity.description}
            </Typography>

            {/* Materiali */}
            {activity.materials?.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom color="text.primary">
                  Materiali Necessari:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {activity.materials.map((material, index) => (
                    <Chip key={index} label={material} variant="outlined" color="info" />
                  ))}
                </Stack>
              </Box>
            )}

            {/* Benefici Educativi */}
            {activity.benefits?.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom color="text.primary">
                  Benefici Educativi:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {activity.benefits.map((benefit, index) => (
                    <Chip key={index} label={benefit} variant="outlined" color="success" />
                  ))}
                </Stack>
              </Box>
            )}

            {/* Categorie */}
            {activity.category?.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom color="text.primary">
                  Categorie:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {activity.category.map((cat, index) => (
                    <Chip key={index} label={cat} variant="outlined" color="primary" />
                  ))}
                </Stack>
              </Box>
            )}

            {/* Pulsante Preferiti */}
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
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}

export default ActivityDetailModal;
