import {Route, Routes} from "react-router";
import {lazy, Suspense} from 'react'
// import Home from "./Components/Pages/Home/Home";
const Home = lazy(() => import("./Components/Pages/Home/Home"));
const About = lazy(() => import("./Components/Pages/About/About"));
const Header = lazy(() => import("./Components/Utils/Header/Header"))
const Footer = lazy(() => import("./Components/Utils/Footer/Footer"))
const Services = lazy(() => import("./Components/Pages/Services/Services"))


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"}  element={
                    <Suspense fallback={<>Loading page...</>}>
                        <Home/>
                    </Suspense>
                }/>
                <Route path={"/about"} element={
                    <Suspense fallback={<>Loading page...</>}>
                        <About/>
                    </Suspense>
                }/>
                <Route path={"/services"} element={
                    <Suspense fallback={<>Loading page...</>}>
                        <Services/>
                    </Suspense>
                }/>
            </Routes>
            <Footer/>
        </>)
}

export default App
