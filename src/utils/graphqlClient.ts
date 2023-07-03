// packages
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://peridot-prairie-order.glitch.me/graphql",
    cache: new InMemoryCache(),
});
