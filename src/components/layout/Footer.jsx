import { Box, Typography, Stack, Link as MuiLink, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        px: 2,
        backgroundColor: '#f7f7f7',
        borderTop: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} GiocaBimbo — Progetto Front-end Università
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
      >
        <MuiLink component={Link} to="/info" underline="hover" color="inherit">
          Info Progetto
        </MuiLink>
        <MuiLink component={Link} to="/privacy" underline="hover" color="inherit">
          Privacy Policy
        </MuiLink>
        <MuiLink
          href="https://github.com/tuo-username/giocabimbo"
          underline="hover"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          GitHub
        </MuiLink>
      </Stack>
    </Box>
  );
};

export default Footer;
