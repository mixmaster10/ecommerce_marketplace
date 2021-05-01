import React, { Component } from 'react';

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
        };
    }
    handleBackToTop = () => {};

    scrollStep() {
        if (process.browser) {
            if (window.pageYOffset === 0) {
                clearInterval(this.state.intervalId);
            }
            window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
        }
    }

    scrollToTop() {
        let intervalId = setInterval(
            this.scrollStep.bind(this),
            this.props.delayInMs
        );
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <div
                id="back2top"
                className="ps-btn--back-to-top"
                onClick={e => this.scrollToTop(e)}>
                <i className="icon-chevron-up"></i>
            </div>
        );
    }
}

export default BackToTop;
