import React from 'react';
import './Header.css';

const Header = ({title}) => {
    return (
    <>
    <h1 className = 'header'>
        {title}
        <button className = 'headerBtn'>
            Home
        </button>
    </h1>
    </>
    );
};

export default Header;