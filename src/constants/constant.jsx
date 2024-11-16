import PropTypes from 'prop-types';
import { Card, Typography, Button,  useTheme} from '@mui/material';

export const StyledCard = ({ children, ...props }) => {
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

export const StyledTitle = ({ children, ...props }) => {
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

export const StyledButton = ({ children, ...props }) => {
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