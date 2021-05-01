import React from 'react';
import Link from 'next/link'
// import followers from '../../../public/static/data/followers.json';
// import Cards from './Cards';

function Card(props) {
    return (
        <>
            <div className="_group-card-container">
                {props.ratings && <></>}
                {props.banner && (
                    <>
                        <img
                            className="_group-card-banner-img"
                            src={props.banner}
                            alt="banner image"
                        />
                    </>
                )}

                {props.members && (
                    <>
                        <div className="_group-card-content">
                            <h4 className="_group-card-title">{props.group}</h4>
                            <p className="_group-card-subtitle">
                                {props.members} members
                            </p>
                            <div className="_group-card-member-info">
                                <img
                                    className="_group-card-member-avatar"
                                    src={props.avatar}
                                    alt="avatar image"
                                />
                                <p className="_group-card-member-description">
                                    Stella and 2 friends are members
                                </p>
                            </div>
                            <div className="_group-card-btn-container">
                                <a
                                    className="_group-card-btn _btn-primary"
                                    href="">
                                    Join
                                </a>
                                <Link href='/group-feed'>
                                    <a
                                        className="_group-card-btn _btn-secondary"
                                        href="">
                                        View
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                {props.catagory && (
                    <>
                        <div className="_group-card-catagory-container">
                            <h4 className="_group-card-catagory">
                                {props.catagory}
                            </h4>
                        </div>
                    </>
                )}
            </div>
            {props.thumbnail && (
                <>
                    <div className="_group-card-thumbnail-container">
                        <img
                            className="_group-card-thumbnail"
                            src={props.thumbnail}
                            alt=""
                        />
                        <div className="_groups-card-thumbnail-heading">
                            <h4 className="_group-card-title">{props.group}</h4>
                            {props.tags.map((tag, i) => (
                                <span key={i} className="_group-card-tags">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}
            {/* For the center seller wall */}
            {(props.similarStories ||
                props.relatedGroups ||
                props.contacts) && (
                <>
                    <div className="_seller-card-aside-container">
                        <div className="_seller-card-aside-header">
                            <h3 className="_seller-card-aside-title">
                                {props.title}
                            </h3>
                            <a className="_seller-card-aside-more" href="#">
                                See all
                            </a>
                        </div>
                        <div className="_seller-card-aside-content-container">
                            {props.similarStories && (
                                <>
                                    {props.similarStories.map((p, i) => (
                                        <div
                                            key={i}
                                            className="_seller-card-aside-content">
                                            <img
                                                className="_seller-card-aside-content-img"
                                                src={p.banner}
                                                alt="post image"
                                            />
                                            <div className="_seller-card-aside-text-container">
                                                <h4 className="_seller-card-aside-subTitle">
                                                    {p.title}
                                                </h4>
                                                <p className="_seller-card-aside-followers">
                                                    {p.followers.length > 4
                                                        ? `${p.followers[0]}${p.followers[1]}k `
                                                        : `${p.followers} `}
                                                    followers
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            {props.relatedGroups && (
                                <>
                                    {props.relatedGroups.map((p, i) => (
                                        <div
                                            key={i}
                                            className="_seller-card-aside-content">
                                            <img
                                                className="_seller-card-aside-content-img"
                                                src={p.banner}
                                                alt="post image"
                                            />
                                            <div className="_seller-card-aside-text-container">
                                                <h4 className="_seller-card-aside-subTitle">
                                                    {p.group}
                                                </h4>
                                                <p className="_seller-card-aside-followers">
                                                    {p.followers.length >= 6
                                                        ? `${p.followers[0]}${p.followers[1]}${p.followers[2]}k `
                                                        : p.followers}
                                                    follwers
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            {props.contacts && (
                                <>
                                    {props.contacts.map((p, i) => (
                                        <div
                                            key={i}
                                            className="_seller-card-aside-content">
                                            <div className="_seller-card-aside-avatar-container">
                                                <img
                                                    className="_seller-card-aside-avatar"
                                                    src={p.avatar}
                                                    alt="avatar image"
                                                />
                                                <div className="_seller-card-aside-online"></div>
                                            </div>
                                            <div>
                                                <h4 className="_seller-card-aside-fullName">
                                                    {p.firstName} {p.lastName}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
export default Card;
