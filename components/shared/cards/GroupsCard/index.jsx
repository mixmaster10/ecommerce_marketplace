import React from 'react';

function GroupsCard(props) {
    /*
    Props to pass

    1. banner: string - banner image
    2. title: string - card title
    3. subtitle: Array<string> - card subtitle
    4. secondTitle: string - card secondary title
    5. secondSubtitle: string - card secondary subTitle
    6. followers: Array<string> - follower avatar images

    */
    return (
        <div className="_groups-card-container">
            <img
                className="_groups-card-banner-img"
                src={props.banner}
                alt="banner image"
            />
            <div className="_groups-card-text-container">
                <div className="_groups-card-heading-container">
                    <h3 className="_gropus-card-title">{props.title}</h3>
                    <div className="_groups-card-subtitle-container">
                        {props.subtitle
                            ? props.subtitle.map((title, index) => (
                                  <p
                                      key={index}
                                      className="_groups-card-subtitle">
                                      {title}
                                      {props.subtitle.length - 1 !== index && (
                                          <span>,</span>
                                      )}
                                  </p>
                              ))
                            : null}
                    </div>
                </div>
                <div className="_groups-card-secondary-container">
                    <p className="_groups-card-secondary-title">
                        {props.secondTitle}
                    </p>
                    <div className="_groups-card-followers-container">
                        <p className="_groups-card-secondary-subtitle">
                            {props.secondSubtitle}
                        </p>
                        <div className="_groups-card-follower-avatar-container">
                            {props.followers
                                ? props.followers.map((follower, i) => (
                                      <img
                                          key={i}
                                          className="_groups-card-follower-avatar"
                                          src={follower}
                                          alt="avatar image"
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupsCard;
