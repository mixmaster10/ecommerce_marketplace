import React,  { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../../../../store/user/action';
import { Modal } from 'antd';
import Dropzone from 'react-dropzone';
import moment from 'moment';




function VideoModal({ showModal, handleModal, addPostAction, handle, meta }) {
    const [url, updateUrl] = useState();
    const [tags, updateTags] = useState();
    const [description, updateDescription] = useState();
    const [text, updateText] = useState('');
    const [who, updateWho] = useState();
    const [group, updateGroup] = useState();
    const [error, updateError] = useState(false);


    const whoItems = ['Everyone', 'Friends', 'Family', 'Custom'];
    const whoOptions = 
        whoItems.map((item, index) => {
            return <option value={ item } key={ index }>{ item }</option>
        });
    const groupOptions = meta && meta.groups && meta.groups.map((item, index) => {
        return <option value={ item } key={ index }>{ item }</option>
    })
    


    const postVideo = () => {
        if ( url && tags && description && text && who ) {
            const postObject = {
                type: 'video-ad',
                avatar: handle.avatar,
                userName: `${handle.firstName} ${handle.lastName}`,
                contentType: 'Shared',
                views: 0,
                likes: 0,
                comments: 0,
                shares: 0,
                video: url,
                time: `${moment().format('YYYY-MM-DD HH:mm:ss')}`,
                title: text,
                description: description,
                tags: [],
                friendLikes: [],
            };
            addPostAction(postObject);
            handleModal();
        } else {
            updateError(!error)
        }
    };
    const handleUrl = (e) => {
        updateUrl(e.target.value);
    };
    const handleTags = (e) => {
        updateTags(e.target.value)
    }
    const handleDescription = (e) => {
        updateDescription(e.target.value)
    }
    const handleText = (e) => {
        updateText(e.target.value)
    }
    const handleWho = (e) => {
        updateWho(e.target.value)
    }
    const handleGroup = (e) => {
        updateGroup(e.target.value)
    }
    
    return (
        <>
            <Modal
                visible={showModal}
                width="650px"
                onCancel={handleModal}
                okText="Post"
                onOk={postVideo}
                title="Create New Post">
                <div className="__create-post-main-container">
                    <div className="__post-box">
                        <div className="__avatar-container">
                            <img
                                src={handle && handle.avatar}
                                alt=""
                                className="__avatar"
                            />
                            <div>{`${handle && handle.firstName} ${
                                handle && handle.lastName
                            }`}</div>
                        </div>
                        <div className="__input-container">
                                <>
                                    <div>
                                        <p>Video Link: </p>
                                        <input
                                            type="text"
                                            placeholder="Video link"
                                            value={url}
                                            onChange={handleUrl}></input>
                                    </div>
                                    <div>
                                        <p>Title: </p>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            onChange={handleText}
                                            value={text}
                                        />
                                    </div>
                                    <div>
                                        <p>Description: </p>
                                        <input
                                            type="text"
                                            placeholder="Description"
                                            onChange={handleDescription}
                                        />
                                    </div>
                                    <div>
                                        <p>#hashtags: </p>
                                        <input
                                            type="text"
                                            placeholder="#hashtags"
                                            onChange={handleTags}
                                        />
                                    </div>
                                </>
                        </div>
                    </div>
                    <div className="__options">
                        <div>
                            <label htmlFor="who">With </label>
                            <select name="who" onChange={handleWho}>
                                <option value={null}>Choose...</option>
                                {whoOptions}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="group">Share in Group </label>
                            <select name="group" onChange={handleGroup}>
                                <option value={null}>Choose...</option>
                                {groupOptions}
                            </select>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                visible={error}
                onCancel={() => updateError(!error)}
                onOk={() => updateError(!error)}
                closable={false}
                cancelText="Thank you"
                okText="Goodbye">
                <p>Please fill out all fields</p>
            </Modal>
        </>
    );
}

function mapUserToProps(store) {
    
    if (store.user) {
        return {
            handle: store.user.handle,
            meta: store.user.meta
        };
    } 
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addPostAction: addPost }, dispatch);
}

export default connect(mapUserToProps, matchDispatchToProps) (VideoModal);