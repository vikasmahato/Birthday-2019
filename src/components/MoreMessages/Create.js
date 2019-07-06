import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('messages');
        this.state = {
            name: '',
            message: '',
            profilePic: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, message, profilePic } = this.state;

        this.ref.add({
            name,
            message,
            profilePic
        }).then((docRef) => {
            this.setState({
                name: '',
                message: '',
                profilePic: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
        const { name, message, profilePic } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Add Message
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/" className="btn btn-primary">Message List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label for="description">Description:</label>
                                <textArea className="form-control" name="message" onChange={this.onChange} placeholder="Message" cols="80" rows="3">{message}</textArea>
                            </div>
                            {/*<div className="form-group">
                                <label for="author">Author:</label>
                                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                            </div>*/}
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;