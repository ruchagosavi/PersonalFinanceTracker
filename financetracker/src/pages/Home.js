// import React from "react";

// const Home = () => {
//   return (
//     <div className="container mb-4">
//       {/* Row for Live Support */}
//       <div className="row mb-4 align-items-center">
//         <div className="col-md-9">
//           <h2>Live support</h2>
//           <p className="text-justify mt-4">
//             Need assistance? <br />
//             Our dedicated support team is here to help! Whether you're
//             encountering technical issues, have questions about our services, or
//             just need a little guidance, we're ready to assist you in real-time.
//             Our knowledgeable team is committed to providing prompt and
//             effective solutions to ensure your experience with us is smooth and
//             hassle-free. We understand that your time is valuable, and our goal
//             is to resolve your queries as quickly as possible. Feel free to
//             reach out through live chat, email, or phone—whichever method is
//             most convenient for you. At Ramanuj Techno, we prioritize customer
//             satisfaction, and we're just a message away.
//           </p>
//         </div>
//         <div className="col-md-3 d-flex justify-content-end">
//           <img
//             src="./contact.png" // Placeholder image, replace with actual image URL
//             alt="Live Support"
//             className="img-fluid"
//             style={{ maxWidth: "300px" }}
//           />
//         </div>
//       </div>

//       {/* Row for Contact Us and Company Information */}
//       <div className="row">
//         <div className="col-md-7 mb-4">
//           {" "}
//           {/* Added mb-4 for margin-bottom */}
//           <h3>Contact Us</h3>
//           <br />
//           <form>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 placeholder="Comment If Any"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-success">
//               Submit
//             </button>
//           </form>
//         </div>

//         <div className="col-md-4 offset-md-1">
//           <h3>Company Information</h3>
//           <br />
//           <p>
//             <strong>Ramanuj Techno Pvt. Ltd.</strong> <br />
//             1234 Innovation Park, <br />
//             5th Floor, Business Tower, <br />
//             Tech Avenue, Sector 18, <br />
//             Pune, Maharashtra 411057, <br />
//             India
//           </p>
//           <p>
//             <strong>Phone</strong>: +91 98765 43210 <br />
//             <strong>Email</strong>: support@ramanujtechno.com
//           </p>
//           <p>
//             <strong>Working Hours</strong>: <br />
//             Monday to Friday: 9:00 AM – 6:00 PM <br />
//             Saturday: 10:00 AM – 4:00 PM <br />
//             Sunday: Closed
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import image from '../pages/image.png';
const Home = () => {
  return (
    <div className="container mb-5">
      {/* Hero Section */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Take Control of Your Money</h1>
          <p className="lead mt-3">
            Welcome to your personal finance tracker! Budget smarter, track
            your spending, and grow your savings — all in one place.
          </p>
          <a href="/dashboard" className="btn btn-success btn-lg mt-4">
            Get Started
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={image}
            alt="Finance Tracker"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5">
        <h2 className="mb-4">Features</h2>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-light h-100">
            <h4>Expense Tracking</h4>
            <p className="mt-3">
              Automatically categorize your transactions and monitor your daily
              spending habits.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-light h-100">
            <h4>Budget Planning</h4>
            <p className="mt-3">
              Set custom budgets, goals, and limits to manage your finances
              better each month.
            </p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-light h-100">
            <h4>Financial Insights</h4>
            <p className="mt-3">
              Get smart, AI-driven insights into your savings, investments, and
              future financial health.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center my-5">
        <h3>Ready to level up your money game?</h3>
        <p className="mb-4">
          Sign in and start tracking your financial journey today!
        </p>
        <a href="/signup" className="btn btn-primary btn-lg">
          Create Account
        </a>
      </div>
    </div>
  );
};

export default Home;
