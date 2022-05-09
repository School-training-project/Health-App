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
import { display, margin, positions } from '@mui/system';




class Navbar extends Component {
    onLogoutClick = e => {
        this.props.logoutUser();
        window.location.pathname = "/";
    };
    
    render() {
        const { user } = this.props.auth;
        let score = parseInt(localStorage.getItem("score"))

        let scorehome= localStorage.getItem('scorehome')
        score+=parseInt(scorehome)
        // const higher= document.getElementById("navforhigher")
        // if ((score >50)&&(higher)){
        //     // higher.style.boxShadow= "0px 0px 30px 5px rgba(212,149,0,0.75)"
        //     higher.style.color="red"
        // }
        return (
            <div className='nav' >
                <Nav  >
                    <NavLogo to="/test" >
                        ZENLY
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
                        {score>0 &&
                            <div id="scoreContainer" style={{
                            backgroundColor:"white",
                            color:"#496366",
                            letterSpacing:"1px",
                            fontWeight:"600",
                            width:"100px",
                            height:"30px",
                            borderRadius:"20px",
                            textAlign:"center",
                            paddingTop:"7px",
                            cursor:"pointer"
                        }}>
                            Scr: {score}
                        </div>}
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