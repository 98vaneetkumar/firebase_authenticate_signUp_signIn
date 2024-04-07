import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => console.log(data))
      .catch((err) => alert(err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
