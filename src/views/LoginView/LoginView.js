import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './LoginView.scss';

class LoginView extends React.Component {

    login = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        for (let field of form) {
            console.log(field)
        }

        const url = 'https://nodejs-mysql-it-academy.herokuapp.com/';
        const options = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        axios.post(url + 'login', form, options)
            .then((response) => {
                localStorage.setItem('token', response.data.accessToken);
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error)
            })

    }


    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <form onSubmit={this.login}>
                    <label>Login</label>
                    <br />
                    <input type="text" name="username" required />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required />
                    <br />
                    <input type="submit" value="Login" className="login-button" />
                </form>
            </div>
        )
    }
}

export default withRouter(LoginView);
