import { FC } from 'react';

// styles
import styles from '../styles/main.module.scss';

export const MyWorks: FC = (): JSX.Element => {

    return (
       <div id="my-works" className={styles.myWorks}>
            <h1>My Works</h1>
       </div>
    );
};
