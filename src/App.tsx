import { BrowserRouter } from "react-router-dom";

import { Layout, Navbar } from "./components";
import { index as Routes } from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {

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
}

export default App;
