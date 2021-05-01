import React from 'react';
import Link from 'next/link';

const HomeAds = (props) => (
    <div className="">
        {/* <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <Link href={props.link || "/shop"}>
                <a className="ps-collection">
                    <img
                        src={props.image || "/static/img/collection/home-1/ad-1.jpg"}
                        alt="martfury"
                    />
                </a>
            </Link>
        </div> */}
        {/* <div className="">
            <Link href={props.linkLeft || '/shop'}>
                <a>
                    <img
                        className=" __sale-card"
                        src={
                            props.imageLeft ||
                            '/static/img/collection/home-1/1.jpg'
                        }
                        alt="martfury"
                    />
                </a>
            </Link>
        </div> */}
        <div className="">
            <Link href={props.link || '/shop'}>
                <a>
                    <img
                        className=" __sale-card"
                        src={
                            props.image || '/static/img/collection/home-1/2.jpg'
                        }
                        alt="martfury"
                    />
                </a>
            </Link>
        </div>
    </div>
);

export default HomeAds;
