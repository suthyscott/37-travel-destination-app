import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import HooksExampleOne from "./components/HooksExampleOne"
import { Routes, Route } from "react-router-dom"
import AddDestination from "./components/AddDestination"

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/addDestination" element={<AddDestination />} />
            </Routes>
        </div>
    )
}

export default App
