import React, { useState } from "react";

const allScenarios = [
  {
    question: "You receive ₹5000 monthly. What should be your first step?",
    options: [
      { label: "Buy a new phone", correct: false },
      { label: "Save 20% and budget the rest", correct: true },
      { label: "Spend on entertainment", correct: false },
    ],
    explanation:
      "Saving a portion first and budgeting the rest is a smart way to manage income.",
    category: "Budgeting",
  },
  {
    question: "What does a credit score indicate?",
    options: [
      { label: "Your wealth", correct: false },
      { label: "Your trustworthiness to repay debt", correct: true },
      { label: "Your salary", correct: false },
    ],
    explanation: "Credit score reflects how reliably you repay borrowed money.",
    category: "Debt Management",
  },
  {
    question: "What is the 50/30/20 rule?",
    options: [
      { label: "A budgeting method", correct: true },
      { label: "A tax rule", correct: false },
      { label: "A loan scheme", correct: false },
    ],
    explanation:
      "The 50/30/20 rule is a budgeting method dividing income into needs, wants, and savings.",
    category: "Budgeting",
  },
  {
    question: "Which is a good habit when saving money?",
    options: [
      { label: "Save what's left after spending", correct: false },
      { label: "Spend what's left after saving", correct: true },
      { label: "Avoid tracking expenses", correct: false },
    ],
    explanation:
      "Saving first ensures you prioritize long-term goals before spending.",
    category: "Savings",
  },
  {
    question: "Which investment typically has the lowest risk?",
    options: [
      { label: "Stocks", correct: false },
      { label: "Fixed Deposits", correct: true },
      { label: "Cryptocurrency", correct: false },
    ],
    explanation: "Fixed deposits offer low returns but are relatively safe.",
    category: "Investing",
  },
  {
    question: "What is compound interest?",
    options: [
      { label: "Interest on original money only", correct: false },
      { label: "Interest on interest earned", correct: true },
      { label: "Only applies to loans", correct: false },
    ],
    explanation:
      "Compound interest helps money grow faster by earning interest on both principal and interest.",
    category: "Savings",
  },
  {
    question: "Why is an emergency fund important?",
    options: [
      { label: "For shopping", correct: false },
      { label: "To cover unexpected expenses", correct: true },
      { label: "To buy luxury items", correct: false },
    ],
    explanation:
      "Emergency funds prevent you from going into debt during unexpected situations.",
    category: "Savings",
  },
  {
    question: "What is diversification in investing?",
    options: [
      { label: "Putting all money in one stock", correct: false },
      { label: "Spreading money across different investments", correct: true },
      { label: "Investing only in gold", correct: false },
    ],
    explanation:
      "Diversification reduces risk by spreading investments across assets.",
    category: "Investing",
  },
  {
    question: "What is a mutual fund?",
    options: [
      { label: "A personal savings account", correct: false },
      { label: "A pool of money managed by professionals", correct: true },
      { label: "A loan service", correct: false },
    ],
    explanation:
      "Mutual funds allow investors to pool money for diversified investments managed by experts.",
    category: "Investing",
  },
  {
    question: "How can you avoid credit card debt?",
    options: [
      { label: "Pay minimum due", correct: false },
      { label: "Pay full balance monthly", correct: true },
      { label: "Ignore the due date", correct: false },
    ],
    explanation:
      "Paying your full balance each month helps you avoid interest and debt.",
    category: "Debt Management",
  },
  {
    question: "Which is a fixed expense?",
    options: [
      { label: "Rent", correct: true },
      { label: "Dining out", correct: false },
      { label: "Shopping", correct: false },
    ],
    explanation:
      "Fixed expenses like rent remain the same each month, unlike variable expenses.",
    category: "Budgeting",
  },
  {
    question: "How often should you review your budget?",
    options: [
      { label: "Once a year", correct: false },
      { label: "Every month", correct: true },
      { label: "Never", correct: false },
    ],
    explanation: "Monthly reviews help track goals and adjust for changes.",
    category: "Budgeting",
  },
  {
    question: "What is a high-yield savings account?",
    options: [
      { label: "A credit card", correct: false },
      { label: "A savings account with better interest rates", correct: true },
      { label: "A loan type", correct: false },
    ],
    explanation:
      "High-yield savings accounts grow your money faster than regular savings.",
    category: "Savings",
  },
  {
    question: "What does SIP stand for in investing?",
    options: [
      { label: "Systematic Investment Plan", correct: true },
      { label: "Safe Income Portfolio", correct: false },
      { label: "Stock Interest Purchase", correct: false },
    ],
    explanation:
      "SIP allows you to invest small amounts regularly in mutual funds.",
    category: "Investing",
  },
  {
    question: "Which is a liability?",
    options: [
      { label: "Savings", correct: false },
      { label: "Credit card debt", correct: true },
      { label: "Investments", correct: false },
    ],
    explanation: "Liabilities are things you owe, like debts and loans.",
    category: "Debt Management",
  },
  {
    question: "What’s the best way to increase savings?",
    options: [
      { label: "Increase income or reduce expenses", correct: true },
      { label: "Buy more on credit", correct: false },
      { label: "Avoid budgeting", correct: false },
    ],
    explanation:
      "Saving more is possible by earning more or spending less—or both.",
    category: "Savings",
  },
  {
    question: "What is inflation?",
    options: [
      { label: "Decrease in prices", correct: false },
      { label: "Increase in value of money", correct: false },
      { label: "General rise in prices over time", correct: true },
    ],
    explanation: "Inflation reduces the purchasing power of money.",
    category: "Investing",
  },
  {
    question: "Which tool helps in tracking daily expenses?",
    options: [
      { label: "Expense tracker app", correct: true },
      { label: "Calendar", correct: false },
      { label: "Weather app", correct: false },
    ],
    explanation:
      "Expense tracking tools help monitor and control your spending habits.",
    category: "Budgeting",
  },
  {
    question: "Why is it important to pay EMIs on time?",
    options: [
      { label: "To get more credit cards", correct: false },
      { label: "To maintain a good credit score", correct: true },
      { label: "To increase expenses", correct: false },
    ],
    explanation:
      "Timely EMI payments help build a good credit history and avoid penalties.",
    category: "Debt Management",
  },
  {
    question: "What’s a good reason to take a loan?",
    options: [
      { label: "Luxury shopping", correct: false },
      { label: "Productive investment like education", correct: true },
      { label: "Unplanned trips", correct: false },
    ],
    explanation:
      "Loans are best used for investments that offer long-term benefits like education or business.",
    category: "Debt Management",
  },
];

