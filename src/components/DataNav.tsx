/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';

// contexts
import { useGraphQLDataContext } from '../contexts';

// styles
import styles from '../styles/main.module.scss';

type Props = {
    categories: string[];
};

export const DataNav: FC<Props> = ({ categories }: Props): JSX.Element => {
    const { selectedCategory, setSelectedCategory } = useGraphQLDataContext();

    useEffect(() => {
        setSelectedCategory(categories[0]);
    }, []);
  
    return (
        <div className={styles.skills__type__nav}>
            {categories.map((type, idx) => (
                <label key={idx}>
                    <input
                        type="radio"
                        value={type}
                        checked={selectedCategory === type}
                        onChange={() => setSelectedCategory(type)}
                    />
                    <span>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</span>
                </label>
            ))}
            <div
                className={styles.selected}
                style={{
                    transform: `translateX(${categories.indexOf(selectedCategory) * 100}%)`,
                    borderRadius: categories.indexOf(selectedCategory) === 0 ? '5px 0 0 5px' : categories.indexOf(selectedCategory) === categories.length - 1 ? '0 5px 5px 0' : '0',
                }}
            />
        </div>
    );
};
