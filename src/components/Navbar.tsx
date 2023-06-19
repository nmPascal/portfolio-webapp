import { FC } from "react";

import { SettingsHelper } from "../helpers";

import { HashLink as Link } from "react-router-hash-link";
import { AiFillGithub } from "react-icons/ai";

import styles from "../styles/main.module.scss";

export const Navbar: FC = (): JSX.Element => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                {SettingsHelper.getString("navbar_logo")}
            </div>
            <ul>
                {SettingsHelper.getRoutes().map((route, idx) => (
                    <li key={idx}>
                        <Link
                            to={route.path}
                            smooth
                        >
                            {route.name}
                        </Link>
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
