import { ReactNode, FC } from 'react';

// styles
import styles from "../styles/main.module.scss";

type Props = {
    children: ReactNode;
};

export const Layout: FC<Props> = ({ children }: Props): JSX.Element => {
  
    return <div className={styles.layout}>{children}</div>
 
};

