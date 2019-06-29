import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import {deepPurple, pink} from "@material-ui/core/colors";

const App = () => {
    return <BrowserRouter>
        <Routes/>
    </BrowserRouter>
}

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: pink
    },
})

ReactDOM.render(
    <MuiThemeProvider theme = {theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
