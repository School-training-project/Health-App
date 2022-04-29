import React from 'react';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import { logoutUser } from '../../actions/authActions';
import { connect } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";



const Navbar = () => {
    const history=useHistory()
    function onLogout(e) {
        localStorage.clear()
        history.push("/")
        
    }
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
                        <NavBtnLink  to="/" onClick={onLogout}>Sign out</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </div>
    );
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default withRouter(connect(
    mapStateToProps,
    { logoutUser }
)(Navbar))