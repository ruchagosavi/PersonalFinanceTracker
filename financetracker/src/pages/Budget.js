
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function BudgetPage() {
//   const [budgets, setBudgets] = useState({
//     Monthly: [],
//     Weekly: [],
//     Yearly: [],
//     Custom: []
//   });

//   const [newBudget, setNewBudget] = useState({
//     name: "",
//     amount: "",
//     period: "Monthly"
//   });

//   const [showForm, setShowForm] = useState(false);

//   const handleChange = (e) => {
//     setNewBudget({ ...newBudget, [e.target.name]: e.target.value });
//   };

//   const handleAddBudget = () => {
//     if (!newBudget.name || !newBudget.amount) return;

//     const updated = { ...budgets };
//     updated[newBudget.period].push({
//       name: newBudget.name,
//       amount: parseFloat(newBudget.amount)
//     });
//     setBudgets(updated);
//     setNewBudget({ name: "", amount: "", period: "Monthly" });
//     setShowForm(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Set Your Budget</h2>

//       {/* Button to toggle form */}
//       <div className="text-center mb-3">
//         <button
//           className="btn btn-success"
//           onClick={() => setShowForm(!showForm)}
//         >
//           {showForm ? "Cancel" : "➕ Add New Budget"}
//         </button>
//       </div>

//       {/* Add New Budget Form - Conditionally Rendered */}
//       {showForm && (
//         <div className="card mb-4">
//           <div className="card-body">
//             <h5 className="card-title">New Budget Details</h5>
//             <div className="mb-3">
//               <label className="form-label">Budget Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={newBudget.name}
//                 onChange={handleChange}
//                 placeholder="e.g. Rent, Travel"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Budget Amount (₹)</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="amount"
//                 value={newBudget.amount}
//                 onChange={handleChange}
//                 placeholder="e.g. 1000"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Period</label>
//               <select
//                 className="form-select"
//                 name="period"
//                 value={newBudget.period}
//                 onChange={handleChange}
//               >
//                 <option value="Monthly">Monthly</option>
//                 <option value="Weekly">Weekly</option>
//                 <option value="Yearly">Yearly</option>
//                 <option value="Custom">Custom</option>
//               </select>
//             </div>
//             <button className="btn btn-primary w-100" onClick={handleAddBudget}>
//               Save Budget
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Budgets by Period */}
//       {Object.entries(budgets).map(([period, items]) =>
//         items.length > 0 ? (
//           <div className="mb-4" key={period}>
//             <h4 className="mb-3">{period} Budgets</h4>
//             <div className="row">
//               {items.map((item, index) => (
//                 <div className="col-md-6 mb-3" key={index}>
//                   <div className="card shadow-sm">
//                     <div className="card-body">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="card-text">₹ {item.amount}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : null
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function BudgetPage() {
//   const [budgets, setBudgets] = useState({
//     Monthly: [],
//     Weekly: [],
//     Yearly: [],
//     Custom: []
//   });

//   const [newBudget, setNewBudget] = useState({
//     name: "",
//     amount: "",
//     period: "Monthly"
//   });

//   const [showForm, setShowForm] = useState(false);
//   const [activeTab, setActiveTab] = useState("Monthly");

//   const handleChange = (e) => {
//     setNewBudget({ ...newBudget, [e.target.name]: e.target.value });
//   };

//   const handleAddBudget = () => {
//     if (!newBudget.name || !newBudget.amount) return;

//     const updated = { ...budgets };
//     updated[newBudget.period].push({
//       name: newBudget.name,
//       amount: parseFloat(newBudget.amount)
//     });
//     setBudgets(updated);
//     setNewBudget({ name: "", amount: "", period: "Monthly" });
//     setShowForm(false);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Set Your Budget</h2>

//       <div className="text-center mb-3">
//       <button
//   className="btn"
//   onClick={() => setShowForm(!showForm)}
//   style={{ backgroundColor: "#000080", color: "white", fontSize: "1.25rem" }}
// >
//   {showForm ? "Cancel" : "➕ Add New Budget"}
// </button>

//       </div>

//       {showForm && (
//         <div className="card mb-4">
//           <div className="card-body">
//             <h5 className="card-title">New Budget Details</h5>
//             <div className="mb-3">
//               <label className="form-label">Budget Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={newBudget.name}
//                 onChange={handleChange}
//                 placeholder="e.g. Rent, Travel"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Budget Amount (₹)</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 name="amount"
//                 value={newBudget.amount}
//                 onChange={handleChange}
//                 placeholder="e.g. 1000"
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Period</label>
//               <select
//                 className="form-select"
//                 name="period"
//                 value={newBudget.period}
//                 onChange={handleChange}
//               >
//                 <option value="Monthly">Monthly</option>
//                 <option value="Weekly">Weekly</option>
//                 <option value="Yearly">Yearly</option>
//                 <option value="Custom">Custom</option>
//               </select>
//             </div>
//             <button className="btn btn-primary w-100" onClick={handleAddBudget}>
//               Save Budget
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Transactions Section */}
//       <div className="mt-5">
//         <h3 className="mb-3">Transactions</h3>
//         <ul className="nav nav-pills mb-3">
//           {["Monthly", "Weekly", "Yearly", "Custom"].map((tab) => (
//             <li className="nav-item" key={tab}>
//               <button
//                 className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div>
//           {budgets[activeTab]?.length > 0 ? (
//             <div className="row">
//               {budgets[activeTab].map((item, index) => (
//                 <div className="col-md-6 mb-3" key={index}>
//                   <div className="card border-left-primary shadow-sm">
//                     <div className="card-body">
//                       <h5 className="card-title">{item.name}</h5>
//                       <p className="card-text">₹ {item.amount}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted">No transactions found for {activeTab}.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaCalendarAlt, FaMoneyBillWave, FaWallet } from "react-icons/fa";