const BudgetGame = () => {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  const filteredScenarios =
    category === "All"
      ? allScenarios
      : allScenarios.filter((s) => s.category === category);

  const scenario = filteredScenarios[currentIndex];

  const handleClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option.correct) setScore(score + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    if (currentIndex + 1 < filteredScenarios.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowPopup(true);
    }
  };

  const restartGame = () => {
    setSelected(null);
    setShowAnswer(false);
    setScore(0);
    setCurrentIndex(0);
    setShowPopup(false);
  };

  const categories = [
    "All",
    "Budgeting",
    "Savings",
    "Investing",
    "Debt Management",
  ];

  const renderStars = () => {
    const percentage = (score / filteredScenarios.length) * 100;
    let stars = 1;
    if (percentage >= 80) stars = 5;
    else if (percentage >= 60) stars = 4;
    else if (percentage >= 40) stars = 3;
    else if (percentage >= 20) stars = 2;
    return "⭐".repeat(stars);
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "Arial",
      }}
    >
      <h1>💰 Finance Quiz Game</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentIndex(0);
            setShowAnswer(false);
            setSelected(null);
            setScore(0);
          }}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {scenario && !showPopup ? (
        <>
          <p>
            <strong>Q{currentIndex + 1}:</strong> {scenario.question}
          </p>

          {scenario.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option)}
              disabled={showAnswer}
              style={{
                display: "block",
                margin: "1rem 0",
                padding: "10px 20px",
                backgroundColor:
                  showAnswer && option === selected
                    ? option.correct
                      ? "lightgreen"
                      : "salmon"
                    : "#eee",
                border: "1px solid #ccc",
                cursor: showAnswer ? "not-allowed" : "pointer",
              }}
            >
              {option.label}
            </button>
          ))}

          {showAnswer && (
            <div style={{ marginTop: "1rem" }}>
              {selected.correct ? (
                <p style={{ color: "green" }}>
                  ✅ Correct! {scenario.explanation}
                </p>
              ) : (
                <p style={{ color: "red" }}>❌ Oops! {scenario.explanation}</p>
              )}

              <button onClick={handleNext} style={{ marginTop: "1rem" }}>
                Next
              </button>
            </div>
          )}
        </>
      ) : null}

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "2rem",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "400px",
              boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            }}
          >
            <h2>🎉 Game Over!</h2>
            <p>
              Your score: {score}/{filteredScenarios.length}
            </p>
            <p style={{ fontSize: "2rem" }}>{renderStars()}</p>
            <button onClick={restartGame} style={{ marginTop: "1rem" }}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameForge;

// import React, { useState } from "react";
// import { Modal, Button, Card, Dropdown } from "react-bootstrap";

// const allScenarios = [
//   {
//     question: "You receive ₹5000 monthly. What should be your first step?",
//     options: [
//       { label: "Buy a new phone", correct: false },
//       { label: "Save 20% and budget the rest", correct: true },
//       { label: "Spend on entertainment", correct: false },
//     ],
//     explanation:
//       "Saving a portion first and budgeting the rest is a smart way to manage income.",
//     category: "Budgeting",
//   },
//   {
//     question: "What does a credit score indicate?",
//     options: [
//       { label: "Your wealth", correct: false },
//       { label: "Your trustworthiness to repay debt", correct: true },
//       { label: "Your salary", correct: false },
//     ],
//     explanation: "Credit score reflects how reliably you repay borrowed money.",
//     category: "Debt Management",
//   },
//   {
//     question: "What is the 50/30/20 rule?",
//     options: [
//       { label: "A budgeting method", correct: true },
//       { label: "A tax rule", correct: false },
//       { label: "A loan scheme", correct: false },
//     ],
//     explanation:
//       "The 50/30/20 rule is a budgeting method dividing income into needs, wants, and savings.",
//     category: "Budgeting",
//   },
//   {
//     question: "Which is a good habit when saving money?",
//     options: [
//       { label: "Save what's left after spending", correct: false },
//       { label: "Spend what's left after saving", correct: true },
//       { label: "Avoid tracking expenses", correct: false },
//     ],
//     explanation:
//       "Saving first ensures you prioritize long-term goals before spending.",
//     category: "Savings",
//   },
//   {
//     question: "Which investment typically has the lowest risk?",
//     options: [
//       { label: "Stocks", correct: false },
//       { label: "Fixed Deposits", correct: true },
//       { label: "Cryptocurrency", correct: false },
//     ],
//     explanation: "Fixed deposits offer low returns but are relatively safe.",
//     category: "Investing",
//   },
//   {
//     question: "What is compound interest?",
//     options: [
//       { label: "Interest on original money only", correct: false },
//       { label: "Interest on interest earned", correct: true },
//       { label: "Only applies to loans", correct: false },
//     ],
//     explanation:
//       "Compound interest helps money grow faster by earning interest on both principal and interest.",
//     category: "Savings",
//   },
//   {
//     question: "Why is an emergency fund important?",
//     options: [
//       { label: "For shopping", correct: false },
//       { label: "To cover unexpected expenses", correct: true },
//       { label: "To buy luxury items", correct: false },
//     ],
//     explanation:
//       "Emergency funds prevent you from going into debt during unexpected situations.",
//     category: "Savings",
//   },
//   {
//     question: "What is diversification in investing?",
//     options: [
//       { label: "Putting all money in one stock", correct: false },
//       { label: "Spreading money across different investments", correct: true },
//       { label: "Investing only in gold", correct: false },
//     ],
//     explanation:
//       "Diversification reduces risk by spreading investments across assets.",
//     category: "Investing",
//   },
//   {
//     question: "What is a mutual fund?",
//     options: [
//       { label: "A personal savings account", correct: false },
//       { label: "A pool of money managed by professionals", correct: true },
//       { label: "A loan service", correct: false },
//     ],
//     explanation:
//       "Mutual funds allow investors to pool money for diversified investments managed by experts.",
//     category: "Investing",
//   },
//   {
//     question: "How can you avoid credit card debt?",
//     options: [
//       { label: "Pay minimum due", correct: false },
//       { label: "Pay full balance monthly", correct: true },
//       { label: "Ignore the due date", correct: false },
//     ],
//     explanation:
//       "Paying your full balance each month helps you avoid interest and debt.",
//     category: "Debt Management",
//   },
//   {
//     question: "Which is a fixed expense?",
//     options: [
//       { label: "Rent", correct: true },
//       { label: "Dining out", correct: false },
//       { label: "Shopping", correct: false },
//     ],
//     explanation:
//       "Fixed expenses like rent remain the same each month, unlike variable expenses.",
//     category: "Budgeting",
//   },
//   {
//     question: "How often should you review your budget?",
//     options: [
//       { label: "Once a year", correct: false },
//       { label: "Every month", correct: true },
//       { label: "Never", correct: false },
//     ],
//     explanation: "Monthly reviews help track goals and adjust for changes.",
//     category: "Budgeting",
//   },
//   {
//     question: "What is a high-yield savings account?",
//     options: [
//       { label: "A credit card", correct: false },
//       { label: "A savings account with better interest rates", correct: true },
//       { label: "A loan type", correct: false },
//     ],
//     explanation:
//       "High-yield savings accounts grow your money faster than regular savings.",
//     category: "Savings",
//   },
//   {
//     question: "What does SIP stand for in investing?",
//     options: [
//       { label: "Systematic Investment Plan", correct: true },
//       { label: "Safe Income Portfolio", correct: false },
//       { label: "Stock Interest Purchase", correct: false },
//     ],
//     explanation:
//       "SIP allows you to invest small amounts regularly in mutual funds.",
//     category: "Investing",
//   },
//   {
//     question: "Which is a liability?",
//     options: [
//       { label: "Savings", correct: false },
//       { label: "Credit card debt", correct: true },
//       { label: "Investments", correct: false },
//     ],
//     explanation: "Liabilities are things you owe, like debts and loans.",
//     category: "Debt Management",
//   },
//   {
//     question: "What’s the best way to increase savings?",
//     options: [
//       { label: "Increase income or reduce expenses", correct: true },
//       { label: "Buy more on credit", correct: false },
//       { label: "Avoid budgeting", correct: false },
//     ],
//     explanation:
//       "Saving more is possible by earning more or spending less—or both.",
//     category: "Savings",
//   },
//   {
//     question: "What is inflation?",
//     options: [
//       { label: "Decrease in prices", correct: false },
//       { label: "Increase in value of money", correct: false },
//       { label: "General rise in prices over time", correct: true },
//     ],
//     explanation: "Inflation reduces the purchasing power of money.",
//     category: "Investing",
//   },
//   {
//     question: "Which tool helps in tracking daily expenses?",
//     options: [
//       { label: "Expense tracker app", correct: true },
//       { label: "Calendar", correct: false },
//       { label: "Weather app", correct: false },
//     ],
//     explanation:
//       "Expense tracking tools help monitor and control your spending habits.",
//     category: "Budgeting",
//   },
//   {
//     question: "Why is it important to pay EMIs on time?",
//     options: [
//       { label: "To get more credit cards", correct: false },
//       { label: "To maintain a good credit score", correct: true },
//       { label: "To increase expenses", correct: false },
//     ],
//     explanation:
//       "Timely EMI payments help build a good credit history and avoid penalties.",
//     category: "Debt Management",
//   },
//   {
//     question: "What’s a good reason to take a loan?",
//     options: [
//       { label: "Luxury shopping", correct: false },
//       { label: "Productive investment like education", correct: true },
//       { label: "Unplanned trips", correct: false },
//     ],
//     explanation:
//       "Loans are best used for investments that offer long-term benefits like education or business.",
//     category: "Debt Management",
//   },
// ];

