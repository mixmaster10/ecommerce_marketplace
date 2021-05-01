import React, { useEffect, useState } from 'react';
import ConvertFollowers from '../../../helpers/convertFollowers';
import groupsData from '../../../public/static/data/groups-joined.json';
import BannerAndButtons from '../../bluejestic/Cards/BannerAndButtons';
import Carousel from '../carousel/index';
import SearchBar from '../SearchBar/SearchBar';
export default function AllGroups() {
    const [groupsCards, updateGroupsCards] = useState([]);

    useEffect(() => {
        // Hit DB and return user groups data
        // For now just using json
        updateGroupsCards(groupsData);
    }, []);
    return (
        <div>
            <div className="_all-groups-section-container">
                <SearchBar
                    placeholderText="Search for a group"
                    linkText="Create a Group"
                />

                <div className="_all-groups-content-container">
                    <div className="_all-groups-btn-container">
                        <a className="_all-groups-btn" href="#">
                            Suggested Groups
                        </a>
                        <a className="_all-groups-btn" href="#">
                            My Groups
                        </a>
                        <a className="_all-groups-btn" href="#">
                            Joined Groups
                        </a>
                    </div>
                    <div className="_all-groups-divider"></div>
                    <div className="_all-groups-card-container">
                        <Carousel slidesToShow={3} slidesToScroll={3}>
                            {groupsData.map((group) => (
                                <BannerAndButtons
                                    bannerImage={group.banner}
                                    key={group.id}
                                    subtitle={`${ConvertFollowers(
                                        group.members
                                    )} members`}
                                    buttonTextOne="Join"
                                    buttonTextTwo="View"
                                    title={group.group}
                                    secondaryTitle="17 friends are members"
                                    avatars={[
                                        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                                        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                                        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                                        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1372&q=80',
                                    ]}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
