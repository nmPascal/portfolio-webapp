/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

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
import { DataNav } from "../components/DataNav";

export const Skills: FC = (): JSX.Element => {
    const { data, loading, error, getGraphQLServerData } = useGraphQLDataContext();

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
                    <DataNav categories={data.categories}/>
                )
            )}
        </div>
    );
};
