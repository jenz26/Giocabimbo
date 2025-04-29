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
  } from '@mui/material';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import { useSelector, useDispatch } from 'react-redux';
  import { toggleFavorite } from '../features/favoritesSlice';
  
  // Definizione di un tema con colori pastello e contrasto migliorato
  const theme = createTheme({
    palette: {
      primary: {
        main: '#a7c957', // Verde pastello
      },
      secondary: {
        main: '#f2e94e', // Giallo pastello
      },
      success: {
        main: '#ffe0b2', // Arancio chiaro pastello
      },
      text: {
        primary: '#333', // Nero o grigio molto scuro per il titolo
        secondary: '#555', // Grigio più scuro per il testo secondario
      },
      background: {
        paper: '#fff', // Sfondo bianco per la card
      },
      error: {
        main: '#f44336', // Rosso per l'icona dei preferiti
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.08)', // Ombreggiatura leggera
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
          colorPrimary: {
            backgroundColor: 'rgba(167, 201, 87, 0.15)',
            color: '#436b0d', // Verde più scuro per contrasto
          },
          colorSecondary: {
            backgroundColor: 'rgba(242, 233, 78, 0.15)',
            color: '#a59b08', // Giallo più scuro per contrasto
          },
          colorSuccess: {
            backgroundColor: 'rgba(255, 224, 178, 0.15)',
            color: '#b57a00', // Arancio più scuro per contrasto
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h6: {
            fontWeight: 600,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#757575', // Grigio per l'icona predefinita
          },
        },
      },
    },
  });
  
  function ActivityCard({ activity, onPreview }) {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
  
    const isFavorite = favorites.includes(activity.id);
  
    const handleToggleFavorite = (e) => {
      e.stopPropagation(); // ⚡ Previene apertura modale quando clicchi sul cuore
      dispatch(toggleFavorite(activity.id));
    };
  
    const handleCardClick = () => {
      onPreview();
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Card
          onClick={handleCardClick}
          sx={{
            borderRadius: 4,
            boxShadow: 2,
            p: 2,
            backgroundColor: 'background.paper',
            transition: 'transform 0.2s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%', // 🔑 forza tutte le card a usare lo stesso spazio disponibile
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 4,
              cursor: 'pointer',
            },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="start">
              <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                {activity.title}
              </Typography>
              <IconButton onClick={handleToggleFavorite} sx={{ color: isFavorite ? 'error.main' : 'grey.400' }}>
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
  
          {activity.category && (
            <CardActions sx={{ pt: 0, pl: 1, flexWrap: 'wrap' }}>
              {activity.category.map((cat, idx) => (
                <Chip key={idx} label={cat} size="small" color="success" sx={{ mb: 1, mr: 1 }} />
              ))}
            </CardActions>
          )}
        </Card>
      </ThemeProvider>
    );
  }
  
  export default ActivityCard;