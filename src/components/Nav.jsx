import React from "react";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <a href='#'>
                        Profile
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a href='#'>
                        Messages
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a href='#'>
                        News
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a href='#'>
                        Music
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a href='#'>
                        Setting
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;