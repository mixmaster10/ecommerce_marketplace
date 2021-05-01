import React, { Component } from 'react';
import Slider from 'react-slick';
import Story from './Story';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadStoriesData } from '../../../../store/homePage/stories/action';
import stories from '../../../home/data/stories.json'

class StoriesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            numSlides: 1,
        };
    }

    componentDidMount() {
        this.props.loadStoriesData(stories)
    }
    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 750,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 10000,
        };

        return (
            <div className='__story-card'>
                <h1 className="__landing-title">Stories</h1>
                <div className="__story-card-slider">
                    <Slider {...settings}>
                        {this.props.stories &&
                            this.props.stories.map((story, index) => (
                                <Story story={story} key={index} />
                            ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

function mapStoreToProps(store) {
    return {
        stories: store.stories,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ loadStoriesData }, dispatch);
}

export default connect(mapStoreToProps, matchDispatchToProps)(StoriesCard);
