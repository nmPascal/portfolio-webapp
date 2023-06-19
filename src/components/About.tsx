import { FC } from 'react';

import styles from '../styles/main.module.scss';

export const About: FC = (): JSX.Element => {

    return (
       <div id="about" className={styles.about}>
            <h1>About</h1>
       </div>
    );
};
