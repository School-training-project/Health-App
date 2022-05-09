import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import './signform.css';
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
        this.props.registerUser(newUser, this.props.history);
    };
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }
    render() {
        const { errors } = this.state;
       

        return (
            <form noValidate onSubmit={this.onSubmit}>
                <h1 style={{ textAlign: 'center' ,fontWeight: 'bold' , marginTop: '10%', color:'#34acae' }}>Create Account</h1>
                
                <img src="https://cdn-icons-png.flaticon.com/512/7142/7142859.png" style={{ width:"1.8%" , marginTop: "10.3%", marginLeft: "4%",position:"absolute" }}></img>
                <img src="https://cdn-icons-png.flaticon.com/512/546/546394.png" style={{ width:"1.5%" , marginTop: "7.5%", marginLeft: "4.3%",position:"absolute" }}></img>
                <img src="https://img.icons8.com/ios/50/000000/name--v1.png" style={{ width:"1.5%" , marginTop: "4.7%", marginLeft: "4.3%",position:"absolute" }}></img>
                <img src="https://cdn-icons-png.flaticon.com/512/7142/7142859.png" style={{ width:"1.5%" , marginTop: "13.5%", marginLeft: "4.3%",position:"absolute" }}></img>
                <div className="form-group" >

                    <input type="text"
                        onChange={this.onChange}
                        id="name"
                        className="form-control"
                        placeholder="Enter Name"
                    />
                    <br />

                    <input type="text"
                        id="email"
                        className="form-control"
                        onChange={this.onChange}
                        placeholder="Enter Email"
                    />

                    <br />

                    <input type="password"
                        id="password"
                        className="form-control"
                        onChange={this.onChange}
                        placeholder="Enter password" />

                    <br />

                    <input type="password"
                        id="password2"
                        className="form-control"
                        onChange={this.onChange}
                        placeholder="Confirm password" />
                    <br />

                    <button  type="submit" className="signbutton">SIGN UP</button>
                    
                </div>
            </form >
        )
    }
}



const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Signup));