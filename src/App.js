import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import ShowCase from "./components/showCase";
import Projects from "./components/project";
import Hire from "./components/hire";

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
