import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../store/friends/action';
import AlexHeader from '../../components/shared/headers/AlexHeader';
// import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import SearchBar from './search-bar';
import NewFriendsPannel from './new-friends-pannel';
import CurrentFriendsPannel from './current-friends-pannel';
import LoggedInCard from '../../components/shared/widgets/LoggedInCard';
import ActivityCard from './activity-card';
import BasicWidget from '../../components/shared/widgets/BasicWidget';

const FriendsPage = () => {
    const dispatch = useDispatch();

    const friends = useSelector((state) => state.friends);

    useEffect(() => {
        dispatch(getFriends());
    }, [dispatch]);

    return (
        <div className="site-content">
            <AlexHeader />
            {/* <HeaderDefault /> */}
            <HeaderMobile />
            <NavigationList />
            <div id="___friends-page-container">
                <aside id="___sticky-sidebar-container">
                    <div className="___sticky">
                        <LoggedInCard />
                        {/* <ActivityCard /> */}
                        <BasicWidget
                            type="photos"
                            rows={[
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1546388612-69fc7322bd56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1278&q=80',
                                },
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1551809727-fa6cc87641a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
                                },
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1596475380310-d8db2aa35b1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                                },
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                                },
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80',
                                },
                                {
                                    img:
                                        'https://images.unsplash.com/photo-1581299894341-367e6517569c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
                                },
                            ]}
                            title="Related Activities"
                        />
                        <BasicWidget
                            type="2-column-row-img"
                            rows={[
                                {
                                    imgLink:
                                        'https://images.unsplash.com/photo-1589935525759-6e7aa4b63d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                    text: "Women's Fashion",
                                    articleLink: '',
                                    followers: 978000,
                                },
                                {
                                    imgLink:
                                        'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                    text: "mens's Fashion",
                                    articleLink: '',
                                    followers: 978000,
                                },
                                {
                                    imgLink:
                                        'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                                    text: "Women's Jewelry",
                                    articleLink: '',
                                    followers: 978000,
                                },
                                {
                                    imgLink:
                                        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80',
                                    text: 'Makeup',
                                    articleLink: '',
                                    followers: 978000,
                                },
                            ]}
                            title="Related Groups"
                        />
                    </div>
                </aside>

                <main id="___main-content-container">
                    <SearchBar />
                    <NewFriendsPannel
                        suggestedFriends={friends.suggestedFriends}
                        friendRequests={friends.friendRequests}
                    />
                    <CurrentFriendsPannel friends={friends.friends} />
                </main>
            </div>
        </div>
    );
};

export default FriendsPage;
