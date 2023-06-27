import { createContext, useContext } from "react";

// interfaces
import { IGraphQLDataProviderProps } from "../interfaces";

export const GraphQLDataContext = createContext<IGraphQLDataProviderProps>({
    data: null,
    loading: false,
    error: "",
    selectedCategory: "",
    getGraphQLServerData: () => [],
    setSelectedCategory: () => "",
});

export const useGraphQLDataContext = () => useContext(GraphQLDataContext);