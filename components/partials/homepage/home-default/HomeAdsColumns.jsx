import React from 'react';
import Link from 'next/link';

const HomeAds = () => (
    <div className="ps-home-ads">
        <div className="ps-container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img
                                src="/static/img/collection/home-1/1.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img
                                src="/static/img/collection/home-1/2.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <Link href="/shop">
                        <a className="ps-collection">
                            <img
                                src="/static/img/collection/home-1/3.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default HomeAds;
