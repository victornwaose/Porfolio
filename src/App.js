import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import ShowCase from "./components/showCase";
import Projects from "./pages/project";
import Hire from "./pages/hire";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Route path="/" exact>
                    <ShowCase />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/hire">
                    <Hire />
                </Route>
            </Router>
        </>
    );
}

export default App;
