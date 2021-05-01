import React, { useEffect, useState } from 'react';
import similarStories from '../data/similarStories.json'
import dbFriends from '../data/dbFriends.json'
import BasicWidget from '../../shared/widgets/BasicWidget'

function RightContent() {
    const [newFriends, updateNewFriends] = useState([]);
    const [articles, updateArticles] = useState([]);

    //  Hit DB and return a list of merchants/buyers that they might be interested in following, AS WELL AS recent Bluejestic news
    useEffect(() => {
        similarStories.splice(4);
        updateArticles(similarStories);
        updateNewFriends(dbFriends) //replace dbFriends with db response later;
    }, []);

    useEffect(() => {

    })

    return (
        <div className="__home-card-right">
            <BasicWidget type="2-column-row-img" rows={articles} title='Suggested Stores' link='/about' />
            <BasicWidget type="friends" rows={newFriends} title='Contacts' link='/'/>
        </div>
    );
}

export default RightContent;
