import React from 'react';
function SearchBar(props) {
    return (
        <div className='_search__container'>
            <div className="_search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                    className="_searchBar__input"
                    type="search"
                    placeholder={props.placeholderText}
                />
            </div>
            <div className="_search-bar-btn-container">
                <a className="_search-bar-btn">{props.linkText}</a>
            </div>
        </div>

    );
}

export default SearchBar;
