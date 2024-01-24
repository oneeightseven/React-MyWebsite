import React from 'react';
import './Menu.css'

const Menu = ({active, setActive}) => {
    return (
        <div className="menu__content" onClick={e => e.stopPropagation()}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
