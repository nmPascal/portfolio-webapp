/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';

// contexts
import { useGraphQLDataContext } from '../contexts';

// styles
import styles from '../styles/main.module.scss';

type Props = {
    categories: string[];
};

export const DataNav: FC<Props> = ({ categories }: Props): JSX.Element => {
    const { selectedCategory, setSelectedCategory } = useGraphQLDataContext();
    const [transform, setTransform] = useState<string>('0%');

    useEffect(() => {
        setSelectedCategory(categories[0]);
    }, [categories]);

    useEffect(() => {
        setTransform(`${ categories.indexOf(selectedCategory) * 100}%`);
    }, [selectedCategory]);
  
    return (
        <div className={styles.skills__type__nav} style={{width: `${categories.length * 100}px`}}>
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
                    width: `${100 / categories.length}%`,
                    transform: `translateX(${transform})`,
                    borderRadius: categories.indexOf(selectedCategory) === 0 ? '5px 0 0 5px' : categories.indexOf(selectedCategory) === categories.length - 1 ? '0 5px 5px 0' : '0',
                }}
            />
        </div>
    );
};
