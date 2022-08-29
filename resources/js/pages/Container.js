import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { Grid, Typography } from "@mui/material"
import MovieCard from "../components/cards/MovieCard"
import BookingDialogs from "../components/dialogs/BookingDialog"
import { getEventSchedules } from "../utils/network/lib/Event"
import { setEvenSchedulesData } from "../utils/redux/reducers/EventScheduleSlice"
import Loading from "../components/Loading"

function Container() {

    const dispatch = useDispatch()

    const { originalData } = useSelector((state) => state.eventSchedules)

    useEffect(() => {
        getEventSchedules((res) => {
            dispatch(setEvenSchedulesData({
                originalData: res,
                filterableData: res
            }))
        })
    }, [])

    if(!originalData) return <Loading oepn={originalData==null}/>

    return (
        <container className='flex justify-center'>
            <div className='h-4/6 w-2/3 my-10 p-5'>
                <Typography variant='h6' align='center' marginTop={2}>Choose your movie and book the seat now</Typography>
                <Grid container marginTop={2}>
                    {
                        originalData.map(evetSchedule => {
                            return (
                                <Grid xs={4} padding={2}>
                                    <MovieCard cardData={evetSchedule}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <BookingDialogs/>
        </container>
    )
}

export default Container
