import { FC } from 'react';

// styles
import styles from '../styles/main.module.scss';

type Props = {
    message: string;
}

export const ErrorMessage: FC<Props> = ({ message }: Props): JSX.Element => {

    return (
       <div className={styles.error}>{message}</div>
    );
};
