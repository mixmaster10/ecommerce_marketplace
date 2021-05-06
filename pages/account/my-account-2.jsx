import React, { Component } from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import MyAccount2 from '../../components/partials/account/MyAccount2';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

class MyAccountPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'My Account',
                },
            ],
        };
    }

    render() {
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount2 />
                </div>
                <Newsletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}

export default MyAccountPage2;
