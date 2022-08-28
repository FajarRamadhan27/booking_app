import Typography from '@mui/material/Typography';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

function MovieCard() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/poster/infinity-war.jpg"
                    alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Book</Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard
