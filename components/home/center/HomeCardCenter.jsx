import React, { Component } from 'react';
import Feed from './cards/mainContent/Feed';
import InteractCard from '../../shared/widgets/interactCard';
import Carousel from '../../../pages/carousel';
import StoryCard from '../../shared/widgets/storiesCard'
import dummyAds from '../data/dummyAds.json';


class HomeCardCenter extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const avatar = this.props.handle ? this.props.handle.avatar : null
        return (
            <div className="__home-card-center">
                <StoryCard />
                <InteractCard/>
                <Carousel className='__home-carousel' cards={dummyAds} numSlides='2'/>
                <Feed 
                feed={this.props.feed}
                avatar={this.props.handle}
                />
            </div>

        );
    }
}

export default HomeCardCenter;
