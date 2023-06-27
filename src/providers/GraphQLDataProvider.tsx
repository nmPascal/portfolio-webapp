import { ReactNode, useState } from "react";

// contexts
import { GraphQLDataContext } from "../contexts";

// helpers
import { retrieveGraphQLServerData } from "../helpers";

// utils
import { EDATA } from "../utils";

// interfaces
import { DataType } from "../interfaces";

type Props = {
    children: ReactNode;
};

export const GraphQLDataProvider = ({ children }: Props) => {
    const [data, setData] = useState<DataType>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const getGraphQLServerData = async (requiredData: EDATA) => {
        const res = await retrieveGraphQLServerData(requiredData);

        if (!res) {
            setError("Error retrieving data from GraphQL server");
        }
        setData(res);
        setLoading(false);
    };

    const props = {
        data,
        loading,
        error,
        selectedCategory,
        getGraphQLServerData,
        setSelectedCategory,
    };

    return (
        <GraphQLDataContext.Provider value={props}>
            {children}
        </GraphQLDataContext.Provider>
    );
};