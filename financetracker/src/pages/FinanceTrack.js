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
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FinanceTrack = ({ expenses }) => {
  const catMap = {}, dateMap = {};
  expenses.forEach(e => {
    catMap[e.category] = (catMap[e.category] || 0) + e.amount;
    const date = new Date(e.date).toLocaleDateString();
    dateMap[date] = (dateMap[date] || 0) + e.amount;
  });

  const pieData = {
    labels: Object.keys(catMap),
    datasets: [{ data: Object.values(catMap), backgroundColor: ['#007bff', '#ffc107', '#dc3545', '#28a745', '#6610f2'] }]
  };

  const barData = {
    labels: Object.keys(dateMap),
    datasets: [{ label: 'Daily Spend', data: Object.values(dateMap), backgroundColor: '#17a2b8' }]
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">📊 Expense Insights</h4>
      <div className="row">
        <div className="col-md-6 mb-2">
          <Pie data={pieData} />
        </div>
        <div className="col-md-6">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default FinanceTrack;
