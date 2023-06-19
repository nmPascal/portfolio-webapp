import { FC } from "react";

import styles from "../styles/main.module.scss";

export const Home: FC = (): JSX.Element => {

    return (
        <div id="home" className={styles.home} style={{marginTop: "100vh"}}>
            <h1>Home</h1>
        </div>
    );
};
