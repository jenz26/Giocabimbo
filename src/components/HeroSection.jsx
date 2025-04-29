import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.webp'
import bgImage from '../assets/hero_bg.webp'

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 8 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 4, md: 8 },
      }}
    >
      {/* TESTO A SINISTRA */}
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Trova l'attività perfetta per il tuo bambino in un click!
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          GiocaBimbo ti aiuta a scoprire attività educative e divertenti su misura per l'età e gli
          interessi del tuo bambino. Facile, gratuito e sempre a portata di mano!
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Più di 200 attività disponibili!
        </Typography>
        <Button
          variant="contained"
          color="success"
          component={Link}
          to="/#attivita"
          sx={{ borderRadius: 4, textTransform: 'none', fontWeight: 600 }}
        >
          Esplora le attività
        </Button>
      </Box>

      {/* IMMAGINE A DESTRA */}
      <Box
        component="img"
        src={heroImage}
        alt="Bambini che giocano con carta colorata"
        sx={{
          flex: 1,
          maxWidth: 400,
          width: '100%',
          height: 'auto',
          borderRadius: 4,
          boxShadow: 3,
        }}
      />
    </Box>
  )
}

export default HeroSection
