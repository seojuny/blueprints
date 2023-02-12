import { React, useState } from 'react';

const Header = ({title}) => {
    return (
    <>
        <header>
            <h1>{title}</h1>
        </header>
        <button className = 'headerBtn'>
            Home
        </button>
    </>
    );
};

export default Header;