// helpers
import { retrieveGraphQLQuery } from "../helpers";

export const useGraphQLServer = () => {

    const getServerData = async () => {
        await retrieveGraphQLQuery();
    };

    const props = {
        getServerData,
    };

    return props;
};