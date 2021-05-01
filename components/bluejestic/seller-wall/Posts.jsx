import React from 'react';
import { helpers } from '../../../helpers/seller-wall/functions';
/*
Target heart button that belongs to post ID. Console.log the id
 */

/* */
let like = 0;
function Posts(props) {
    function handleClick(e, props) {
        switch (e.target.className) {
            case 'fa fa-heart-o':
                toggleLike(e.target, props);
                break;
            case 'fa fa-share-alt':
                break;
            case 'fa fa-commenting-o':
                break;
        }
    }

    function toggleLike(heartButton, toggleLikeProps) {
        console.dir(heartButton);
        if (heartButton.style.color === '') {
            heartButton.style.color = 'red';
            heartButton.style.fontSize = '1.25em';
            like++;
            toggleLikeProps.toggleLike(like, toggleLikeProps.id);
        } else if (heartButton.style.color === 'red') {
            heartButton.style.color = '';
            heartButton.style.fontSize = '1em';
            like--;
            toggleLikeProps.toggleLike(like, toggleLikeProps.id);
        }
    }

    let fullDateAndTime = helpers.convertTime(props.time);
    const { date, hourDiff, minDiff } = fullDateAndTime;
    return (
        <div className="__main-content">
            <div className="__social-ad">
                <div className="__social-header">
                    {/* <img src={props.data.avatar} className='__social-avatar' /> */}
                    <div className="__social-title-text">
                        {/* <h1 className="__social-title">{props.data.headline}<span> {props.data.contentType}</span><i className="fa fa-ellipsis-v" /></h1> */}
                        <h2 className="__time-ago">
                            {/* <i className="fa fa-globe" /> Published: {time} */}
                        </h2>
                        {/* <h2 className='__social-content'>{props.data.content}</h2> */}
                        <div className="__social-tags">{/* {tags} */}</div>
                    </div>
                </div>
                {/* <img src={props.data.img} /> */}
                {/* <SocialRow data={props.data} handle={props.handle}/> */}
            </div>
        </div>
    );
    // <div className="_post-container">
    //     <div className="_post-header-container">
    //         <img
    //             className="_post-avatar-img"
    //             src={props.avatar}
    //             alt="avatar"
    //         />
    //         <div className="_post-header-text">
    //             <h4 className="_post-header-store">{props.store}</h4>
    //             <div className="_post-time-posted">
    //                 {date && (
    //                     <>
    //                         {hourDiff >= 1 && hourDiff < 24 && (
    //                             <>
    //                                 <div className="_tooltip">
    //                                     <span> {`${hourDiff}h`}</span>
    //                                     <span className="_tooltiptext">
    //                                         {date}
    //                                     </span>
    //                                 </div>
    //                             </>
    //                         )}
    //                         {hourDiff < 1 && (
    //                             <>
    //                                 <div className="_tooltip">
    //                                     <span>
    //                                         {' '}
    //                                         {minDiff < 1
    //                                             ? `Just Now`
    //                                             : `${minDiff}min`}
    //                                     </span>
    //                                     <span className="_tooltiptext">
    //                                         {date}
    //                                     </span>
    //                                 </div>
    //                             </>
    //                         )}
    //                     </>
    //                 )}
    //             </div>
    //             <h6>{props.title}</h6>
    //             <p className="_post-message">{props.message}</p>
    //             {props.tags && (
    //                 <>
    //                     <div className="_post-hashtag-container">
    //                         {props.tags.map((tag, i) => (
    //                             <p key={i} className="_post-hashtag">
    //                                 #{tag}
    //                             </p>
    //                         ))}
    //                     </div>
    //                 </>
    //             )}
    //         </div>
    //     </div>
    //     {props.images[0] && (
    //         <>
    //             <img
    //                 className="_post-img"
    //                 src={props.images[0].url}
    //                 alt="post image"
    //             />
    //         </>
    //     )}
    //     {/* Social interaction */}
    //     <div className="_post-social-interaction-container">
    //         <div className="_post-social-interaction-main">
    //             <div className="_post-social-iteraction-items">
    //                 <i className="fa fa-eye" aria-hidden="true"></i>
    //                 <p className="_post-social-itneraction-info">1.2k</p>
    //             </div>
    //             <div className="_post-social-iteraction-items">
    //                 <i
    //                     //!
    //                     onClick={(e) => handleClick(e, props)}
    //                     className="fa fa-heart-o"
    //                     aria-hidden="true"></i>
    //                 <p className="_post-social-itneraction-info">{`${props.likes}`}</p>
    //             </div>
    //             <div className="_post-social-iteraction-items">
    //                 <i
    //                     onClick={(e) => handleClick(e, props)}
    //                     className="fa fa-commenting-o"
    //                     aria-hidden="true"></i>
    //                 <p className="_post-social-itneraction-info">52</p>
    //             </div>
    //             <div className="_post-social-iteraction-items">
    //                 <i
    //                     onClick={(e) => handleClick(e, props)}
    //                     className="fa fa-share-alt"
    //                     aria-hidden="true"></i>
    //                 <p className="_post-social-itneraction-info">20</p>
    //             </div>
    //         </div>
    //         <div className="_post-social-interaction-contact-avatars">
    //             <img
    //                 className="_post-social-interaction-contact-avatar"
    //                 src={props.avatar}
    //                 alt=""
    //             />
    //         </div>
    //     </div>
    //     <div className="_post-social-comment-container">
    //         <img
    //             className="_post-social-comment-avatar"
    //             src="https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    //             alt="avatar image"
    //         />
    //         <input
    //             className="_post-social-comment-input"
    //             type="text"
    //             placeholder="Write your comment"
    //         />
    //     </div>
    // </div>
}

export default Posts;
