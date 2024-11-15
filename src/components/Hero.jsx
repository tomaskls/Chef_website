import { Box, CardActionArea, Typography, CardMedia, CardContent, Card } from '@mui/material';

export function HeroCard() {
    return (
        <div >
            <Box id='home' sx={{ width: '100%', marginBottom: 2, scrollMarginTop: "80px", }}>
                <Typography sx={{ fontSize: { xs: '2.5rem', sm: '5rem' } }} variant="h1">Food is my Passion!</Typography>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '1.3rem' } }} gutterBottom variant="h6" component="div">
                                CATERING & IVENTS PROFESSIONAL PRIVAT CHEF
                            </Typography>
                        </CardContent>
                        <CardMedia component="img" height="auto" image="/vegetable-pan-8027678_640.jpg" alt="vegeees"/>
                    </CardActionArea>
                </Card>
            </Box>
        </div>
    );
}
