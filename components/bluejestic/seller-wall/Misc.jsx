import React from 'react';
import Card from '../../../components/bluejestic/Cards/Card';
import similarStories from '../../../public/static/data/sellerWall/similar-stories.json';
import relatedGroups from '../../../public/static/data/sellerWall/related-groups.json';
import contacts from '../../../public/static/data/sellerWall/contacts.json';
import BasicWidget from '../../shared/widgets/BasicWidget';
export default function Misc() {
    return (
        <div className="_seller-wall-right-columns">
            <BasicWidget
                type={'2-column-row-img'}
                rows={similarStories}
                title={'Similar Stores'}
            />
            <BasicWidget
                type={'2-column-row-img'}
                rows={relatedGroups}
                title={'Related Groups'}
            />
            {/* <Card title={'Similar Stores'} similarStories={similarStories} /> */}
            {/* <Card title={'Related Groups'} relatedGroups={relatedGroups} /> */}
        </div>
    );
}
