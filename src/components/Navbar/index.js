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
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/progress"
                        activeStyle={{ color: 'black' }}
                    >
                        Progress
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Quiz
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activeStyle={{ color: 'black' }}
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/map"
                        activeStyle={{ color: 'black' }}
                    >
                        Map
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/">Sign out</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;