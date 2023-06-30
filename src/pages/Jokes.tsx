import { FC } from 'react';

// helpers
import { SettingsHelper } from '../helpers';

// hooks
import { useJokeApi } from '../hooks';

// styles
import styles from '../styles/main.module.scss';

export const Jokes: FC = (): JSX.Element => {
    const { joke, getJoke } = useJokeApi();

    return (
        <div className={styles.jokes}>
                <div className={styles.jokes__button__container}>
                    <img src={SettingsHelper.getString("joke_image_url")} alt={SettingsHelper.getString("joke_image_alt")} />
                    <button onClick={getJoke}>{SettingsHelper.getString("joke_button_text")}</button>
                </div>
                <div className={styles.jokes__joke}>
                    <p>{joke}</p>
                </div>
                <div className={styles.jokes__footer}>
                    <div className={styles.footer__dancing__chuck}>
                        <img src="./assets/gifs/chuck_norris.gif" alt="" />
                    </div>
                </div>
        </div>
    );
};
