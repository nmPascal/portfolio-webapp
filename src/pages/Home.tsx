/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { SettingsHelper } from "../helpers";
import { isSocialNetworkType } from "../helpers";

// utils
import { EDATA } from "../utils";

// hooks
import { useGraphQLServer } from "../hooks";

// packages
import { NavLink } from "react-router-dom";

// components
import { Loader } from "../components";

// styles
import styles from "../styles/main.module.scss";

export const Home: FC = (): JSX.Element => {
    const { data, loading, error, getGraphQLServerData } = useGraphQLServer();

    useEffect(() => {
        getGraphQLServerData(EDATA.SOCIALS);
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.home__content}>
                {loading ? <Loader /> : (
                    <>
                        <div className={styles.home__presentation}>
                            <div className={styles.home__text}>
                                <h1>
                                    {SettingsHelper.getString("my_job")}
                                </h1>
                                <h2>
                                    {SettingsHelper.getString("home_title")}
                                    <br />
                                    <span>
                                        {SettingsHelper.getString("my_fullName")}
                                    </span>
                                </h2>
                                <p>
                                    {SettingsHelper.getString("home_description")}
                                </p>
                            </div>
                            <div className={styles.socialNetworks}>
                                <h3>
                                    {SettingsHelper.getString("home_social_networks_title")}
                                </h3>
                                {error.length ? (<div className={styles.error}>{error}</div>) : (
                                    <ul>
                                        {isSocialNetworkType(data) && data.map(({id, name, icon, url}) => (
                                            <li key={id}>
                                                <NavLink
                                                    to={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title={name}
                                                >
                                                    <img
                                                        src={`${SettingsHelper.getString("svg_path")}${icon}`}
                                                        alt={name}
                                                    />
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className={styles.home__image}>
                            <img src="./assets/images/home_img.png" alt="" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
