import React from 'react';
import GroupsCard from '../../../components/shared/cards/GroupsCard';
import ConvertFollowers from '../../../helpers/convertFollowers';
import groupsData from '../../../public/static/data/groups-joined.json';
export default function MyGroups() {
    return (
        <>
            <div className="_my-groups-container">
                <h4 className="_my-groups-title">Your Groups</h4>
                <div className="_my-groups-content">
                    <div className="_my-groups-tabs">
                        <a className="_my-groups-tab _my-groups-all" href="#">
                            All Groups
                        </a>
                        <a
                            className="_my-groups-tab _my-groups-recent"
                            href="#">
                            Recently Added
                        </a>
                        <a
                            className="_my-groups-tab _my-groups-private"
                            href="#">
                            Private Groups
                        </a>
                        <a
                            className="_my-groups-tab _my-groups-manage"
                            href="#">
                            Groups Management
                        </a>
                    </div>

                    <div className="_my-groups-tabContent">
                        {groupsData.map((groups, i) => (
                            <GroupsCard
                                key={groups.id}
                                id={i}
                                title={groups.group}
                                banner={groups.banner}
                                subtitle={groups.tags}
                                followers={groups.followers}
                                secondTitle={`Members ${ConvertFollowers(
                                    groups.members
                                )}`}
                                secondSubtitle={`${groups.followers.length} mutual followers`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
