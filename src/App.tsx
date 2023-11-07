import Home from "./Components/Pages/Home/Home";
import {Route, Routes} from "react-router";
import About from "./Components/Pages/About/About";
import Header from "./Components/Utils/Header/Header";
import Footer from "./Components/Utils/Footer/Footer";
import Services from "./Components/Pages/Services/Services";


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
