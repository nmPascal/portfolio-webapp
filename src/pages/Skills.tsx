/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";

// helpers
import { isGroupedDataType } from "../helpers";

// utils
import { EDATA } from "../utils";

// contexts
import { useGraphQLDataContext } from "../contexts";

// components
import { ErrorMessage, Loader } from "../components";

// styles
import styles from "../styles/main.module.scss";

export const Skills: FC = (): JSX.Element => {
    const { data, loading, error, getGraphQLServerData } = useGraphQLDataContext();
    const [selectedSkillType, setSelectedSkillType] = useState<string>("backend");

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
                isGroupedDataType(data) && (
                    <div className={styles.skills__type__nav}>
                        <div className={styles.skills__type}>
                            {data.categories.map((type, idx) => (
                                <label key={idx}>
                                    <input
                                        type="radio"
                                        value={type}
                                        checked={selectedSkillType === type}
                                        onChange={() => setSelectedSkillType(type)}
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
