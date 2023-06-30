import { FC, useEffect, useRef, useState } from "react";

// helpers
import { SettingsHelper } from "../helpers";

// packages
import { NavLink, useLocation } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

// styles
import styles from "../styles/main.module.scss";

export const Navbar: FC = (): JSX.Element => {
    const navRef = useRef(null);
    const location = useLocation();
    const [isPageUp, setIsPageUp] = useState<boolean>(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const _onScrollHandleNavbarStyle = () => {
        if (window.scrollY > 0) {
            setIsPageUp(true);
        } else {
            setIsPageUp(false);
        }
    }

    const _sendEmail = () => {
        window.open(`mailto:${SettingsHelper.getString("my_email")}`);
    };

    useEffect(() => {
        window.addEventListener("scroll", _onScrollHandleNavbarStyle);
    }, []);

    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    return (
        <nav
            ref={navRef}
            className={styles.navbar}
            style={isPageUp ? {backgroundColor: "#04133a"} : {}}
        >
            <div className={styles.navbar__logo}>
                <img src={SettingsHelper.getString("navbar_logo_url")} alt="Logo" />
                <h1 className={styles.navbar__logo__title}>{SettingsHelper.getString("navbar_title")}</h1>
                <span className={styles.navbar__logo__blink}>_</span>
            </div>
            <div
                className={styles.navbar__links}
                style={isNavOpen ? {transform: "scale(1)"} : {}}
            >
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
                    <a
                        title={SettingsHelper.getString("navbar_github_repos_title")}
                        href={SettingsHelper.getString("navbar_github_repos")}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillGithub size={25} color={"rgb(146, 146, 146)"}/>
                    </a>
                </div>
                <div className={styles.navbar__button}>
                    <button onClick={_sendEmail}>
                        {SettingsHelper.getString("navbar_button_text")}
                    </button>
                </div>
            </div>
            <label className={styles.navbar__hamburger}>
                <input type="checkbox" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)}/>
                <svg viewBox="0 0 32 32">
                    <path
                        className={`${styles.line} ${styles.line_top_bottom}`}
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    />
                    <path
                        className={styles.line}
                        d="M7 16 27 16"
                    />
                </svg>
            </label>
        </nav>
    );
};
