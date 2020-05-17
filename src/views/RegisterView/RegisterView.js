import React from 'react';
import axios from 'axios';

import './RegisterView.scss';

class RegisterView extends React.Component {

    register = (event) => {
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

        axios.post(url + 'register', form, options)
            .then(response => {
                this.props.history.push("/login");
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="container">
                <h3>Register</h3>
                <form onSubmit={this.register}>
                    <label>Login</label>
                    <br />
                    <input type="text" name="username" required />
                    <br />
                    <label>First name</label>
                    <br />
                    <input type="text" name="first name" required />
                    <br />
                    <label>Surname</label>
                    <br />
                    <input type="text" name="surname" required />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required />
                    <br />
                    <label>Repeat password</label>
                    <br />
                    <input type="password" name="repeat password" required />
                    <br />
                    <input type="submit" value="Register" className="register-button" />
                </form>
            </div>
        )
    }
}

export default RegisterView;
