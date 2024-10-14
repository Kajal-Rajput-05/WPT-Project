// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     location: "",
//     address: "",
//   });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5001/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.location,
//         address: credentials.address,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);
//     if (!json.success) {
//       alert("Please enter valid information.");
//     } else {
//       alert("You are registered successfully!");
//       navigate("/login");
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <div>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="address"
//               value={credentials.address}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="location" className="form-label">
//               Location
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="location"
//               value={credentials.location}
//               onChange={onChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a User
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import bg from "../images/mainbg.jpg";
import "../register.css";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    address: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
        address: credentials.address,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Please enter valid information.");
    } else {
      alert("You are registered successfully!");
      navigate("/login");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <MDBCard className="" style={{ width: "auto" }}>
        <MDBCardBody className="p-5">
          <h2
            className="text-uppercase text-center mb-4 fw-bolder"
            style={{ borderBottom: "3px solid green" }}
          >
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Your Name"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="email"
              placeholder="Email Address"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Address"
              name="address"
              value={credentials.address}
              onChange={onChange}
            />
            <MDBInput
              wrapperClass="mb-2"
              size="md"
              type="text"
              placeholder="Location"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </form>
          <div className="d-flex flex-row justify-content-center mb-2">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <div className="text-center mb-2">
            <button className="btn btn-success w-100" onClick={handleSubmit}>Register</button>
          </div>
          <div className="text-center">
            Have already an account? <Link to="/login">Login here</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
