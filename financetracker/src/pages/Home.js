// import React from "react";

// const Contact = () => {
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
//             <button type="submit" className="btn btn-primary">
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

// export default Contact;

import React from "react";

const Home = () => {
  return (
    <div className="container mb-4">
      {/* Row for Live Support */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-9">
          <h2>Live support</h2>
          <p className="text-justify mt-4">
            Need assistance? <br />
            Our dedicated support team is here to help! Whether you're
            encountering technical issues, have questions about our services, or
            just need a little guidance, we're ready to assist you in real-time.
            Our knowledgeable team is committed to providing prompt and
            effective solutions to ensure your experience with us is smooth and
            hassle-free. We understand that your time is valuable, and our goal
            is to resolve your queries as quickly as possible. Feel free to
            reach out through live chat, email, or phone—whichever method is
            most convenient for you. At Ramanuj Techno, we prioritize customer
            satisfaction, and we're just a message away.
          </p>
        </div>
        <div className="col-md-3 d-flex justify-content-end">
          <img
            src="./contact.png" // Placeholder image, replace with actual image URL
            alt="Live Support"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>

      {/* Row for Contact Us and Company Information */}
      <div className="row">
        <div className="col-md-7 mb-4">
          {" "}
          {/* Added mb-4 for margin-bottom */}
          <h3>Contact Us</h3>
          <br />
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Comment If Any"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-4 offset-md-1">
          <h3>Company Information</h3>
          <br />
          <p>
            <strong>Ramanuj Techno Pvt. Ltd.</strong> <br />
            1234 Innovation Park, <br />
            5th Floor, Business Tower, <br />
            Tech Avenue, Sector 18, <br />
            Pune, Maharashtra 411057, <br />
            India
          </p>
          <p>
            <strong>Phone</strong>: +91 98765 43210 <br />
            <strong>Email</strong>: support@ramanujtechno.com
          </p>
          <p>
            <strong>Working Hours</strong>: <br />
            Monday to Friday: 9:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 4:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
