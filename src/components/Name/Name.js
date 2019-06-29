import React from 'react';
import Slide from 'react-reveal/Slide';
import './name.css';

const Name = (props) => {
    return (
        <Slide bottom when={props.isPlaying}>
            <div className="balloon">
                <div><span>S</span></div>
                <div><span>H</span></div>
                <div><span>W</span></div>
                <div><span>E</span></div>
                <div><span>T</span></div>
                <div><span>A</span></div>
            </div>
    </Slide>
    )
}

export default Name;