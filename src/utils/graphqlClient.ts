// packages
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    // uri: "https://portfolio-graphql-server-77f9c21f39c5.herokuapp.com/graphql",
    uri: import.meta.env.VITE_GRAPHQL_SERVER_URL,
    // uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});
