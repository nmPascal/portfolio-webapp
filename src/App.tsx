// utils
import { client } from "./utils";

// packages
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import { Layout, Navbar } from "./components";
import { index as Routes } from "./routes";
import { ApolloProvider } from "@apollo/client";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar />
                <AnimatePresence mode="wait">
                    <ApolloProvider client={client}>
                        <Routes />
                    </ApolloProvider>
                </AnimatePresence>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
