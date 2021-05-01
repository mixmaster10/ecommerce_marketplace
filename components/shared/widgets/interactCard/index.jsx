import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadUserData } from '../../../../store/user/action'
import PostComment from './PostComment';
import VideoModal from './VideoModal';
import PictureModal from './PictureModal';

function InteractCard(props) {
        const [showVideoModal, updateShowViedoModal] = useState(false);
        const [showPictureModal, updateShowPictureModal] = useState(false)

        const handleVideoModal = () => {
            updateShowViedoModal(!showVideoModal);
        };
        const handlePictureModal = () => {
            updateShowPictureModal(!showPictureModal)
        }

        return (
            <div className="__main-content __interact-card">
                <VideoModal showModal={showVideoModal} handleModal={handleVideoModal} />
                <PictureModal showModal={showPictureModal} handleModal={handlePictureModal} />
                <div className="__button" onClick={handlePictureModal}>
                    <a href="#" className="post">
                        <i className="fa fa-copy"></i>
                        <span>Picture</span>
                    </a>
                </div>
                <div className="__button" onClick={handleVideoModal}>
                    <a href="#" className="photo-video">
                        <i className="fa fa-photo"></i>
                        <span>Photo/Video</span>
                    </a>
                </div>
                <div className="__button">
                    <a href="#" className="stream">
                        <i className="fa fa-film"></i>
                        <span>Live Stream</span>
                    </a>
                </div>

                <div className="__post-comment-section">
                    <PostComment
                        placeholder="Write something about your store"
                        displayComment={true}
                    />
                </div>
            </div>
        );
    }

function mapStateToProps(store) {
    if(store.user) {
        return {
            user: store.user.handle
        }
    } else {
        return {user: {}}
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {loadUserData}, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(InteractCard)