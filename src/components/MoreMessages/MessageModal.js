import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MoreMessages from "../MoreMessages";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

export default function MessageModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        props.backFriendsMessages();
    }

    function handleMaxWidthChange(event) {
        setMaxWidth(event.target.value);
    }

    function handleFullWidthChange(event) {
        setFullWidth(event.target.checked);
    }

    return (
        <React.Fragment>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">More messages from your friends</DialogTitle>
                <DialogContent>
                    <MoreMessages/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}