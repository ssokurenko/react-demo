import React from 'react';
import axios from 'axios';

import './Form.css';


class Form extends React.Component {

    state = {
        userName: ''
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.get('https://api.github.com/users/' + this.state.userName)
            .then(response => {
                this.props.onSubmit(response.data);
            })
            .catch(() => {
                window.alert('User not found');
            });
        this.setState({ userName: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Type Github user name here"
                    value={ this.state.userName }
                    onChange={(event) => this.setState({ userName: event.target.value })  }/>
                <button type="submit">Find and show</button>
            </form>
        );
    };
}

export default Form;