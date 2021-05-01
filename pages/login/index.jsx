import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/auth/action';
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    if (props.isLoggedIn === true) {
        Router.push('/');
    }

    return (
        <div className="login-wrapper">
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link href="/" className="navbar-brand d-flex">
                                <img
                                    src="/static/img/bjlogo.png"
                                    height="30"
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className="col-6">
                            <div className="login-signup-btn">
                                <ul>
                                    <li>
                                        <Link href="/login">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/register">
                                            <a>Signup</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="login-section">
                <div className="login-form">
                    <div className="section-title text-center">
                        <h3>Please login to continue</h3>
                        <p>
                            A platform with efficient integration of many
                            features and so much more
                        </p>
                    </div>
                    <div className="form-detail">
                        <h3 className="text-center">Welcome Back</h3>
                        <ul className="social-btn">
                            <li>
                                <a href="#" className="facebook-btn">
                                    <i className="fa fa-facebook-f"></i>Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter-btn">
                                    <i className="fa fa-twitter"></i>Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="google-btn">
                                    <i className="fa fa-google"></i>Google
                                </a>
                            </li>
                        </ul>
                        <div className="or-signup">
                            <span>Or login with email</span>
                        </div>
                        {/* <form className="form"> */}
                        <div className="form-group">
                            <i className="fa fa-user"></i>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                type="text"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <i className="fa fa-lock"></i>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input mr-2"
                                    value=""
                                />{' '}
                                <span style={{paddingLeft:'7px'}}>Remember</span>
                            </div>
                            <p className="text-right forgot-password">
                                <a href="#">Forgot Password</a>
                            </p>
                        </div>
                        <div className="login-btn">
                            <button
                                onClick={() =>
                                    props.login({
                                        username,
                                        password,
                                    })
                                }
                                className="btn">
                                Login
                            </button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Help Center</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Sell on Bluejestic</a>
                        </li>
                        <li>
                            <a href="#">Brand Resources</a>
                        </li>
                        <li>
                            <a href="#">© 2021 Bluejestic, Inc.</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.auth;
};
const mapDispatchToProps = {
    login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
