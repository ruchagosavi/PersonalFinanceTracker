// import React from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const FinanceTrack = ({ expenses }) => {
//   // Sample format of expenses:
//   // [{ amount: 50, category: 'Food', date: '2025-04-04' }, ...]

//   const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);

//   const categoryMap = {};
//   const dateMap = {};

//   expenses.forEach(({ amount, category, date }) => {
//     categoryMap[category] = (categoryMap[category] || 0) + amount;

//     const formattedDate = new Date(date).toLocaleDateString();
//     dateMap[formattedDate] = (dateMap[formattedDate] || 0) + amount;
//   });

//   const pieData = {
//     labels: Object.keys(categoryMap),
//     datasets: [
//       {
//         data: Object.values(categoryMap),
//         backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#6f42c1'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barData = {
//     labels: Object.keys(dateMap),
//     datasets: [
//       {
//         label: 'Daily Expenses',
//         data: Object.values(dateMap),
//         backgroundColor: '#17a2b8',
//       },
//     ],
//   };

//   return (
//     <Container className="mt-4">
//       <Row>
//         <Col md={4}>
//           <Card bg="info" text="white" className="mb-4">
//             <Card.Body>
//               <Card.Title>Total Spent</Card.Title>
//               <Card.Text>${totalSpent.toFixed(2)}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Card className="mb-4">
//             <Card.Body>
//               <Card.Title>Category-wise Spending</Card.Title>
//               <Pie data={pieData} />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <Card>
//             <Card.Body>
//               <Card.Title>Spending Over Time</Card.Title>
//               <Bar data={barData} />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FinanceTrack;
// import React from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
// ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const FinanceTrack = ({ expenses }) => {
//   const catMap = {}, dateMap = {};
//   expenses.forEach(e => {
//     catMap[e.category] = (catMap[e.category] || 0) + e.amount;
//     const date = new Date(e.date).toLocaleDateString();
//     dateMap[date] = (dateMap[date] || 0) + e.amount;
//   });

//   const pieData = {
//     labels: Object.keys(catMap),
//     datasets: [{ data: Object.values(catMap), backgroundColor: ['#007bff', '#ffc107', '#dc3545', '#28a745', '#6610f2'] }]
//   };

//   const barData = {
//     labels: Object.keys(dateMap),
//     datasets: [{ label: 'Daily Spend', data: Object.values(dateMap), backgroundColor: '#17a2b8' }]
//   };

//   return (
//     <div className="container mt-4">
//       <h4 className="mb-3">📊 Expense Insights</h4>
//       <div className="row">
//         <div className="col-md-6 mb-2">
//           <Pie data={pieData} />
//         </div>
//         <div className="col-md-6">
//           <Bar data={barData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinanceTrack;
// import React, { useState } from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const FinanceTrack = ({ expenses }) => {
//   const [filter, setFilter] = useState('month');

//   const catMap = {};
//   const dateMap = {};

//   const now = new Date();
//   const weekStart = new Date(now);
//   weekStart.setDate(now.getDate() - 6); // last 7 days
//   const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

//   const filterDate = filter === 'week' ? weekStart : monthStart;

//   expenses.forEach((e) => {
//     const expenseDate = new Date(e.date);
//     if (expenseDate >= filterDate && expenseDate <= now) {
//       catMap[e.category] = (catMap[e.category] || 0) + e.amount;
//       const dateLabel = expenseDate.toLocaleDateString();
//       dateMap[dateLabel] = (dateMap[dateLabel] || 0) + e.amount;
//     }
//   });

//   const professionalColors = [
//     '#4B5563', '#10B981', '#3B82F6', '#F59E0B',
//     '#EF4444', '#8B5CF6', '#14B8A6', '#F97316'
//   ];

//   const pieData = {
//     labels: Object.keys(catMap),
//     datasets: [
//       {
//         data: Object.values(catMap),
//         backgroundColor: professionalColors,
//       },
//     ],
//   };

