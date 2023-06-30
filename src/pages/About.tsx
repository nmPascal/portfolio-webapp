import { FC } from "react";

// helpers
import { SettingsHelper } from "../helpers";

// utils
import { ECVLANG } from "../utils";

// hooks
import { useDownloadFiles } from "../hooks";

// packages
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    makeStyles,
    shorthands,
    tokens
} from "@fluentui/react-components";
import { BiDownload } from "react-icons/bi";

// styles
import styles from "../styles/main.module.scss";

const useStyles = makeStyles({
    menuList: {
        ...shorthands.padding(tokens.spacingHorizontalNone, tokens.spacingVerticalNone),
        backgroundColor: "#ccc",
        color: "#04133a",
    },
    menuItem: {
        "&:hover": {
            backgroundColor: "#04133a",
            color: "#ccc",
        },
    },
});

export const About: FC = (): JSX.Element => {
    const { downloadCV } = useDownloadFiles();
    const flui_styles = useStyles();

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
                <Menu>
                    <MenuTrigger>
                        <MenuButton
                            icon={<BiDownload size={20}/>}
                            className={styles.about__download__button}
                        >
                            <span>
                                {SettingsHelper.getString("about_button_text")}
                            </span>
                        </MenuButton>
                    </MenuTrigger>
                    <MenuPopover className={flui_styles.menuList}>
                        <MenuList>
                            {Object.values(ECVLANG).map((lang) => (
                                <MenuItem 
                                    key={lang}
                                    className={flui_styles.menuItem}
                                    onClick={() => downloadCV(lang)}
                                >
                                    {lang}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </MenuPopover>
                </Menu>
            </div>
        </div>
    );
};
