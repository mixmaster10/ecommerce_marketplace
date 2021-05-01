import React from 'react'

function CustomNavbar(props) {
    /*
    navlinks: Array<string>
    */
    return (
        <div className="_customNavbar">
            <ul className="_customNavbar__navlinks">
               {props.navlinks ?  (<>{props.navlinks.map(link => <li className="_customNavbar__navlink">{link}</li>)}</>): null}
            </ul>
        </div>
    )
}

export default CustomNavbar
