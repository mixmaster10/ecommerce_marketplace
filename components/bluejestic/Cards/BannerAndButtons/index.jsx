import React from 'react';

function BannerAndButtons(props) {
    /*
    Props to pass
    bannerImage: string
    title: string
    subtitle: string
    secondaryTitle: string
    avatars: Array<string> (image srcs)
    buttonTextOne: string
    buttonTextTwo: string
    */
    return (
        <div className="_bannerAndButtons">
            <img
                className="_bannerAndButtons__image"
                src={props.bannerImage}
                alt=""
            />
            <div className="_bannerAndButtons__main">
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
                <div className="_bannerAndButtons__secondary">
                    <p>{props.secondaryTitle}</p>
                    <div className="_bannerAndButtons__avatars">
                        {props.avatars
                            ? props.avatars.map((avatar, i) => (
                                  <img
                                      /*
                                ! Some sort of handler to do something when clicked on icon
                                */
                                      onClick={() =>
                                          console.log(
                                              'go to their page or something',
                                              avatar,
                                              i
                                          )
                                      }
                                      key={i}
                                      className="_bannerAndButtons__avatar"
                                      src={avatar}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <div className="_bannerAndButtons__buttons">
                    <button>{props.buttonTextOne}</button>
                    <button>{props.buttonTextTwo}</button>
                </div>
            </div>
        </div>
    );
}

export default BannerAndButtons;