// const GameForge = () => {
//   const [selected, setSelected] = useState(null);
//   const [showAnswer, setShowAnswer] = useState(false);
//   const [score, setScore] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [category, setCategory] = useState("All");
//   const [showPopup, setShowPopup] = useState(false);

//   const filteredScenarios =
//     category === "All"
//       ? allScenarios
//       : allScenarios.filter((s) => s.category === category);

//   const scenario = filteredScenarios[currentIndex];

//   const handleClick = (option) => {
//     setSelected(option);
//     setShowAnswer(true);
//     if (option.correct) setScore(score + 1);
//   };

//   const handleNext = () => {
//     setSelected(null);
//     setShowAnswer(false);
//     if (currentIndex + 1 < filteredScenarios.length) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setShowPopup(true);
//     }
//   };

//   const restartGame = () => {
//     setSelected(null);
//     setShowAnswer(false);
//     setScore(0);
//     setCurrentIndex(0);
//     setShowPopup(false);
//   };

//   const categories = [
//     "All",
//     "Budgeting",
//     "Savings",
//     "Investing",
//     "Debt Management",
//   ];

//   const renderStars = () => {
//     const percentage = (score / filteredScenarios.length) * 100;
//     let stars = 1;
//     if (percentage >= 80) stars = 5;
//     else if (percentage >= 60) stars = 4;
//     else if (percentage >= 40) stars = 3;
//     else if (percentage >= 20) stars = 2;
//     return "⭐".repeat(stars);
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">💰 Finance Quiz Game</h1>

