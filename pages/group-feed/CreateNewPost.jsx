import React from 'react';

const CreateNewPost = (props) => {
    return (
        <div className="create-new-post chat-box mb-3">
            <h6>Create New Post</h6>
            <ul>
                <li><a href="#" className="post"><i className="fa fa-copy"></i><span>Post</span></a></li>
                <li><a href="#" className="photo-video"><i className="fa fa-photo"></i><span>Photo/Video</span></a></li>
                <li><a href="#" className="stream"><i className="fa fa-film"></i><span>Live Stream</span></a></li>
            </ul>
            <div className="create-post-text">
                <span className="post-user"><img className="img-fluid" src="https://images.unsplash.com/photo-1543165365-07232ed12fad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></span>
                <input type="text" className="form-control" placeholder="Write something for this group" />
            </div>
        </div>
    )
}

export default CreateNewPost;