import { useState } from "react";

// helpers
import { retrieveGraphQLServerData } from "../helpers";

// utils
import { EDATA } from "../utils";

// interfaces
import { DataType} from "../interfaces";

export const useGraphQLServer = () => {
    const [data, setData] = useState<DataType>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // TODO: 2 async ??
    const getServerData = async (requiredData: EDATA) => {
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
        getServerData,
    };

    return props;
};
