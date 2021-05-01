import React from 'react';
import Link from 'next/link'
import NewsRow from '../../home/right/partials/NewsRow';
import AddFriendRow from '../../home/right/partials/AddFriendRow';
import ActivityRow from '../../home/left/partials/ActivityRow'

function BasicWidget({type, rows, title, link}) {
    // -----------------------------------------------------------------------
    //  **&&##  props.type and props.rows are mandatory properties for this component  ##&&**
    //  PROPS:
    //    type = string ['2-column-row-img', 'friends', 'text-updates', 'photos]
    //    rows = array
    //    title = string
    //    link = string
    // -----------------------------------------------------------------------

    if (type === '2-column-row-img') {
        return(
            <div className="__card">
                <h1 className="__landing-title">{title}<span className='__see-all-container'><Link href={link ? link : "/"}><a  className='__see-all'>See All</a></Link></span></h1>
                <div className="__card-list">
                    {rows.map((article, index) => (
                        <NewsRow
                            imgLink = { article.imgLink }
                            text = { article.text }
                            articleLink = { article.articleLink }
                            followers = {article.followers}
                            key = { index }
                        />
                    ))}
                </div>
            </div>
        )
    } else if (type === 'friends') {
        return (
            <div className="__card">
                <h1 className="__landing-title">
                    Friends
                    <span className="__see-all-container">
                        <Link href={link ? link : '/'}>
                            <a className="__see-all">See All</a>
                        </Link>
                    </span>
                </h1>
                <div className="__card-list  __scrollable">
                    {rows.map((friend, index) => (
                        <AddFriendRow
                            avatar={friend.avatar}
                            link={friend.link}
                            name={friend.name}
                            followers={friend.followers}
                            online={friend.online}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    } else if (type === 'text-updates') {
        return (
            <div className="__card">
                <h1 className="__landing-title">Recent Activities</h1>
                <div className="__card-list">
                    {rows &&
                        rows.map((activity, index) => (
                            <ActivityRow
                                time={activity.time}
                                text={activity.text}
                                linkText={activity.linkText}
                                link={activity.link}
                                key={index}
                                id={index}
                            />
                        ))}
                </div>
            </div>
        );
    } else if (type === 'photos') {
        return (
            <div className="__card">
                <h1 className="__landing-title">Photos</h1>
                <div className='__widget-photos'>
                    {rows && 
                        rows.map((photo, index) => (
                            <div className='__container' key={index} >
                                <img src={photo.img} className='__widget-photo' />
                            </div>
                        ))}
                </div>
            </div>
        ); 
    } else if (type === 'recentpost') {
        return (
            <div className="__card">
                <h1 className="__landing-title">Latest Posts</h1>
                <div className='__widget-photos'>
                    {rows && 
                        rows.map((photo, index) => (
                            <div className='__container' key={index} >
                                <img src={photo.img} className='__widget-photo' />
                            </div>
                        ))}
                </div>
            </div>
        ); 
    }
        
    }


export default BasicWidget
