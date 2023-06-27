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
import { DataNav } from "../components";

// styles
import styles from "../styles/main.module.scss";

export const MyWorks: FC = (): JSX.Element => {
    const { data, loading, error, getGraphQLServerData } = useGraphQLDataContext();

    useEffect(() => {
        getGraphQLServerData(EDATA.PROJECTS);
    }, []);

    console.log('~> projects', data); //DELETE

    return (
        <div className={styles.myWorks}>
            {loading ? (
                <Loader />
            ) : error.length ? (
                <ErrorMessage message={error} />
            ) : (
                isGroupedDataType(data) && (
                    <DataNav categories={data.categories} />
                )
            )}
        </div>
    );
};
