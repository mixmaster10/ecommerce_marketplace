import React from 'react';
import Link from 'next/link';

const Register = (props) => {
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
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="/register">Signup</Link>
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
                        <h3>Just register to join with us</h3>
                        <p>
                            A platform with efficient integration of many
                            features and so much more
                        </p>
                    </div>
                    <div className="form-detail">
                        <h3 className="text-center">Create New Account</h3>
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
                            <span>Or register with email</span>
                        </div>
                        <form className="form">
                            <div className="form-group">
                                <i className="fa fa-user"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <i className="fa fa-envelope"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="row password-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <i className="fa fa-lock"></i>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <i className="fa fa-lock"></i>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="password"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        value=""
                                    />{' '}
                                    <span style={{paddingLeft:'7px'}}>I have read and accept the Terms of </span>
                                    <p className="m-0">
                                        <a href="#">
                                            Service & Privacy Policy*
                                        </a>
                                    </p>
                                </div>
                                <div className="login-btn m-0">
                                    <a href="#" className="btn">
                                        Continue
                                    </a>
                                </div>
                            </div>
                        </form>
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

export default Register;
