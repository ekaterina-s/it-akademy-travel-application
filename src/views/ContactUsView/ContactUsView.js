import React from 'react';
import './ContactUsView.scss';

class ContactUsView extends React.Component {


    render() {
        return (
            <div className="container">
                <h3>Contact us</h3>
                <form onSubmit={this.login}>
                    <label>name</label>
                    <br />
                    <input type="text" name="name" required />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <label for="message">Message</label>
                    <br />
                    <textarea rows="10" cols="45" name="text"></textarea>
                    <br />
                    <input type="submit" value="Send" className="send-button" />
                </form>
            </div>
        )
    }
}

export default ContactUsView;