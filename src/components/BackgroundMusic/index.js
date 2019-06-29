import React from 'react';
import Sound from 'react-sound';
import Music from '../../resources/hbd.mp3';

const BackgroundMusic = (props) => {
    return (
        <Sound
            url={Music}
            playStatus={props.isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            loop = {true}
        />
    )
}

export default BackgroundMusic;