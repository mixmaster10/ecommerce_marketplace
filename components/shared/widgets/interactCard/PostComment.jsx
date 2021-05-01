import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { helpers } from '../../../../helpers/home-page/functions';
import { addPost } from '../../../../store/user/action';

function PostComment(props) {
    // This component takes 2 props:
    // placeholder = string
    // displayComment = boolean
    // All other required data is pulled from redux

    const [input, updateInput] = useState('');

    const classes = props.displayComment
        ? '__post-container'
        : '__post-container __closed';

    const handleInput = (e) => {
        updateInput(e.target.value);
    };

    const postPost = () => {
        const postObject = {
            type: 'video-ad',
            userName: `${props.user.handle.firstName} ${props.user.handle.lastName}`,
            contentType: 'Shared',
            // creation_date: `${moment().format('YYYY-MM-DD HH:mm:ss')}`,
            title: `Jeff's Title`,
            message: input,
            tags: [],
            friendLikes: [],
        };
        helpers.createPost(postObject);
        // props.addPost(postObject);
    };

    return (
        <div className={classes}>
            <img
                className="__avatar "
                // src={props.user && props.user.handle.avatar}
                // src={
                //     'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2272&q=80'
                // }
                src={
                    props.user && props.user.handle && props.user.handle.avatar
                }
                alt="avatar image"
            />
            <div className="__input-container">
                <input
                    className="__post-comment-input"
                    placeholder={props.placeholder}
                    value={input}
                    onChange={handleInput}
                />
                <div className="__post-button" onClick={postPost}>
                    Post
                </div>
            </div>
        </div>
    );
}

function mapUserToProps(store) {
    return {
        user: store.user,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addPost }, dispatch);
}

export default connect(mapUserToProps, matchDispatchToProps)(PostComment);
