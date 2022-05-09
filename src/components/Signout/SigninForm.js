import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/test"); // push user to dashboard when they login
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/test");
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <>
            <h1 style={{ textAlign: 'center' ,fontWeight: 'bold' , marginTop: '10%' , color: '#34acae', marginBottom:'10%'}}>Sign In</h1>
                <div  className="form-group">
                    <div className="mt-8">
                        <form action="#" noValidate onSubmit={this.onSubmit} autoComplete="off">
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                <img src="https://cdn-icons-png.flaticon.com/512/546/546394.png" style={{ width:"1.5%" , marginTop: "1.9%", marginLeft: "4.3%",position:"absolute" }}></img>
                                    <input type="text" id="email"
                                        className={classnames("", {
                                            invalid: errors.email || errors.emailnotfound
                                        })}
                                        name="email"
                                        onChange={this.onChange}
                                        placeholder="Your email" />
                                    <span className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <div className="flex relative ">
                                        <img src="https://cdn-icons-png.flaticon.com/512/7142/7142859.png" style={{ width:"1.8%" , marginTop: "1.8%", marginLeft: "4%",position:"absolute" }}></img>
                                    <input
                                        type="password"
                                        id="password"
                                        className={classnames("", {
                                            invalid: errors.password || errors.passwordincorrect
                                        })}
                                        name="password"
                                        onChange={this.onChange}
                                        placeholder="Your password" />
                                    <span className="red-text">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center mb-6 -mt-4">
                            </div>
                            <div className="flex w-full">
                                <button type="submit" id="loginbutton" className="signbutton" >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
Signin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default withRouter(connect(
    mapStateToProps,
    { loginUser }
)(Signin))