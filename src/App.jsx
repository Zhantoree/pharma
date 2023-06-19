import React from "react";
import {BrowserRouter} from 'react-dom'
import Home from "./Components/Pages/Home/Home.jsx";
import {Route, Routes} from "react-router";
import About from "./Components/Pages/About/About.jsx";

function App() {


    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>
        </>)
}

export default App
