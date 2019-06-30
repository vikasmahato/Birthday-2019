import React from 'react';
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import ReplayOutlined from "@material-ui/icons/ReplayOutlined";


const ReplayButton = (props) => {
    return(
        <div style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        }}>
            <Zoom in={true} timeout={1000}>
                <Button variant="contained" size="small" color="secondary" style={{
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center'
                }} onClick={() => props.handleClickReplay()}>
                    Replay
                    <ReplayOutlined />
                </Button>
            </Zoom>
        </div>
    )
}

export default ReplayButton;