import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid2 } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <div>
            <Grid2 container spacing={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="/fire-1654828_640.jpg"
                            alt="fire"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            MEET FABIO
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Hi, My name is Fabio I’m Italian from the Amalfi coast I have been a chef since I was 14 years old. I was the chef for the Italian national soccer team for 4 years. We won the World Cup in 2006 in Germany.I specialize in Italian cuisine and love sharing my passion for food.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Get in touch
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="/restaurant-1284351_640.jpg"
                            alt="restaurant"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            PERSONAL CHEF
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Whether you are planning a small simple dinner party for your friends or an impressive multi-course meal for business clients, Personal Chef Fabio will create the memorable menu. All meals are prepared at your place with seasonal ingredients from local farmers, and fish markets.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Get in Touch
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="/spaghetti-6639970_640.jpg"
                            alt="spaghetti"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            MEAL PREPPING
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            We all know that preparing lunches and dinners can at times create frayed nerves. Personal Chef Fabio takes all the stress out of meal preparation by coming to your home and preparing the food, leaving it ready for a simple reheating whenever you want.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Get in Touch
                        </Button>
                    </CardActions>
                </Card>
            </Grid2>
        </div>
    );
}
