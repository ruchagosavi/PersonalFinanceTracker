// // import React, { useState, useEffect } from "react";

// // const ViewTrans = () => {
// //   const [transactions, setTransactions] = useState([]);
// //   const [filtered, setFiltered] = useState([]);

// //   // Filters
// //   const [searchText, setSearchText] = useState("");
// //   const [categoryFilter, setCategoryFilter] = useState("");
// //   const [minAmount, setMinAmount] = useState("");
// //   const [maxAmount, setMaxAmount] = useState("");
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");

// //   useEffect(() => {
// //     const sampleData = [
// //       { id: 1, date: "2025-04-01", category: "Groceries", amount: 1200 },
// //       { id: 2, date: "2025-04-02", category: "Transport", amount: 300 },
// //       { id: 3, date: "2025-04-03", category: "Entertainment", amount: 800 },
// //       { id: 4, date: "2025-04-05", category: "Utilities", amount: 1500 },
// //     ];
// //     setTransactions(sampleData);
// //     setFiltered(sampleData);
// //   }, []);

// //   useEffect(() => {
// //     let data = transactions;

// //     if (searchText.trim() !== "") {
// //       data = data.filter((txn) =>
// //         txn.category.toLowerCase().includes(searchText.toLowerCase())
// //       );
// //     }

// //     if (categoryFilter !== "") {
// //       data = data.filter((txn) => txn.category === categoryFilter);
// //     }

// //     if (startDate !== "") {
// //       data = data.filter((txn) => txn.date >= startDate);
// //     }

// //     if (endDate !== "") {
// //       data = data.filter((txn) => txn.date <= endDate);
// //     }

// //     if (minAmount !== "") {
// //       data = data.filter((txn) => txn.amount >= Number(minAmount));
// //     }

// //     if (maxAmount !== "") {
// //       data = data.filter((txn) => txn.amount <= Number(maxAmount));
// //     }

// //     setFiltered(data);
// //   }, [
// //     searchText,
// //     categoryFilter,
// //     startDate,
// //     endDate,
// //     minAmount,
// //     maxAmount,
// //     transactions,
// //   ]);

// //   const categories = [...new Set(transactions.map((txn) => txn.category))];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 sm:p-8">
// //       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
// //         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
// //           💸 Your Expenses
// //         </h2>

// //         {/* Filters */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
// //           <input
// //             type="text"
// //             placeholder="🔍 Search by Category"
// //             value={searchText}
// //             onChange={(e) => setSearchText(e.target.value)}
// //             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //           />

// //           <select
// //             value={categoryFilter}
// //             onChange={(e) => setCategoryFilter(e.target.value)}
// //             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //           >
// //             <option value="">📁 All Categories</option>
// //             {categories.map((cat, i) => (
// //               <option key={i} value={cat}>
// //                 {cat}
// //               </option>
// //             ))}
// //           </select>

// //           <div className="flex gap-2">
// //             <input
// //               type="date"
// //               value={startDate}
// //               onChange={(e) => setStartDate(e.target.value)}
// //               className="w-1/2 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //             />
// //             <input
// //               type="date"
// //               value={endDate}
// //               onChange={(e) => setEndDate(e.target.value)}
// //               className="w-1/2 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //             />
// //           </div>

// //           <input
// //             type="number"
// //             placeholder="₹ Min Amount"
// //             value={minAmount}
// //             onChange={(e) => setMinAmount(e.target.value)}
// //             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //           />

// //           <input
// //             type="number"
// //             placeholder="₹ Max Amount"
// //             value={maxAmount}
// //             onChange={(e) => setMaxAmount(e.target.value)}
// //             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// //           />
// //         </div>

// //         {/* Table */}
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
// //             <thead className="bg-indigo-100 text-indigo-800 font-semibold text-left text-sm">
// //               <tr>
// //                 <th className="px-4 py-3 border-b">📅 Date</th>
// //                 <th className="px-4 py-3 border-b">📁 Category</th>
// //                 <th className="px-4 py-3 border-b">💰 Amount (₹)</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filtered.map((txn) => (
// //                 <tr
// //                   key={txn.id}
// //                   className="hover:bg-indigo-50 transition-colors duration-200"
// //                 >
// //                   <td className="px-4 py-3 border-b">{txn.date}</td>
// //                   <td className="px-4 py-3 border-b">{txn.category}</td>
// //                   <td className="px-4 py-3 border-b font-medium">
// //                     ₹ {txn.amount}
// //                   </td>
// //                 </tr>
// //               ))}
// //               {filtered.length === 0 && (
// //                 <tr>
// //                   <td colSpan="3" className="text-center py-6 text-gray-500">
// //                     🚫 No transactions match the filters.
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewTrans;
// import React, { useState, useEffect } from "react";

// const ViewTrans = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   // Filters
//   const [searchText, setSearchText] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [minAmount, setMinAmount] = useState("");
//   const [maxAmount, setMaxAmount] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     const sampleData = [
//       { id: 1, date: "2025-04-01", category: "Groceries", amount: 1200 },
//       { id: 2, date: "2025-04-02", category: "Transport", amount: 300 },
//       { id: 3, date: "2025-04-03", category: "Entertainment", amount: 800 },
//       { id: 4, date: "2025-04-05", category: "Utilities", amount: 1500 },
//     ];
//     setTransactions(sampleData);
//     setFiltered(sampleData);
//   }, []);

