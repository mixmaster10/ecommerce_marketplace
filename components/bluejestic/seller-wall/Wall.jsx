import React from 'react';
import { connect } from 'react-redux';
import products from '../../../public/static/data/sellerWall/recently-added-products.json';
import {
    receiveWallPosts,
    toggleLike,
} from '../../../store/social-post/action';
import InteractCard from '../../shared/widgets/interactCard';
import Carousel from '../carousel';
// TODO: Needs to connect to POST
function Wall(props) {
    console.log('wall props', props.posts);
    if (props.posts[0]) {
        const { posts } = props.posts[0];
    }

    return (
        <>
            <div className="_seller-wall-center-columns">
                <InteractCard />
                <div className="_seller-wall-carousel-container">
                    <h3>Recently Added Products</h3>
                    <Carousel slidesToShow={3} slidesToScroll={3}>
                        {products.map((product, i) => (
                            <img
                                key={product[i]}
                                className="_seller-wall-carousel-img"
                                src={product}
                                alt="newly added product"
                            />
                        ))}
                    </Carousel>
                </div>
                {/* {props.posts && (
                    <>
                        {props.posts.map((post) => (
                            <Posts
                                id={post.id}
                                likes={post.likes_count}
                                toggleLike={props.toggleLike}
                                time={post.createdAt}
                                key={post.id}
                                message={post.message}
                                store={"Jane's store"}
                                title={post.title}
                                images={post.images}
                                avatar={
                                    'https://images.unsplash.com/photo-1565768028719-709cc89b4bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80'
                                }
                            />
                        ))}
                    </>
                )} */}
            </div>
        </>
    );
}

const mapStateToProps = (globalState) => {
    return {
        // posts: globalState.socialPost.allWallPosts[0].data.posts,
        posts: globalState,
    };
};

const mapDispatchToProps = { receiveWallPosts, toggleLike };

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
