import React from "react";
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.list_tem}>
                    <NavLink to='/page'>
                        Page
                    </NavLink>
                </li>
                <li className={style.list_tem}>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className={style.list_item}>
                    <NavLink to='/dialogs'>
                        Messages
                    </NavLink>
                </li>
                <li className={style.list_item}>
                    <NavLink to='/users'>
                        Users
                    </NavLink>
                </li>
                <li className={style.list_item}>
                    <NavLink to='/news'>
                        News
                    </NavLink>
                </li>
                <li className={style.list_item}>
                    <NavLink to='/music'>
                        Music
                    </NavLink>
                </li>
                <li className={style.list_item}>
                    <NavLink to='/settings'>
                        Setting
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;