import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  IconButton,
  CardActions,
  createTheme,
  ThemeProvider,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../features/favoritesSlice';
import { useState } from 'react';
import categoryColorMap from '../../utils/categoryColorMap';
import FeedbackSnackbar from '../common/FeedbackSnackbar';
import cardBg from '../../assets/card_bg.webp';

const theme = createTheme({
  palette: {
    primary: { main: '#a7c957' },
    secondary: { main: '#f2e94e' },
    success: { main: '#ffe0b2' },
    text: { primary: '#333', secondary: '#555' },
    error: { main: '#f44336' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
});

function ActivityCard({ activity, onPreview }) {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(activity.id);

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(activity.id));
    setSnackMessage(
      isFavorite ? 'Rimosso dai Preferiti 💔' : 'Aggiunto ai Preferiti ❤️'
    );
    setSnackOpen(true);
  };

  const handleCardClick = () => {
    onPreview();
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        onClick={handleCardClick}
        sx={{
          height: '100%',
          minHeight: 240,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 4,
            cursor: 'pointer',
          },
        }}
      >
        {/* overlay trasparente */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 0,
            borderRadius: 'inherit',
          }}
        />

        {/* contenuto sopra lo sfondo */}
        <Box sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="start">
              <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                {activity.title}
              </Typography>
              <IconButton
                onClick={handleToggleFavorite}
                sx={{ color: isFavorite ? 'error.main' : 'grey.400' }}
              >
                {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap">
              <Chip label={`Età: ${activity.age}`} size="small" color="primary" />
              <Chip label={activity.time} size="small" color="secondary" />
            </Stack>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {activity.preview}
            </Typography>
          </CardContent>

          {Array.isArray(activity.category) && activity.category.length > 0 && (
            <CardActions sx={{ pt: 0, pl: 1, flexWrap: 'wrap' }}>
              {activity.category.map((cat, idx) => (
                <Chip
                  key={idx}
                  label={cat}
                  size="small"
                  color={categoryColorMap[cat] || 'default'}
                  sx={{ mb: 1, mr: 1 }}
                />
              ))}
            </CardActions>
          )}
        </Box>
      </Card>

      <FeedbackSnackbar
        open={snackOpen}
        message={snackMessage}
        onClose={() => setSnackOpen(false)}
        severity="success"
      />
    </ThemeProvider>
  );
}

export default ActivityCard;
