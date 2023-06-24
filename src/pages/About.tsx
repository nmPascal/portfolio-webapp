import { FC } from "react";

// helpers
import { SettingsHelper } from "../helpers";

// packages
import { BiDownload } from "react-icons/bi";

// styles
import styles from "../styles/main.module.scss";

export const About: FC = (): JSX.Element => {
    return (
        <div className={styles.about}>
            <div className={styles.about__image}>
                <img
                    src={`${SettingsHelper.getString("svg_path")}about_img.svg`}
                    alt="about"
                />
            </div>
            <div className={styles.about__text}>
                <h2>{SettingsHelper.getString("about_title")}</h2>
                <div className={styles.about__description} dangerouslySetInnerHTML={{ __html: SettingsHelper.getString("about_html_text") }} />
                <button>
                    <span>
                        {SettingsHelper.getString("about_button_text")}
                    </span>
                    <span>
                        <BiDownload size={15}/>
                    </span>
                </button>
            </div>
        </div>
    );
};
// TODO add CV
