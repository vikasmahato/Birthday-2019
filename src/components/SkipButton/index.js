import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    button: {
      //  margin: theme.spacing(1),
        position: "fixed",
        bottom: theme.spacing(1)
    }
}));

export default function OutlinedButtons(props) {
    const classes = useStyles();
    return (
        <div>
            <Slide direction="up" in={props.displaySkipButton} mountOnEnter unmountOnExit>
            <Button variant="outlined" color="secondary" onClick={() => props.handleClickSkip()} className={classes.button}>
                Skip
            </Button>
            </Slide>
        </div>
    );
}
