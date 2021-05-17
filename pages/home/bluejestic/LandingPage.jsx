import React, { Component } from 'react';
import HomeCardCenter from '../../../components/home/center/HomeCardCenter';
import LeftContent from '../../../components/home/left/LeftContent';
import RightContent from '../../../components/home/right/RightContent';
import { connect } from 'react-redux';

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="__home-container">
                <div className="__white-space" />
                <LeftContent {...this.props.user} />
                <HomeCardCenter {...this.props.user} />
                <RightContent {...this.props.user} />
                <div className="__white-space" />
            </div>
        );
    }
}

function mapUserToProps(store) {
    return {
        user: store.user,
        authUser: store.auth.user
    };
}


export default connect(mapUserToProps)(LandingPage);