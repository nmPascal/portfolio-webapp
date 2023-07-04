// packages
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://portfolio-graphql-server-77f9c21f39c5.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});
