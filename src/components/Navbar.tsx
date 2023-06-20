import { FC } from "react";

import { SettingsHelper } from "../helpers";

import { AiFillGithub } from "react-icons/ai";

import styles from "../styles/main.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar: FC = (): JSX.Element => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                {SettingsHelper.getString("navbar_logo")}
            </div>
            <ul>
                {SettingsHelper.getRoutes().map(({ path, name }, idx) => (
                    <li key={idx}>
                        <NavLink
                            to={path}
                            title={name}
                            className={({ isActive }) => isActive ? styles.navbar__link__active : ""}
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={styles.navbar__github__link}>
                <a href="" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
};
