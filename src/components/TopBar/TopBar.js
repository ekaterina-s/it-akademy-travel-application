import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TopBar extends React.Component {

    handleClick = () => {
        this.props.history.push('/login');
    }

    handleLogoutClick = () => {
        localStorage.removeItem('token');
        this.props.verifyUserStatus();
    }

    render() {
        const { isAuthorized, user } = this.props;
        return (
            <nav>
                <Link to='/'>Home</Link>
                {
                    !isAuthorized && (
                        <div>
                        <Link to="/register">Register</Link>
                        <input
                            type="button"
                            value="Login"
                            onClick={this.handleClick} 
                            />
                            </div>
                    )
                }

                {
                    isAuthorized && (
                        <div>
                        <Link to="/add-hotel">Add hotels</Link>
                            <input type="button" 
                            value="Logout" 
                            onClick={this.handleLogoutClick}
                            />
                            <div className="user-profile">
                               {user.username}
                            </div>
                        </div>
                    )
                }

            </nav>
        )
    }
}

export default withRouter(TopBar)