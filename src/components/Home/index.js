import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import PlayButton from "../PlayButton";
import SkipButton from "../SkipButton";
import CreateButton from "../CreateButton";
import Greeting from "../Greeting";
import BackgroundMusic from "../BackgroundMusic";
import Name from "../Name/Name";
import Message from "../Message";
import MessageModal from "../MoreMessages/MessageModal";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPlayButton: true,
            displaySkipButton: true,
            isPlaying: false,
            friendsMessages: false
        };
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickSkip = this.handleClickSkip.bind(this);
        this.startPlaying = this.startPlaying.bind(this);
        this.showFriendsMessages = this.showFriendsMessages.bind(this);
        this.backFriendsMessages = this.backFriendsMessages.bind(this);
    }

    handleClickPlay() {
        this.setState({
            displayPlayButton: false,
            displaySkipButton: false
        })
        setTimeout(this.startPlaying, 1000);
    }

    handleClickSkip() {
        this.setState({
            displayPlayButton: false,
            displaySkipButton: false,
            isPlaying: false
        })
    }

    startPlaying() {
        this.setState({
            isPlaying: true
        })
    }

    showFriendsMessages() {

        this.setState({
            friendsMessages: true
        });

    }

    backFriendsMessages() {
        this.setState({
            friendsMessages: false
        })
    }

    render() {

        const isPlaying = this.state.isPlaying;
        const friendsMessages = this.state.friendsMessages;

        let message;

        if (isPlaying) {
            message = <Grid container justify="center" style={
                {
                    position: 'absolute',
                    bottom: 50,
                    zIndex: 2,
                    width: '100%',
                    height: 150
                }
            }>
                <Message
                    showFriendsMessages={this.showFriendsMessages}
                />
            </Grid>
        }

        return (
            <div>
                <BackgroundMusic isPlaying={this.state.isPlaying}/>
                {friendsMessages ? (<MessageModal backFriendsMessages = {this.backFriendsMessages}/>): null}

                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                      style={{minHeight: '100vh', zIndex: 2}}>
                    <PlayButton
                        displayPlayButton={this.state.displayPlayButton}
                        handleClickPlay={this.handleClickPlay}
                    />
                </Grid>
                <Grid container justify="center">
                    <SkipButton
                        displaySkipButton={this.state.displaySkipButton}
                        handleClickSkip={this.handleClickSkip}
                    />
                </Grid>
                <CreateButton/>
                <Grid container justify="center" style={
                    {
                        position: 'absolute',
                        top: 50,
                        left: '30%',
                        zIndex: -1,
                        width: '40%',
                        height: 150
                    }
                }
                >
                    <Greeting isPlaying={this.state.isPlaying}/>
                    <Name isPlaying={this.state.isPlaying}/>
                </Grid>

                {message}
            </div>
        );
    }
}

export default Home;