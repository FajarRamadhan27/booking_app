import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { CssBaseline } from '@mui/material';
import CustomAppBar from '../components/CustomAppBar';
import { Provider } from 'react-redux';
import Store from '../utils/redux/Store';

function Main() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <CustomAppBar/>
            <Container/>
        </React.Fragment>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={Store}>
                <Main />
            </Provider>
        </React.StrictMode>
        , document.getElementById('app')
    );
}
