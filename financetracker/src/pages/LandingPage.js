import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import budgeticon from '../pages/budget.png';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #000428, #004e92)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        flexDirection: "column",
        textAlign: "center",
        transition: "all 0.5s ease-in-out",
        padding: "0 1rem",
      }}
    >
      {/* Centered Icon Above */}
      <img
        src={budgeticon}
        alt="wallet icon"
        style={{
          height: "60px",
          marginBottom: "20px",
        }}
      />

      <h1
        style={{
          fontSize: "2.5rem",
          animation: "fadeIn 2s ease-in-out",
          maxWidth: "800px",
          lineHeight: "1.4",
        }}
      >
        Kharch pe ho control tight, <br />
        <span style={{ color: "#f9d342" }}>WalletWise</span> banaye finances right!
      </h1>

      {/* Loader */}
      <div
        className="mt-4"
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid #f9d342",
          borderTop: "4px solid transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
