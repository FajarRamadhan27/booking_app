import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { setBookingDialogOpenOrClose } from '../../utils/redux/reducers/UiAttributeSlice';
import { setSelectedEventSchedule } from '../../utils/redux/reducers/EventScheduleSlice';

function MovieCard(props) {

    const { cardData } = props
    const dispatch = useDispatch()

    return (
        <Card
            onClick={() => {
                dispatch(setBookingDialogOpenOrClose(true))
                dispatch(setSelectedEventSchedule(cardData))
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={cardData.images}
                    alt={cardData.images}
                />
                <CardContent sx={{ padding: 1 }}>
                    <Typography variant="h6" component="div" >
                        { cardData.title }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard
