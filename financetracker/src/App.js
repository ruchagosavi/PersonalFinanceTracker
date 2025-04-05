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
import LandingPage from "./pages/LandingPage";
import GameForge from "./pages/GameForge";
import Home from "./pages/Home";
const App = () => {
  const sampleExpenses = [
    { amount: 100, category: 'Food', date: '2025-04-01' },
    { amount: 200, category: 'Transport', date: '2025-04-02' },
    { amount: 50, category: 'Food', date: '2025-04-03' },
    { amount: 150, category: 'Entertainment', date: '2025-04-03' },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* <Route path="/contact" element={<Contact />} /> */}
           {/*<Route path="/signup" element={<SignUp />} />  */}
           <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<SignIn />} /> 
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/home" element={<Home />} /> 
          {/* <Route path="/about" element={<About />} /> 
          <Route path="/home" element={<Home />} /> */}
          <Route path="/analytics" element={<FinanceTrack expenses={sampleExpenses} />}></Route>
          <Route path="/budget" element={<Budget />}></Route>
          <Route path="/expenses" element={<ViewTrans />}></Route>
          <Route path="/gameforge" element={<GameForge />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
