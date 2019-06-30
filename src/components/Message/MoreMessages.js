import React from 'react';
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";


const MoreMessages = (props) => {
    return(
        <div>
            <Zoom in={true} timeout={1000}>
                <Button variant="contained" size="small" color="primary" style={{
                    justifyContent: 'center'
                }} onClick={() => props.handleClickMore()}>
                    More Messages from your friends
                </Button>
            </Zoom>
        </div>
    )
}

export default MoreMessages;