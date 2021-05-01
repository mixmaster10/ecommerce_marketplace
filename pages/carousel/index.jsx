import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from '../../components/bluejestic/Cards/Card';


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            numSlides: 1
        }

    }

    componentDidMount() {
        this.setState({
            cards: this.props.cards,
            numSlides: this.props.numSlides
        })
    }
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 750,
            slidesToShow: parseInt(this.state.numSlides),
            slidesToScroll: parseInt(this.state.numSlides),
            autoplay: true,
            autoplaySpeed: 10000,
        };

        return (
            <div className='__carousel-container'>
                <Slider className="_all-groups-slider" {...settings}>
                    {this.state.cards.map((group, index) => (
                        <Card
                            id={group.id}
                            key={index}
                            group={group.group}
                            members={group.members}
                            banner={group.banner}
                            avatar={
                                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                            }
                        />
                    ))}
                </Slider>
            </div>
        );
    }
}
