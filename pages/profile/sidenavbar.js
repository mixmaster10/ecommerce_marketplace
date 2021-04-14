import React from 'react';

const Sidenavbar = () => {
    // const showAsideBtn = document.getElementById('.show-side-btn')

    return (
        <aside className="side-nav scrollbar" id="style-7">
            <div className="heading">
                <img src="/static/img/profile/profileimage.png" alt="img" />
                <div className="info">
                    <h3>
                        <a href="#">Vincent Zhang</a>
                    </h3>
                    <p>vincent@email.com</p>
                    
                </div>
            </div>

            {/* <div className="search">
            <input type="text" placeholder="Type here"/><i className="fa fa-search" ></i>
          </div> */}
            <ul className="categories">
                <p>Profile Tools</p>

                <li>
                    <a href="#">
                     
                        <i className="fa fa-external-link"></i>
                       
                        <a href="#"> Overview</a>
                    </a>
                </li>
                <li>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    <a href="#"> Orders</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>
                <li>
                <i className="fa fa-gift" ></i>
                    <a href="#"> Gift Card</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>
                <li>
                <i className="fa fa-users" ></i>
                    <a href="#"> Friends</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>
                <li>
                <i className="fa fa-credit-card" aria-hidden="true"></i>
                    <a href="#"> Payment</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>



                <li>
                <i className="fa fa-file-text-o" ></i>
                    <a href="#">Help</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>

                <li>
                <i className="fa fa-cog" aria-hidden="true"></i>
                    <a href="#">Settings</a>
                    {/* <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul> */}
                </li>
                {/* <p>Insights</p>
                <hr />
                <li>
                    {' '}
                    <img src="/static/img/profile/message.png" alt="img" />{' '}
                    <a href="#">
                        Inbox<span className="num dang">56</span>
                    </a>
                </li>
                <li>
                    {' '}
                    <img src="/static/img/profile/notification.png" />
                    <a href="#">
                        {' '}
                        Notifications <span className="num prim">6</span>
                    </a>
                    <ul className="side-nav-dropdown">
                        <li>
                            <a href="#">Lorem ipsum</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">dolor ipsum</a>
                        </li>
                        <li>
                            <a href="#">amet consectetur</a>
                        </li>
                        <li>
                            <a href="#">ipsum dolor sit</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <i className="fa fa-comments-o fa-fw"></i>
                    <a href="#">
                        {' '}
                        Comments <span className="num prim">6</span>
                    </a>
                </li> */}
            </ul>

            {/* <div className="logout">
                <img src="/static/img/profile/log.png" />{' '}
                <button>Log Out</button>
            </div> */}
        </aside>
    );
};

export default Sidenavbar;
