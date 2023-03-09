import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import FindHome from "./pages/findHome/FindHome";
import Service from "./pages/service/Service";
function App() {
  return (
    <>
     <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
        {/* <LandingPage /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/find-Home" exact element={<FindHome />} />
        <Route path="/service" exact element={<Service />} />


        </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
