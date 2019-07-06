import React, {Component} from 'react';
import firebase from '../Firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

class MoreMessages extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('messages');
        this.unsubscribe = null;
        this.state = {
            messages: [],
            isLoading: true
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            const { name, message, profilePic } = doc.data();
            messages.push({
                key: doc.id,
                doc, // DocumentSnapshot
                name,
                message,
                profilePic,
            });
        });
        this.setState({
            messages: messages,
            isLoading: false
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {

        let isLoading = this.state.isLoading;

        if(isLoading) {
            return (
                <div>
                    <CircularProgress/>
                </div>
            );
        }

        return (
            <div>
                <List style={{
                    width: '100%',
                    maxWidth: '80%',
                    marginLeft: '10%',
                    marginRight: '10%'
                    //backgroundColor: theme.palette.background.paper
                }}>

                    {this.state.messages.map(message =>
                        <ListItem alignItems="flex-start" key={message.key}>
                            <ListItemAvatar>
                                <Avatar>{message.name.charAt(0)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={message.name}
                                secondary={
                                    <React.Fragment>
                                        {" — " + message.message}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )}
                </List>
            </div>
        );
    }
}

export default MoreMessages;