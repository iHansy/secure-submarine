import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserList extends Component {

    state = {
        usernames: ''
    }


    componentDidMount() {
        axios.get('/api/userList')
            .then((response) => {
                console.log('userList', response.data);
                this.setState({
                    usernames: [response.data]
                })
                console.log(this.state.usernames);
            })
            .catch((error) => {
                console.log('error getting userList', error);
            })
    }

    render() {
        return (
            <div>
                <h2>UserList Component!</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(UserList);
