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

    const getServerData = (requiredData: EDATA) => {
        setTimeout(async () => {
            const res = await retrieveGraphQLServerData(requiredData);

            if (!res) {
                setError("Error retrieving data from GraphQL server");
            }
            setData(res);

            setLoading(false);
        }, 1000)
        // TODO: after 10 seconds, if no data is retrieved, show error message
    };

    const props = {
        data,
        loading,
        error,
        getServerData,
    };

    return props;
};
