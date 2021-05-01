import React, { Component } from 'react';
import Slider from 'react-slick';
import AdCard from './AdCard';
import dummyAds from './data/dummyAds.json';

class AdCarousel extends Component {
    constructor() {
        super();
        this.state = {
            ads: [
                {
                    
                }
            ]
            
        }
    }
    
    
    componentDidMount() {
        // Hit DB and return an array of ads that would interest the logged in user then store them in state
        this.setState({
            ads: dummyAds,
            
        })
    }
    render() {
        
        let settings = {
            dots: false,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <div>
                <Slider {...settings}>
                    {dummyAds.map((ad, index) => {
                        <AdCard url={ad.url} index={index} />
                    })
                    }
                </Slider>
            </div>
        );
    }
}

export default AdCarousel