import React, { useState } from 'react';
import Views from '../../helpers/adItem/helpers/Views'
import Likes from '../../helpers/adItem/helpers/Likes'
import Comments from '../../helpers/adItem/helpers/Comments';
import Shares from '../../helpers/adItem/helpers/Share';
import PostComment from '../../../../../../../shared/widgets/interactCard/PostComment';
import FriendLikes from './FriendLikes'

function SocialRow({ data, handle}) {
    const [ displayComment, updateDisplayComment] = useState(false); 

    return (
        <>
            {/* <div className="__reactions-row">
                <div className="__social-reactions">
                    <Views views={props.data.views} />
                    <Likes likes={props.data.likes} />
                    <Comments
                        comments={props.data.comments}
                        displayComment={displayComment}
                        updateDisplayComment={updateDisplayComment}
                    />
                    <Shares shares={props.data.shares} />
                </div>
                <div>
                    <FriendLikes data={props.data.friendLikes} />
                </div>
            </div>
            <ul className='__buttons-row'>
                <li>
                    <i className="fa fa-thumbs-up" />
                    <p>Like</p>
                </li>
                <li onClick={() => updateDisplayComment(!displayComment)}>
                    <i className="fa fa-comments" />
                    <p>Comment</p>
                </li>
                <li>
                    <i className="fa fa-share-square" />
                    <p>Share</p>
                </li>
            </ul>
            {displayComment && <PostComment
                avatar={props.handle.avatar}
                placeholder="Write your comment"
                displayComment={displayComment}
            />} */}

            <div className="post-group-footer">
                <div className="post-group-info">
                    <ul>
                        <li>
                            <a href="#" className="post-views">
                                <i className="fa fa-eye"></i>
                                <span>{data.views}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="post-comments">
                                <i className="fa fa-comments"></i>
                                <span>{data.comments}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="post-likes">
                                <i className="fa fa-thumbs-up"></i>
                                <span>{data.likes}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="post-shares">
                                <i className="fa fa-share-alt"></i>
                                <span>{data.shares}</span>
                            </a>
                        </li>
                    </ul>
                    <div className="viewers">
                        <FriendLikes data={data.friendLikes} />
                    </div>
                </div>
                <div className="post-btn">
                    <a href="#" className="post-like">
                        <i className="fa fa-thumbs-up"></i>Like
                    </a>
                    <a className="post-comment" onClick={() => updateDisplayComment(!displayComment)}>
                        <i className="fa fa-comments"></i>Comment
                    </a>
                    <a href="#" className="post-share">
                        <i className="fa fa-share-square"></i>Share
                    </a>
                </div>
                {displayComment && <PostComment avatar={handle.avatar} placeholder="Write your comment" displayComment={displayComment} /> }
            </div>
        </>
    );
}

export default SocialRow;