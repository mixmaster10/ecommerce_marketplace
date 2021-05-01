import React from 'react';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Login from '../../components/partials/account/Login';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import AlexHeader from '../../components/shared/headers/AlexHeader';
// import HeaderDefault from '../../components/shared/headers/HeaderDefault';
// import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];
    return (
        <div className="site-content">
            {/* <HeaderDefault />
            <HeaderMobile /> */}
            <AlexHeader />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Login />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default LoginPage;
