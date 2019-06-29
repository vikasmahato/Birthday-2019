import React from 'react';
import greetingImg from '../../resources/greeting.png';
import Zoom from "@material-ui/core/Zoom";

const Greeting  = (props) => {

    return (
        <div>
            <Zoom in={props.isPlaying} timeout={1000}>
                <img height="300" width="400" src={greetingImg} alt="Happy Birthday" />
            </Zoom>
        </div>
    )
}

export default Greeting;