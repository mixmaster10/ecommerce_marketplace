import React, { useState } from 'react';
import Post from '../bluejestic/Post';
import { connect } from 'react-redux';
import {
    sellerPostToWall,
    sellerPostSuccess,
} from '../../store/seller-wall/action';
function Tabs(props) {
    const [post, setPost] = useState('');

    function handleClick(e) {
        e.preventDefault();
        props.sellerPostToWall(post);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case 'sellerPost':
                setPost(value);
        }
    }

    function openCity(e, cityName) {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName('_tab-content');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('_tab-links');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(
                ' active',
                ''
            );
        }
        document.getElementById(cityName).style.display = 'block';
        e.currentTarget.className += ' active';
    }
    return (
        <>
            <div className="_tab">
                <button
                    className="_tab-links"
                    onClick={(e) => openCity(e, 'London')}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <span>Post</span>
                </button>
                <button
                    className="_tab-links"
                    onClick={(e) => openCity(e, 'Paris')}>
                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                    <span>Album</span>
                </button>
                <button
                    className="_tab-links"
                    onClick={(e) => openCity(e, 'Tokyo')}>
                    <i className="fa fa-file-video-o" aria-hidden="true"></i>
                    <span>Video</span>
                </button>
            </div>

            {/* Post */}
            <div id="London" className="_tab-content">
                <img
                    className="_tab-avatar-img"
                    src="https://images.unsplash.com/photo-1565768028719-709cc89b4bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
                    alt=""
                />
                <input
                    onChange={handleChange}
                    name="sellerPost"
                    className="_tab-post-input"
                    type="text"
                    placeholder="Write something about your store"
                />
                {/* <button onClick={handleClick}>Submit</button> */}
                <Post />
            </div>

            {/* Post */}

            <div id="Paris" className="_tab-content">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" className="_tab-content">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
            </div>
        </>
    );
}

const mapStateToProps = (globalState) => {
    return {
        post: globalState.sellerWall.post,
    };
};

const mapDispatchToProps = { sellerPostSuccess, sellerPostToWall };

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
