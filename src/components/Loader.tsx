import { FC } from 'react';

// helpers
import { SettingsHelper } from '../helpers';

// styles
import styles from '../styles/main.module.scss';

export const Loader: FC = (): JSX.Element => {
    return (
       <div className={styles.loader}>
            <h2 className={`${styles.name_load} ${styles.animate_character}`}>
                {SettingsHelper.getString('loading_text')}
            </h2>
       </div>
    );
};
