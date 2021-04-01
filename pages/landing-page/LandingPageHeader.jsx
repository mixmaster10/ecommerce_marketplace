import Link from 'next/link';
import React, {useEffect, useState} from 'react';

const LandingPageHeader = (props) => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);
    
    const [isActive, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!isActive);
      };

    return (
        <header className={scroll ? "header sticky" : "header"}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Link href="/" className="navbar-brand d-flex">
                            <img
                                src="/static/img/bjlogo.png"
                                height="30"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="hamburger-menu" onClick={toggleMenu} >
                            <img src="/static/img/hamburger-menu.svg" />
                        </div>
                        <div className={isActive ? 'login-signup-btn active': 'login-signup-btn'}>
                            <ul>
                                <li>
                                    <a href="#features">Features</a>
                                    {/* <Link
                                        to="features"
                                        spy={true}
                                        smooth={true}>
                                        Features
                                    </Link> */}
                                </li>
                                <li>
                                    <a href="#discover">Discover</a>
                                    {/* <Link
                                        to="discover"
                                        spy={true}
                                        smooth={true}>
                                        Discover
                                    </Link> */}
                                </li>
                                {/* <li>
                                    <a href="#community">Community</a>
                                    <Link
                                        to="community"
                                        spy={true}
                                        smooth={true}>
                                        Community
                                    </Link> 
                                </li> */}
                                <li>
                                    {/* <Link href="/sell">
                                        <a>Sell</a>
                                    </Link> */}
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                        <a>Register</a>
                                    </Link>
                                </li>
                                {/* <li><a href="/login">Login</a></li>
                                    <li><a href="/register">Signup</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LandingPageHeader;
