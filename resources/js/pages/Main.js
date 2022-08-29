import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import MovieCard from '../components/cards/MovieCard';

function Main() {
    return (
        <container className='flex justify-center'>
            <div className='border h-4/6 w-2/3 my-10 p-5'>
                <Typography variant='h5' align='center'>Choose your movie and book the seat now</Typography>
                <Grid container marginTop={5}>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={4} padding={2}>
                        <MovieCard/>
                    </Grid>
                </Grid>
            </div>
        </container>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
