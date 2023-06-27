/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { isSkillDataType } from "../helpers";

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

    console.log("~> skills", data); //DELETE

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
                        <div className={styles.skills_grid}>
                            {data.skills[selectedCategory] &&
                                data.skills[selectedCategory].map((skill) => (
                                    <p>{skill.beginning_date}</p>
                                ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

//TODO - error on full screen
