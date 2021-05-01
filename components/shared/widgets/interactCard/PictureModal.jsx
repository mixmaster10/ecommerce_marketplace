import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost } from '../../../../store/user/action';
import { Modal } from 'antd';
import Dropzone from 'react-dropzone';
import moment from 'moment';

function PictureModal({ showModal, handleModal, addPostAction, handle, meta }) {
    const [tags, updateTags] = useState([]);
    const [text, updateText] = useState('');
    const [who, updateWho] = useState();
    const [group, updateGroup] = useState();
    const [error, updateError] = useState(false);
    const [photos, updatePhotos] = useState(null);

    const whoItems = ['Everyone', 'Friends', 'Family', 'Custom'];
    const whoOptions = whoItems.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });
    const groupOptions =
        meta &&
        meta.groups &&
        meta.groups.map((item, index) => {
            return (
                <option value={item} key={index}>
                    {item}
                </option>
            );
        });

    const postPicture = () => {
        if (photos && text && who) {
            const postObject = {
                type: 'social-ad',
                avatar: handle.avatar,
                headline: `${handle.firstName} ${handle.lastName}`,
                contentType: 'Posted',
                views: 0,
                likes: 0,
                comments: 0,
                shares: 0,
                img: photos,
                time: `${moment().format('YYYY-MM-DD HH:mm:ss')}`,
                content: text,
                tags: tags,
                friendLikes: [],
            };
            addPostAction(postObject);
            handleModal();
        } else {
            updateError(!error);
        }
    };

    const handleTags = (e) => {
        updateTags(e.target.value);
    };

    const handleText = (e) => {
        updateText(e.target.value);
    };

    const handleWho = (e) => {
        updateWho(e.target.value);
    };

    const handleGroup = (e) => {
        updateGroup(e.target.value);
    };

    const handlePhoto = (array) => {
        let Urls = array.map((obj) => {
            return URL.createObjectURL(obj);
        });
        updatePhotos(Urls);
    };

    const unhandlePhoto = () => {
        updatePhotos(null);
    };

    return (
        <>
            <Modal
                visible={showModal}
                width="650px"
                onCancel={handleModal}
                okText="Post"
                onOk={postPicture}
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
                                    <Dropzone
                                        onDrop={(acceptedFiles) => {
                                            handlePhoto(acceptedFiles);
                                        }}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input
                                                        {...getInputProps()}
                                                    />
                                                    <p>
                                                        Drop files here, or
                                                        click to select files
                                                    </p>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <textarea name="text" onChange={handleText} rows="2" placeholder='Say something about your photo'></textarea>
                                    <button
                                        className="__remove"
                                        onClick={unhandlePhoto}>
                                        Remove Image(s)
                                    </button>
                                    <div className="__metas">
                                        <label htmlFor="comment"></label>
                                    </div>
                                    {photos &&
                                        photos.map((photo, i) => (
                                            <img src={photo} key={i} />
                                        ))}
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
            meta: store.user.meta,
        };
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addPostAction: addPost }, dispatch);
}

export default connect(mapUserToProps, matchDispatchToProps)(PictureModal);
