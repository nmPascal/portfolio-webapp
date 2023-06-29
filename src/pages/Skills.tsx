/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { isSkillDataType } from "../helpers";

// utils
import { EDATA } from "../utils";

// contexts
import { useGraphQLDataContext } from "../contexts";

// components
import { CategorySelector, ErrorMessage, Loader, SkillsGrid } from "../components";

// styles
import styles from "../styles/main.module.scss";

export const Skills: FC = (): JSX.Element => {
    const { data, loading, error, selectedCategory, getGraphQLServerData } = useGraphQLDataContext();

    useEffect(() => {
        getGraphQLServerData(EDATA.SKILLS);
    }, []);

    return (
        <div className={styles.skills}>
            {loading ? (
                <Loader />
            ) : error.length ? (
                <ErrorMessage message={error} />
            ) : (
                isSkillDataType(data) && (
                    <div className={styles.skills__content}>
                        <CategorySelector categories={data.categories} />
                        {data.skills[selectedCategory] && <SkillsGrid skills={data.skills[selectedCategory]} />}
                    </div>
                )
            )}
        </div>
    );
};