//       <div className="d-flex justify-content-center mb-4">
//         <label className="me-2 fw-bold">Filter by Category:</label>
//         <select
//           className="form-select w-auto"
//           value={category}
//           onChange={(e) => {
//             setCategory(e.target.value);
//             setCurrentIndex(0);
//             setShowAnswer(false);
//             setSelected(null);
//             setScore(0);
//           }}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       {scenario && !showPopup && (
//         <Card className="shadow p-4 mb-4">
//           <Card.Body>
//             <Card.Title>
//               <strong>Q{currentIndex + 1}:</strong> {scenario.question}
//             </Card.Title>
//             <div className="mt-3">
//               {scenario.options.map((option, index) => (
//                 <Button
//                   key={index}
//                   variant={
//                     showAnswer && option === selected
//                       ? option.correct
//                         ? "success"
//                         : "danger"
//                       : "outline-secondary"
//                   }
//                   className="d-block w-100 text-start mb-2"
//                   onClick={() => handleClick(option)}
//                   disabled={showAnswer}
//                 >
//                   {option.label}
//                 </Button>
//               ))}
//             </div>

//             {showAnswer && (
//               <div className="mt-4">
//                 <p
//                   className={selected.correct ? "text-success" : "text-danger"}
//                 >
//                   {selected.correct ? "✅ Correct!" : "❌ Oops!"}{" "}
//                   {scenario.explanation}
//                 </p>
//                 <Button variant="primary" onClick={handleNext}>
//                   Next
//                 </Button>
//               </div>
//             )}
//           </Card.Body>
//         </Card>
//       )}

//       {/* Score Modal */}
//       <Modal show={showPopup} centered backdrop="static">
//         <Modal.Header>
//           <Modal.Title>🎉 Game Over!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center">
//           <h5>Your Score:</h5>
//           <p className="fs-4">
//             {score}/{filteredScenarios.length}
//           </p>
//           <div className="fs-2">{renderStars()}</div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={restartGame}>
//             Play Again
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default GameForge;