//   const barData = {
//     labels: Object.keys(dateMap),
//     datasets: [
//       {
//         label: 'Daily Spend',
//         data: Object.values(dateMap),
//         backgroundColor: '#3B82F6',
//       },
//     ],
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-4 text-center">📊 Expense Insights</h3>

//       {/* Filter Selector */}
//       <div className="d-flex justify-content-center mb-4">
//         <div className="bg-light p-2 px-3 rounded shadow-sm d-flex align-items-center">
//           <label className="me-2 fw-semibold text-secondary">Filter by:</label>
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="form-select form-select-sm w-auto"
//           >
//             <option value="month">This Month</option>
//             <option value="week">Last 7 Days</option>
//           </select>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="row">
//         <div className="col-md-6 mb-4">
//           <div className="bg-white rounded shadow-sm p-3">
//             <h5 className="text-center mb-3">📍 Category Breakdown</h5>
//             <Pie data={pieData} />
//           </div>
//         </div>
//         <div className="col-md-6 mb-4">
//           <div className="bg-white rounded shadow-sm p-3">
//             <h5 className="text-center mb-3">📅 Daily Spending</h5>
//             <Bar data={barData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinanceTrack;
import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FinanceTrack = ({ expenses }) => {
  const [filter, setFilter] = useState('month-April');

  const catMap = {};
  const dateMap = {};

  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - 6); // last 7 days

  const getMonthDateRange = (monthName) => {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    const year = now.getFullYear();
    const monthIndex = months.indexOf(monthName);
    const start = new Date(year, monthIndex, 1);
    const end = new Date(year, monthIndex + 1, 0);
    return [start, end];
  };

  let filterStart = new Date();
  let filterEnd = now;

  if (filter === 'week') {
    filterStart = weekStart;
  } else if (filter.startsWith('month-')) {
    const monthName = filter.split('-')[1];
    [filterStart, filterEnd] = getMonthDateRange(monthName);
  }

  expenses.forEach((e) => {
    const expenseDate = new Date(e.date);
    if (expenseDate >= filterStart && expenseDate <= filterEnd) {
      catMap[e.category] = (catMap[e.category] || 0) + e.amount;
      const dateLabel = expenseDate.toLocaleDateString();
      dateMap[dateLabel] = (dateMap[dateLabel] || 0) + e.amount;
    }
  });

  const professionalColors = [
    '#4B5563', '#10B981', '#3B82F6', '#F59E0B',
    '#EF4444', '#8B5CF6', '#14B8A6', '#F97316'
  ];

  const pieData = {
    labels: Object.keys(catMap),
    datasets: [
      {
        data: Object.values(catMap),
        backgroundColor: professionalColors,
      },
    ],
  };

  const barData = {
    labels: Object.keys(dateMap),
    datasets: [
      {
        label: 'Daily Spend',
        data: Object.values(dateMap),
        backgroundColor: '#3B82F6',
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center text-success">📊 Expense Insights</h3>

      {/* Filter Selector */}
      <div className="d-flex justify-content-center mb-4">
        <div className="bg-dark text-light p-2 px-3 rounded shadow-sm d-flex align-items-center">
          <label className="me-2 fw-semibold">Filter by:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-select form-select-sm w-auto bg-dark text-light border-secondary"
          >
            <option value="week">Last 7 Days</option>
            <option value="month-January">January</option>
            <option value="month-February">February</option>
            <option value="month-March">March</option>
            <option value="month-April">April</option>
          </select>
        </div>
      </div>

      {/* Charts */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="bg-dark text-success rounded shadow-sm p-3">
            <h5 className="text-center mb-3">📍 Category Breakdown</h5>
            <Pie data={pieData} />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-dark text-success rounded shadow-sm p-3">
            <h5 className="text-center mb-3">📅 Daily Spending</h5>
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTrack;
