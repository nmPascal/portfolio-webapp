// utils
import { client } from "./utils";

// providers
import { GraphQLDataProvider } from "./providers";

// packages
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ApolloProvider } from "@apollo/client";

// components
import { Layout, Navbar } from "./components";
import { index as Routes } from "./routes";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar />
                <AnimatePresence mode="wait">
                    <ApolloProvider client={client}>
                        <GraphQLDataProvider>
                            <Routes />
                        </GraphQLDataProvider>
                    </ApolloProvider>
                </AnimatePresence>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
