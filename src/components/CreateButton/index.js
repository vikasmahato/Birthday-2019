import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
      //  margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(1)
    }
}));

export default function CreateButton(props) {
    const classes = useStyles();
    return (
                <Link to="/create">Create Message</Link>
    );
}
