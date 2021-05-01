// About Seller Page /about
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlexHeader from '../components/shared/headers/AlexHeader';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import AboutSellerPageHeader from '../components/shared/headers/AboutSellerPageHeader';
import AboutStoreCard from '../components/shared/cards/AboutStoreCard';
import AboutStoreInformationCard from '../components/shared/cards/AboutStoreInformationCard';
import MetaDataFollowButtonCard from '../components/shared/cards/MetaDataFollowButtonCard';
import SimilarStoresCard from '../components/shared/cards/SimilarStoresCard';
import AboutStoreDataCarousel from '../components/shared/carousels/AboutStoreDataCarousel';
import InfoPannelCard from '../components/shared/cards/InfoPannelCard';
import { getSellerById } from '../store/about-store/action';

const AboutSellerPage = () => {
    const dispatch = useDispatch();

    const seller = useSelector((state) => state.aboutStore);

    useEffect(() => {
        dispatch(getSellerById(1));
    }, [dispatch]);

    return (
        <div className="site-content">
            <AlexHeader />
            <HeaderMobile />
            <NavigationList />
            {seller ? (
                <div id="___about-page-container">
                    <AboutSellerPageHeader
                        avatar={seller.data.avatar}
                        headerImage={seller.data.headerImage}
                        listings={seller.meta.listings}
                        followers={seller.meta.followers}
                        name={seller.data.name}
                    />
                    <aside id="___sticky-sidebar-container">
                        <div className="___sticky">
                            <MetaDataFollowButtonCard
                                followers={seller.meta.followers}
                                products={seller.meta.products}
                                posts={seller.meta.posts}
                                sales={seller.meta.sales}
                                rating={seller.meta.rating}
                            />
                            <SimilarStoresCard stores={seller.similarStores} />
                        </div>
                    </aside>

                    <main id="___main-content-container">
                        <AboutStoreCard
                            name={seller.data.name}
                            about={seller.data.about}
                        />
                        <AboutStoreInformationCard
                            location={seller.info.location}
                            joinDate={seller.meta.joined}
                            websites={seller.data.websites}
                            sales={seller.meta.sales}
                            chart={seller.meta.chartImage}
                        />
                        <AboutStoreDataCarousel
                            title="Recently Added Products"
                            data={seller.products}
                        />
                        <AboutStoreDataCarousel
                            title="Latest Posts"
                            data={seller.posts}
                        />
                        <AboutStoreDataCarousel
                            title="Videos"
                            data={seller.videos}
                        />
                        <InfoPannelCard
                            title={'Store Events'}
                            dataArray={seller.events}
                        />
                        <InfoPannelCard
                            title={'Store Recommendations'}
                            dataArray={seller.events}
                        />
                    </main>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </div>
    );
};

export default AboutSellerPage;
