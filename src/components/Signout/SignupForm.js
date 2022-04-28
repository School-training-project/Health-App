import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import './signform.css';
const Signup = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })
    
    const mapStateToProps = state => ({
        auth: state.auth,
        errors: state.errors
    });
    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(state)
    };

    return (
        <form noValidate onSubmit={onSubmit}>

            <div className="form-group" >

                <input type="text"
                    onChange={onChange}
                    id="name"
                    className="form-control"
                    placeholder="Enter Name"
                />
                <br />

                <input type="text"
                    id="email"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Enter Email"
                />

                <br />

                <input type="password"
                    id="password"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Enter password" />

                <br />

                <input type="password"
                    id="password2"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Confirm password" />
                <br />

                <button type="submit" className="signbutton">SIGN UP</button>
            </div>
        </form >
    )
}


export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Signup));