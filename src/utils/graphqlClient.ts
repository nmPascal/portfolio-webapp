// packages
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    // uri: "https://peridot-prairie-order.glitch.me/graphql",
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});