//   useEffect(() => {
//     let data = transactions;

//     if (searchText.trim() !== "") {
//       data = data.filter((txn) =>
//         txn.category.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     if (categoryFilter !== "") {
//       data = data.filter((txn) => txn.category === categoryFilter);
//     }

//     if (startDate !== "") {
//       data = data.filter((txn) => txn.date >= startDate);
//     }

//     if (endDate !== "") {
//       data = data.filter((txn) => txn.date <= endDate);
//     }

//     if (minAmount !== "") {
//       data = data.filter((txn) => txn.amount >= Number(minAmount));
//     }

//     if (maxAmount !== "") {
//       data = data.filter((txn) => txn.amount <= Number(maxAmount));
//     }

//     setFiltered(data);
//   }, [
//     searchText,
//     categoryFilter,
//     startDate,
//     endDate,
//     minAmount,
//     maxAmount,
//     transactions,
//   ]);

//   const categories = [...new Set(transactions.map((txn) => txn.category))];

//   const exportToCSV = () => {
//     if (filtered.length === 0) return;

//     const header = ["Date", "Category", "Amount"];
//     const rows = filtered.map((txn) => [txn.date, txn.category, txn.amount]);

//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       [header, ...rows].map((e) => e.join(",")).join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "transactions.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 sm:p-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
//           💸 Your Expenses
//         </h2>

//         {/* Filters */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="🔍 Search by Category"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="">📁 All Categories</option>
//             {categories.map((cat, i) => (
//               <option key={i} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           <div className="flex gap-2">
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-1/2 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-1/2 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           <input
//             type="number"
//             placeholder="₹ Min Amount"
//             value={minAmount}
//             onChange={(e) => setMinAmount(e.target.value)}
//             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />

//           <input
//             type="number"
//             placeholder="₹ Max Amount"
//             value={maxAmount}
//             onChange={(e) => setMaxAmount(e.target.value)}
//             className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//         </div>

//         {/* Export Button */}
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={exportToCSV}
//             className="bg-green-100 text-green-700 font-medium px-4 py-2 rounded-xl hover:bg-green-200 transition"
//           >
//             📤 Export to CSV
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
//             <thead className="bg-indigo-100 text-indigo-800 font-semibold text-left text-sm">
//               <tr>
//                 <th className="px-4 py-3 border-b">📅 Date</th>
//                 <th className="px-4 py-3 border-b">📁 Category</th>
//                 <th className="px-4 py-3 border-b">💰 Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((txn) => (
//                 <tr
//                   key={txn.id}
//                   className="hover:bg-indigo-50 transition-colors duration-200"
//                 >
//                   <td className="px-4 py-3 border-b">{txn.date}</td>
//                   <td className="px-4 py-3 border-b">{txn.category}</td>
//                   <td className="px-4 py-3 border-b font-medium">
//                     ₹ {txn.amount.toLocaleString("en-IN")}
//                   </td>
//                 </tr>
//               ))}
//               {filtered.length === 0 && (
//                 <tr>
//                   <td colSpan="3" className="text-center py-6 text-gray-500">
//                     🚫 No transactions match the filters.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewTrans;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewTrans = () => {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Filters
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const sampleData = [
      { id: 1, date: "2025-04-01", category: "Groceries", amount: 1200 },
      { id: 2, date: "2025-04-02", category: "Transport", amount: 300 },
      { id: 3, date: "2025-04-03", category: "Entertainment", amount: 800 },
      { id: 4, date: "2025-04-05", category: "Utilities", amount: 1500 },
    ];
    setTransactions(sampleData);
    setFiltered(sampleData);
  }, []);

  useEffect(() => {
    let data = transactions;

    if (searchText.trim() !== "") {
      data = data.filter((txn) =>
        txn.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (categoryFilter !== "") {
      data = data.filter((txn) => txn.category === categoryFilter);
    }

    if (startDate !== "") {
      data = data.filter((txn) => txn.date >= startDate);
    }

    if (endDate !== "") {
      data = data.filter((txn) => txn.date <= endDate);
    }

    if (minAmount !== "") {
      data = data.filter((txn) => txn.amount >= Number(minAmount));
    }

    if (maxAmount !== "") {
      data = data.filter((txn) => txn.amount <= Number(maxAmount));
    }

    setFiltered(data);
  }, [
    searchText,
    categoryFilter,
    startDate,
    endDate,
    minAmount,
    maxAmount,
    transactions,
  ]);

  const categories = [...new Set(transactions.map((txn) => txn.category))];

  const exportToCSV = () => {
    if (filtered.length === 0) return;

    const header = ["Date", "Category", "Amount"];
    const rows = filtered.map((txn) => [txn.date, txn.category, txn.amount]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">💸 Your Expenses</h2>

        {/* Filters */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Category"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4 d-flex gap-2">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Min Amount"
              value={minAmount}
              onChange={(e) => setMinAmount(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Max Amount"
              value={maxAmount}
              onChange={(e) => setMaxAmount(e.target.value)}
            />
          </div>

          <div className="col-md-4 d-flex justify-content-end">
            <button className="btn btn-success" onClick={exportToCSV}>
              📤 Export to CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((txn) => (
                  <tr key={txn.id}>
                    <td>{txn.date}</td>
                    <td>{txn.category}</td>
                    <td>₹ {txn.amount.toLocaleString("en-IN")}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    🚫 No transactions match the filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTrans;
