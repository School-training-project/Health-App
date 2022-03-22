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

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
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
                        <NavBtnLink to="/signIn">Sign out</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;