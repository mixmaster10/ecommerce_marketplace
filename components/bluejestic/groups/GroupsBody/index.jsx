import React from 'react';
import Slider from 'react-slick';
import CustomNavbar from '../../../../components/bluejestic/CustomNavbar';
import GroupsCard from '../../../../components/shared/cards/GroupsCard/index';
import ConvertFollowers from '../../../../helpers/convertFollowers';
import groupsData from '../../../../public/static/data/groups-joined.json';
import relatedData from '../../../../public/static/data/sellerWall/related-groups.json';
import ImageAndText from '../../Cards/ImageAndText';
import ParentCardContainer from '../../GroupedCards/ParentCardContainer';
import AllGroups from '../AllGroups';
export default function GroupsBody() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <div className="_groupsBody__container">
                <AllGroups />
                <ParentCardContainer
                    link={['See All', 'seeAll']}
                    title={'Categories'}
                    subtitle={'Find groups by searching top categories'}>
                    <Slider {...settings}>
                        {relatedData.map((group, i) => (
                            <ImageAndText
                                key={i}
                                title={group.text}
                                image={group.imgLink}
                            />
                        ))}
                    </Slider>
                </ParentCardContainer>

                <ParentCardContainer
                    title={'Your Groups'}
                    navlinks={
                        <CustomNavbar
                            navlinks={[
                                'All Groups',
                                'Recently Added',
                                'Private Groups',
                                'Groups Management',
                            ]}
                        />
                    }>
                    <div className="_groupsBody__groupsCard">
                        {groupsData.map((group, i) => (
                            <GroupsCard
                                key={i}
                                banner={group.banner}
                                title={group.group}
                                subtitle={group.tags}
                                followers={group.followers}
                                secondSubtitle={`${ConvertFollowers(
                                    group.members
                                )} members`}
                            />
                        ))}
                    </div>
                </ParentCardContainer>
            </div>
        </>
    );
}
