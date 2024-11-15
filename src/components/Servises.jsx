import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, Button, Container, Box, Grid2, useMediaQuery, useTheme} from '@mui/material';

const StyledCard = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <Card 
      {...props}
      sx={{
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        transition: 'transform 0.2s ease-in-out',
        backgroundColor: theme.palette.background.paper,
        height: '100%',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      {children}
    </Card>
  );
};

StyledCard.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledTitle = ({ children, ...props }) => {
  return (
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
      {...props}
    >
      {children}
    </Typography>
  );
};

StyledTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledButton = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <Button 
      {...props}
      sx={{
        backgroundColor: theme.palette.background.paper,
        transition: 'transform 0.2s ease-in-out',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.primary.dark}`,
          color: theme.palette.primary.dark,
        },
      }}
    >
      {children}
    </Button>
  );
};

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ServiceCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const services = [
    {
      title: "MEET FABIO",
      image: "/fire-1654828_640.jpg",
      description: "Hi, My name is Fabio I'm Italian from the Amalfi coast I have been a chef since I was 14 years old. I was the chef for the Italian national soccer team for 4 years. We won the World Cup in 2006 in Germany. I specialize in Italian cuisine and love sharing my passion for food."
    },
    {
      title: "PERSONAL CHEF",
      image: "/restaurant-1284351_640.jpg",
      description: "Whether you are planning a small simple dinner party for your friends or an impressive multi-course meal for business clients, Personal Chef Fabio will create the memorable menu. All meals are prepared at your place with seasonal ingredients from local farmers, and fish markets."
    },
    {
      title: "MEAL PREPPING",
      image: "/spaghetti-6639970_640.jpg",
      description: "We all know that preparing lunches and dinners can at times create frayed nerves. Personal Chef Fabio takes all the stress out of meal preparation by coming to your home and preparing the food, leaving it ready for a simple reheating whenever you want."
    }
  ];

  return (
    <Container id="services" maxWidth="lg" sx={{  scrollMarginTop: "70px",
      mt: isMobile ? 2 : 4, 
      mb: isMobile ? 2 : 4,
      p: isMobile ? 1 : 2 
    }}>
      <Grid2 container spacing={4}>
        {services.map((service, index) => (
          <Grid2 size={{ xs:12, sm:12, md:4}} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title.toLowerCase()}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ p: isMobile ? 2 : 3 }}>
                <StyledTitle>
                  {service.title}
                </StyledTitle>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 3,
                    minHeight: '150px'
                  }}
                >
                  {service.description}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  borderTop: 1,
                  borderColor: 'divider',
                  pt: 3,
                }}>
                  <StyledButton 
                    size="large"
                  >
                    Get in Touch
                  </StyledButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

