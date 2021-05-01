import React from 'react';
import Card from './Card';
import groupsData from '../../../public/static/data/groups-joined.json';
export default function Cards() {
    return (
        <>
            <div className="_groups-container">
                {groupsData.map((group) => (
                    <Card
                        key={group.id}
                        group={group.group}
                        members={group.members}
                        banner={group.banner}
                    />
                ))}
                {/* <Card
                    key={'1'}
                    banner="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    avatar="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    group="Technology"
                    members="20,000"
                />
                <Card
                    key={'2'}
                    banner="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    avatar="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    group="Fashion Designers"
                    members="60,000"
                />

                <Card
                    key={'3'}
                    banner="https://images.unsplash.com/photo-1536502829567-baf877a670b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    avatar="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    group="Jewlery"
                    members="15,000"
                />

                <Card
                    key={'4'}
                    banner="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    avatar="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                    group="Home Decor"
                    members="100,000"
                /> */}
            </div>
        </>
    );
}
