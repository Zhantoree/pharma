import React from "react";
import {BrowserRouter} from 'react-dom'
import Home from "./Components/Pages/Home/Home.jsx";
import {Route, Routes} from "react-router";
import About from "./Components/Pages/About/About.jsx";
import Header from "./Components/Utils/Header/Header.jsx";
import Footer from "./Components/Utils/Footer/Footer.jsx";
import Services from "./Components/Pages/Services/Services.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/services"} element={<Services/>}/>
            </Routes>
            <Footer/>
        </>)
}
export default App
