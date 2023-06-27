import { useState } from "react";

// helpers
import { retrieveGraphQLServerData } from "../helpers";

// utils
import { EDATA } from "../utils";

// interfaces
import { DataType, IGraphQLServerHookProps} from "../interfaces";

export const useGraphQLServer = (): IGraphQLServerHookProps => {
    const [data, setData] = useState<DataType>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

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
        getGraphQLServerData,
    };

    return props;
};
