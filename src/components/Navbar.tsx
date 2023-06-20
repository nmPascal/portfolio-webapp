import { FC } from "react";

import { SettingsHelper } from "../helpers";

import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

import styles from "../styles/main.module.scss";

export const Navbar: FC = (): JSX.Element => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <img src={SettingsHelper.getString("navbar_logo_url")} alt="Logo" />
                <h1 className={styles.navbar__logo__title}>{SettingsHelper.getString("navbar_title")}</h1>
                <span className={styles.navbar__logo__blink}>_</span>
            </div>
            <div className={styles.navbar__links}>
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
                        <AiFillGithub size={25} color={"rgb(146, 146, 146)"}/>
                    </a>
                </div>
                <div className={styles.navbar__button}>
                    <button>
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};
