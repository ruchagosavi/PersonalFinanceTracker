// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
// import Navbar from "./components/Navbar";


// import Budget from "./pages/Budget";
// import FinanceTrack from "./pages/FinanceTrack";
// import ViewTrans from "./pages/ViewTrans";
// // import SignIn from "./Components/SignIn/SignIn";
// // import SignUp from "./Components/SignUp/SignUp";
// //import Home from "./Components/Home/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Footer from "./components/Footer";
// import LandingPage from "./pages/LandingPage";
// import GameForge from "./pages/GameForge";
// import Home from "./pages/Home";
// const App = () => {
//   const sampleExpenses = [
//     { amount: 100, category: 'Food', date: '2025-04-01' },
//     { amount: 200, category: 'Transport', date: '2025-04-02' },
//     { amount: 50, category: 'Food', date: '2025-04-03' },
//     { amount: 150, category: 'Entertainment', date: '2025-04-03' },
//   ];
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>

//           {/* <Route path="/contact" element={<Contact />} /> */}
//            {/*<Route path="/signup" element={<SignUp />} />  */}
//            <Route path="/signup" element={<SignUp />} /> 
//           <Route path="/login" element={<SignIn />} /> 
//           <Route path="/" element={<LandingPage />} /> 
//           <Route path="/home" element={<Home />} /> 
//           {/* <Route path="/about" element={<About />} /> 
//           <Route path="/home" element={<Home />} /> */}
//           <Route path="/analytics" element={<FinanceTrack expenses={sampleExpenses} />}></Route>
//           <Route path="/budget" element={<Budget />}></Route>
//           <Route path="/expenses" element={<ViewTrans />}></Route>
//           <Route path="/gameforge" element={<GameForge />}></Route>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Budget from "./pages/Budget";
import FinanceTrack from "./pages/FinanceTrack";
import ViewTrans from "./pages/ViewTrans";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import GameForge from "./pages/GameForge";
import Home from "./pages/Home";

// Wrapper to use useLocation outside BrowserRouter
const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  const sampleExpenses = [
    { amount: 100, category: 'Food', date: '2025-04-01' },
    { amount: 200, category: 'Transport', date: '2025-04-02' },
    { amount: 50, category: 'Food', date: '2025-04-03' },
    { amount: 150, category: 'Entertainment', date: '2025-04-03' },
  
    // March 2025
    { amount: 120, category: 'Food', date: '2025-03-05' },
    { amount: 80, category: 'Transport', date: '2025-03-10' },
    { amount: 60, category: 'Utilities', date: '2025-03-12' },
    { amount: 90, category: 'Entertainment', date: '2025-03-15' },
  
    // February 2025
    { amount: 200, category: 'Food', date: '2025-02-07' },
    { amount: 110, category: 'Transport', date: '2025-02-11' },
    { amount: 75, category: 'Utilities', date: '2025-02-20' },
    { amount: 130, category: 'Shopping', date: '2025-02-25' },
  
    // January 2025
    { amount: 95, category: 'Food', date: '2025-01-03' },
    { amount: 160, category: 'Transport', date: '2025-01-06' },
    { amount: 55, category: 'Utilities', date: '2025-01-14' },
    { amount: 210, category: 'Shopping', date: '2025-01-29' },
  
    // April 2025 (continued)
    { amount: 180, category: 'Utilities', date: '2025-04-04' },
    { amount: 300, category: 'Shopping', date: '2025-04-05' },
    { amount: 220, category: 'Food', date: '2025-04-06' },
  ];
  

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/analytics" element={<FinanceTrack expenses={sampleExpenses} />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/expenses" element={<ViewTrans />} />
        <Route path="/gameforge" element={<GameForge />} />
      </Routes>
  
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
