import { createContext, useContext } from "react";

// interfaces
import { IGraphQLDataProviderProps } from "../interfaces";

export const GraphQLDataContext = createContext<IGraphQLDataProviderProps>({
    data: null,
    loading: false,
    error: "",
    getGraphQLServerData: () => []
});

export const useGraphQLDataContext = () => useContext(GraphQLDataContext);