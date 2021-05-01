import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormCheckoutInformation from './modules/FormCheckoutInformation';
import FormCheckoutwithShippingInformation from './modules/FormCheckoutwithShippingInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showHideDemo1: false,
            showhideDemo2: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
            showHideDemo1: value
        });
    }
    render() {
        const { amount, cartTotal, cartItems } = this.props;
        const isLoggedIn = this.state;
        const { showHideDemo1 } = this.state;
        return (
            <div className="_shipping">
                <div className="container">
                    <div className="ps-checkbox">
                        <input
                            className="form-control"
                            type="checkbox"
                            id="isLoggedIn"
                            name="isLoggedIn"
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="isLoggedIn">
                            Select the Temporary checkbox to view the checkout page based on logged in
                        </label>
                    </div>
                    <br></br>
                    {/* Based on condition have to implement */}
                    <div className="_shippingContent" id="frmchkout">
                        {showHideDemo1 && <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                        />}
                    </div>
                    < div className="_shippingContent" id="frmcheckoutshipng">
                        {!showHideDemo1 &&
                            <FormCheckoutwithShippingInformation
                                amount={amount}
                                cartTotal={cartTotal}
                                cartItems={cartItems}
                            />}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
