import React, { Component } from "react";
import { Link } from "react-router-dom";
import './signform.css';
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };
    render() {
        return (
            <form noValidate onSubmit={this.onSubmit}>

                <div className="form-group" >

                    <input type="text"
                        onChange={this.onChange}
                        value={this.state.name}
                        // error={errors.name}
                        className="form-control"
                        placeholder="Enter Name"
                    />
                    <br />

                    <input type="text"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.email}
                        // error={errors.email}
                        placeholder="Enter Email"
                    />

                    <br />

                    <input type="password"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.password}
                        // error={errors.password}
                        placeholder="Enter password" />

                    <br />

                    <input type="password"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.password2}
                        // error={errors.password2}
                        placeholder="Confirm password" />
                    <br />

                    <button type="submit" className="signbutton">SIGN UP</button>
                </div>
            </form >
        )
    }
}
export default Signup;