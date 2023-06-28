/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { calculateExperienceYears, isSkillDataType } from "../helpers";

// utils
import { EDATA } from "../utils";

// contexts
import { useGraphQLDataContext } from "../contexts";

// components
import { ErrorMessage, Loader } from "../components";
import { DataNav } from "../components";

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
                        <DataNav categories={data.categories} />
                        <div className={styles.skills__grid}>
                            <div className={styles.years}>
                                <span>Years</span>
                                <span>1</span>
                                <span>2</span>
                                <span>2+</span>
                            </div>
                            {data.skills[selectedCategory] && data.skills[selectedCategory].map((skill) => (
                                <div key={skill.id} className={styles.skill__item}>
                                    <p>{skill.name}</p>
                                    <span
                                        className={styles.progress__bar}
                                        style={{width: `${(calculateExperienceYears(skill.beginning_date) / 3)}%`}}
                                    />

                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

//TODO - error on full screen
