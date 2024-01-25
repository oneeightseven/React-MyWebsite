import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu__content" onClick={e => e.stopPropagation()}>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About me</a>
                </li>
                <li>
                    <a>Resume</a>
                </li>
                <li>
                    <a>Portfolio</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
