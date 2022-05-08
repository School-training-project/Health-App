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
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
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
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                            </path>
                                        </svg>
                                    </span>
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