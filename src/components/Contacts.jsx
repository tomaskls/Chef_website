import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Container, styled, useMediaQuery, useTheme} from '@mui/material';
import { Phone as PhoneIcon, Email as EmailIcon, WhatsApp as WhatsAppIcon, Facebook as FacebookIcon, Instagram as InstagramIcon} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.2s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.15)',
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ContactCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const contactInfo = {
    name: "Chef Fabio",
    phone: "+370 600 00000",
    email: "fabio@example.com",
    whatsapp: "+370 600 00000",
    facebook: "https://facebook.com/fabio",
    instagram: "https://instagram.com/fabio"
  };

  return (
    <Container id="contact"  maxWidth="sm" sx={{ 
      mt: isMobile ? 2 : 4, 
      mb: isMobile ? 2 : 4,
      p: isMobile ? 1 : 2 
    }}>
      <StyledCard>
        <CardContent sx={{ p: isMobile ? 2 : 3 }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 4,
              fontWeight: 'bold',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              }
            }}
          >
            {contactInfo.name}
          </Typography>

          <List sx={{ mb: 3 }}>
            <StyledListItem 
              component="a" 
              href={`tel:${contactInfo.phone}`}
            >
              <ListItemIcon>
                <PhoneIcon color="primary" sx={{ fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText 
                primary={contactInfo.phone}
                primaryTypographyProps={{
                  sx: { fontWeight: 500 }
                }}
              />
            </StyledListItem>

            <StyledListItem 
              component="a" 
              href={`mailto:${contactInfo.email}`}
            >
              <ListItemIcon>
                <EmailIcon color="primary" sx={{ fontSize: 28 }} />
              </ListItemIcon>
              <ListItemText 
                primary={contactInfo.email}
                primaryTypographyProps={{
                  sx: { fontWeight: 500 }
                }}
              />
            </StyledListItem>

            <StyledListItem 
              component="a" 
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
            >
              <ListItemIcon>
                <WhatsAppIcon sx={{ 
                  fontSize: 28,
                  color: '#25D366'
                }} />
              </ListItemIcon>
              <ListItemText 
                primary={contactInfo.whatsapp}
                primaryTypographyProps={{
                  sx: { fontWeight: 500 }
                }}
              />
            </StyledListItem>
          </List>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            borderTop: 1,
            borderColor: 'divider',
            pt: 3,
            mt: 2
          }}>
            <SocialIconButton 
              component="a" 
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ 
                fontSize: 32,
                color: '#1877F2' 
              }} />
            </SocialIconButton>
            <SocialIconButton 
              component="a" 
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ 
                fontSize: 32,
                color: '#E4405F'
              }} />
            </SocialIconButton>
          </Box>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

