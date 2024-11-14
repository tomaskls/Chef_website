import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {Box} from '@mui/material';

export default function HeroCard() {
    return (
        <div>
            <Box sx={{ width: '100%', marginBottom:2, }}>
                    <Card sx={{ maxWidth: "100%" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    CATERING & IVENTS PROFESSIONAL PRIVAT CHEF
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="auto"
                                image="/vegetable-pan-8027678_640.jpg"
                                alt="vegeees"
                            />
                        </CardActionArea>

                    </Card>
            </Box>
        </div>
    );
}
