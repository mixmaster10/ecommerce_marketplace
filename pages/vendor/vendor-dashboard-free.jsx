import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import VendorDashboard from '../../components/partials/vendor/VendorDashboard';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const VendorDashboardFreeLayoutPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Become a Vendor',
        },
    ];

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--single">
                <VendorDashboard />
                <Newletters layout="container" />
            </div>
            <FooterDefault />
        </div>
    );
};

export default VendorDashboardFreeLayoutPage;
