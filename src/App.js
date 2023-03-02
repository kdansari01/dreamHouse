import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import FindHome from "./pages/findHome/FindHome";
function App() {
  return (
    <>
     <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
        {/* <LandingPage /> */}
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/find-Home" exact element={<FindHome />} />


        </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
