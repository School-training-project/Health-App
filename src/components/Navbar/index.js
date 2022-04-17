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
import logo from "./logoblanc.png"

const Navbar = () => {

    return (
        <div className='nav'>
            <Nav>
                <NavLogo to="/" >
                <img src={logo} style={ {width:"7%" }}/>
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
                    <NavBtn>
                        <NavBtnLink to="/signIn">Signout</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </div>
    );
};
export default Navbar;