import PropTypes from 'prop-types';
import { 
  Box, 
  Container, 
  Typography,
  useTheme,
  useMediaQuery 
} from '@mui/material';

export function Footer(){
 
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const currentYear = new Date().getFullYear();

  return (
    <Box >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            mt: 4, 
            pt: 3, 
            borderTop: 1, 
            borderColor: 'divider',
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: isMobile ? '0.75rem' : '0.875rem' 
            }}
          >
            © {currentYear} Chef Fabio. Visos teisės saugomos.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    whatsapp: PropTypes.string,
  }),
};
