import React, { Component } from 'react';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import {  withRouter } from "react-router-dom";
import { logoutUser } from '../../actions/authActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";




class Navbar extends Component {
    onLogoutClick = e => {
        this.props.logoutUser();
        window.location.pathname = "/";
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div className='nav'>
                <Nav>
                    <NavLogo to="/test" >

                        HEALTH APP
                    </NavLogo>
                    <Bars />
                    <NavMenu>
                        <NavLink
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            strict to="/progress"
                        >
                            Progress
                        </NavLink>
                        <NavLink
                            to="/quiz"
                        >
                            Quiz
                        </NavLink>
                        <NavLink
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/map"
                        >
                            Map
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink onClick={this.onLogoutClick} to='/' >Sign out</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </Nav>
            </div>
        );
    };
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
)(Navbar))