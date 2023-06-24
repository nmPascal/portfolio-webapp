import { FC } from 'react';

// styles
import styles from '../styles/main.module.scss';

export const About: FC = (): JSX.Element => {

    return (
       <div className={styles.about}>
            <div className={styles.about__image}>
                <img src="./assets/images/about_img.svg" alt="about" />
            </div>
            <div className={styles.about__text}>
                
            </div>
       </div>
    );
};