export default function BudgetPage() {
  const [budgets, setBudgets] = useState({
    Monthly: [],
    Weekly: [],
    Yearly: [],
    Custom: []
  });

  const [newBudget, setNewBudget] = useState({
    date: "",
    envelope: "Groceries",
    amount: "",
    period: "Monthly"
  });

  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("Monthly");

  const handleChange = (e) => {
    setNewBudget({ ...newBudget, [e.target.name]: e.target.value });
  };

  const handleAddBudget = () => {
    if (!newBudget.date || !newBudget.amount) return;

    const updated = { ...budgets };
    updated[newBudget.period].push({
      date: newBudget.date,
      envelope: newBudget.envelope,
      amount: parseFloat(newBudget.amount)
    });
    setBudgets(updated);
    setNewBudget({ date: "", envelope: "Groceries", amount: "", period: "Monthly" });
    setShowForm(false);
  };

  return (
    <div className="container mt-5">
    <h2
      className="text-center mb-4 fw-bold"
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#0d6efd", // Bootstrap primary
        letterSpacing: "1px",
        fontSize: "2.2rem",
      }}
    >
      💰 Budget Planner
    </h2>
    <p
    className="text-center mb-4"
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.1rem",
      color: "#000000",
      marginTop: "-0.75rem", // reduce spacing above
    }}
  >
    Take control of your money. Plan smarter, spend better. 💡
  </p>
    

      <div className="text-center mb-4">
      <button
  className="btn"
  onClick={() => setShowForm(!showForm)}
  style={{ backgroundColor: "#000080", color: "white", fontSize: "1.25rem" }}
>
          {showForm ? "Cancel" : <><FaPlus /> Add New Budget</>}
        </button>
      </div>

      {showForm && (
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <h5 className="card-title mb-4">📝 New Budget</h5>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label"><FaCalendarAlt /> Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={newBudget.date}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label"><FaWallet /> Envelope</label>
                <select
                  className="form-select"
                  name="envelope"
                  value={newBudget.envelope}
                  onChange={handleChange}
                >
                  <optgroup label="Essentials">
                    <option value="Groceries">Groceries</option>
                    <option value="Gas">Gas</option>
                    <option value="Rent">Rent</option>
                  </optgroup>
                  <optgroup label="Financial">
                    <option value="Savings">Savings</option>
                    <option value="Investments">Investments</option>
                  </optgroup>
                  <optgroup label="Lifestyle">
                    <option value="Travel">Travel</option>
                    <option value="Dining Out">Dining Out</option>
                    <option value="Entertainment">Entertainment</option>
                  </optgroup>
                  <optgroup label="Miscellaneous">
                    <option value="Shopping">Shopping</option>
                    <option value="Medical">Medical</option>
                    <option value="Others">Others</option>
                  </optgroup>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label"><FaMoneyBillWave /> Amount (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  value={newBudget.amount}
                  onChange={handleChange}
                  placeholder="e.g. 1000"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Period</label>
                <select
                  className="form-select"
                  name="period"
                  value={newBudget.period}
                  onChange={handleChange}
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-success w-100" onClick={handleAddBudget}>
                 Save Budget
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5">
        <h4 className="mb-3">📊 Budget Entries</h4>
        <ul className="nav nav-pills mb-3 justify-content-center">
          {["Monthly", "Weekly", "Yearly", "Custom"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link mx-1 ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {budgets[activeTab]?.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {budgets[activeTab].map((item, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border-start border-4 border-primary">
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                    <h5 className="card-title">{item.envelope}</h5>
                    <p className="card-text fs-5 fw-semibold text-success">
                      ₹ {item.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center mt-3">No entries found for <strong>{activeTab}</strong>.</p>
        )}
      </div>
    </div>
  );
}
