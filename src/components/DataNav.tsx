import { FC, useState } from 'react';

// styles
import styles from '../styles/main.module.scss';

type Props = {
    categories: string[];
};

export const DataNav: FC<Props> = ({ categories }: Props): JSX.Element => {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  
    return (
        <div className={styles.skills__type__nav}>
            <div className={styles.skills__type}>
                {categories.map((type, idx) => (
                    <label key={idx}>
                        <input
                            type="radio"
                            value={type}
                            checked={selectedCategory === type}
                            onChange={() => setSelectedCategory(type)}
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
