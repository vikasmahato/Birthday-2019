import React, {Component} from 'react';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';


class PlayButton extends Component {

    render () {

        return (<div>
            <Zoom in={this.props.displayPlayButton} timeout={1000}>
                <Button variant="contained" size="large" color="primary" style={{
                    justifyContent: 'center'
                }} onClick={() => this.props.handleClickPlay()}>
                    Start
                    <PlayCircleOutline />
                </Button>
            </Zoom>
        </div>);
    }
}

export default PlayButton;