import { FC } from "react";

// helpers
import { SettingsHelper } from "../helpers";

// packages
import { useNavigate } from "react-router-dom";

// styles
import styles from "../styles/main.module.scss";

export const NotFound: FC = (): JSX.Element => {
    const history = useNavigate();

    return (
        <div className={styles.page_404}>
            <div className={styles.page_404__content}>
                <div className={styles.page_404__img}>
                    <img
                        src={SettingsHelper.getString("page_404_image")}
                        alt="404"
                    />
                </div>
                <div className={styles.page_404__text}>
                    <h3>{SettingsHelper.getString("page_404_title")}</h3>
                    <p>{SettingsHelper.getString("page_404_text")}</p>
                    <div className={styles.page_404__back}>
                        <button
                            onClick={() =>
                                history(SettingsHelper.getRoutes()[0].path)
                            }
                        >
                            {SettingsHelper.getString("page_404_button_text")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
