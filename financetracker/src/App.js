import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
import Navbar from "./components/Navbar";

import Budget from "./pages/Budget";
import FinanceTrack from "./pages/FinanceTrack";
import ViewTrans from "./pages/ViewTrans";
// import SignIn from "./Components/SignIn/SignIn";
// import SignUp from "./Components/SignUp/SignUp";
//import Home from "./Components/Home/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* <Route path="/contact" element={<Contact />} /> */}
           {/*<Route path="/signup" element={<SignUp />} />  */}
           <Route path="/" element={<SignUp />} /> 
          <Route path="/login" element={<SignIn />} /> 
          {/* <Route path="/about" element={<About />} /> 
          <Route path="/home" element={<Home />} /> */}
          <Route path="/analytics" element={<FinanceTrack />}></Route>
          <Route path="/budget" element={<Budget />}></Route>
          <Route path="/expenses" element={<ViewTrans />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
