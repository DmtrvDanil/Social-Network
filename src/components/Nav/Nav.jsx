import React from "react";
import style from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.list_tem}>
                    <a href='#'>
                        Profile
                    </a>
                </li>
                <li className={style.list_item}>
                    <a href='#'>
                        Messages
                    </a>
                </li>
                <li className={style.list_item}>
                    <a href='#'>
                        News
                    </a>
                </li>
                <li className={style.list_item}>
                    <a href='#'>
                        Music
                    </a>
                </li>
                <li className={style.list_item}>
                    <a href='#'>
                        Setting
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;