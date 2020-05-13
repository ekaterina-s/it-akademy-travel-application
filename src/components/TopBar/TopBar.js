import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logotype from '../../icons/logotype.png';
import home from '../../icons/home.svg';
import './TopBar.scss';

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
            <nav className="d-flex nav topbar">
                <div className="logotype-img"><img src={logotype} /></div>

                {
                    !isAuthorized && (
                        <div className="topbar-buttons">
                            <Link to='/' className="nav-link active links"><img src={home} className="home-img" /></Link>
                            <Link to='/contact-us' className="nav-link active links">Contact us</Link>
                            <Link to="/register" className="nav-link active links">Register</Link>
                            <Link to="/login" className="nav-link active links"
                                onClick={this.handleClick} >
                                Login
                        </Link>
                        </div>
                    )
                }

                {
                    isAuthorized && (
                        <div className="topbar-buttons">
                            <Link to='/' className="nav-link active links"><img src={home} className="home-img" /></Link>
                            <Link to='/contact-us' className="nav-link active links">Contact us</Link>
                            <Link to="/add-hotel" className="nav-link active links">Add hotels</Link>
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