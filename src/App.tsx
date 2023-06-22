import { FC } from "react";

// packages
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// components
import { Layout, Navbar } from "./components";
import { index as Routes } from "./routes";

const App: FC = (): JSX.Element => {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes />
                </AnimatePresence>
            </BrowserRouter>
        </Layout>
    );
};

export default App;
