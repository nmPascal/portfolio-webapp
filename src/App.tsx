import { BrowserRouter } from "react-router-dom";

import { Home, Layout, Navbar } from "./components";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { MyWorks } from "./components/MyWorks";
import { Contact } from "./components/Contact";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navbar />
                <Home />
                <About />
                <Skills />
                <MyWorks />
                <Contact />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
