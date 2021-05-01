import React from 'react';
import Dropzone from '../Dropzone';
import { useForm } from 'react-hook-form';
import { helpers } from '../../../helpers/seller-wall/functions.js';
import {
    createPostTitle,
    createPostDescription,
    createPostFile,
    createPostLink,
    createPostSelect,
    createPostPublish,
    getAllPosts,
} from '../../../store/social-post/action';
import { connect } from 'react-redux';
function Post(props) {
    const { register, handleSubmit } = useForm();

    const submitForm = (e) => {
        handleSubmit(helpers.publishPost);
    };

    return (
        <div className="_post-container2">
            <p className="_post-heading">Create a new Post</p>
            <form
                className="_post-form"
                // onSubmit={handleSubmit}
                onSubmit={submitForm}>
                <input
                    required
                    className="_post-input"
                    type="text"
                    ref={register({ required: true })}
                    name="title"
                    placeholder="Add a title"
                />
                <textarea
                    required
                    ref={register({ required: true })}
                    className="_post-textarea"
                    name="message"
                    // name="post-description"
                    placeholder="Add a message"
                />
                <input
                    name="post_file"
                    type="file"
                    // onChange={handleChange}
                    ref={register({ required: true })}
                />
                {/* <select
                    // onChange={handleChange}
                    ref={register({ required: true })}
                    className="_post-select"
                    name="select">
                    <option value="">--</option>
                    <option value="group">group</option>
                </select> */}
                <input
                    // onChange={handleChange}
                    name="post-link"
                    className="_post-input"
                    type="text"
                    placeholder="Add a link"
                />
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        post: state.socialPost,
    };
};
const mapDispatchToProps = {
    createPostTitle,
    createPostDescription,
    createPostFile,
    createPostLink,
    createPostSelect,
    createPostPublish,
    getAllPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
