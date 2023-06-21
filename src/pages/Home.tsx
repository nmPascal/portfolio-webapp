import { FC } from "react";

import { SettingsHelper } from "../helpers";

import { NavLink } from "react-router-dom";

import styles from "../styles/main.module.scss";

export const Home: FC = (): JSX.Element => {

    return (
        <div className={styles.home}>
            <div className={styles.home__content}>
                <div className={styles.home__presentation}>
                    <div className={styles.home__text}>
                        <h1>
                            {SettingsHelper.getString("me_job")}
                        </h1>
                        <h2>
                            {SettingsHelper.getString("home_title")}
                            <br />
                            <span>
                                {SettingsHelper.getString("me_fullName")}
                            </span>
                        </h2>
                        <p>
                            {SettingsHelper.getString("home_description")}
                        </p>
                    </div>
                    <div  className={styles.socialNetworks}>
                        <h3>
                            {SettingsHelper.getString("home_social_networks_title")}
                        </h3>
                        <ul>
                            {SettingsHelper.getSocialNetworks().map(({ name, icon: Icon, url }, idx) => (
                                <li key={idx}>
                                    <NavLink to={url} target="_blank" title={name}>
                                        <Icon size={25}/>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.home__image}>
                    <img src="./assets/images/15.png" alt="" />
                </div>
            </div>
        </div>
    );
};

// TODO:
// - [ ] Update social networks
