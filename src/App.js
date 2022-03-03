import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Employees from "./Employees";
import Home from "./Home";
import Navbar from "./Navbar";

import './App.css';

function App() {

    return (
        <div className={'App'}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<Home />} />
                    <Route path={'/employees'} element={<Employees />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
