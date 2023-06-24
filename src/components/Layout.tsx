import { ReactNode, FC, useState, useEffect } from 'react';

// styles
import styles from "../styles/main.module.scss";
import { Loader } from '.';

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
    const [pageLoad, setPageLoad] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setPageLoad(false);
        }, 1000)
    }, []);

    return <div className={styles.layout}>{pageLoad ? <Loader /> : children}</div>
};

