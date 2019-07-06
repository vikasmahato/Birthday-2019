import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import ReplayButton from "./ReplayButton";
import MoreMessages from "./MoreMessages";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            showRow: 0
        };

         this.messages = [
             'Today is...',
             'Today is...',
             'as beautiful as other days',
        /*     'but you realize',
             'another year has gone',
             'in a blink of the eyes',
             'however',
             'Do you know..?',
             'today is just special',
             'so special to you',
             'that\'s why',
             'Let\'s make it...',
             'the best celebration ever',
             'and let me share...',
             'a piece of happiness to you',
             'I made all this...',
             'as a birthday present to you',
             'thanks for being there',
             'thanks for the friendship we made',
             'thanks for everything',
             'I wish you all the best',
             'May your life be at ease',
             'May all your wishes come true',
             'Remember your ambitions',
             'you live as a free bird...',
             'flying in the blue sky',
             'Now things are different...',
             'real story of your life',
             'is just about to begin',
             'indeed..',
             'this life is not easy as we thought',
             'but...',
             'don\'t worry',
             'don\'t be afraid',
             'because...',
             'you are not alone in this world',
             'because...',
             'this year will be better',
             'and I hope',
             'you\'ll find...',
             'happiness along the way',
             'keep your spirits up',
             'enjoy every single moment...',
             'that you experience today',
             'fill it with your most beautiful smile',
             'and make it the best memory..',
             'lastly...',
             'I\'d like to wish you one more time',
             'a very happy birthday'*/
        ];

         this.handleClickReplay = this.handleClickReplay.bind(this);
         this.displayMessageSequence = this.displayMessageSequence.bind(this);
         this.handleClickMore = this.handleClickMore.bind(this);

    }

    componentDidMount() {
        this.setState({isHidden: false});
        this.displayMessageSequence();
    }

    handleClickReplay() {
        this.setState({
            isHidden: false,
            showRow: 0
        });
        this.displayMessageSequence();
    }

    handleClickMore() {
        this.props.showFriendsMessages();
    }

    displayMessageSequence() {
        for (let i=0; i<this.messages.length; i++) {
            setTimeout( function timer(){
                let showRow = this.state.showRow + 1;
                this.setState({showRow: showRow});
            }.bind(this), i*500 );
        }
    }


    render() {

        const showRow = this.state.showRow;

        if (isWidthUp('sm', this.props.width)) {
            return (
                <div>
                    <Typography variant="h3" gutterBottom>
                    {showRow < this.messages.length ? (
                                this.messages[showRow]
                    ) : (
                        <div>
                            <ReplayButton handleClickReplay = {this.handleClickReplay}/>
                            <MoreMessages handleClickMore = {this.handleClickMore}/>
                        </div>
                    )}
                    </Typography>

                </div>
            )
        }

        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    {showRow < this.messages.length ? (
                        this.messages[showRow]
                    ) : (
                        <div>
                            <ReplayButton handleClickReplay = {this.handleClickReplay}/>
                            <MoreMessages handleClickMore = {this.props.showFriendsMessages()}/>
                        </div>
                    )}
                </Typography>

            </div>
        )
    }
}

export default withWidth()(Message);
