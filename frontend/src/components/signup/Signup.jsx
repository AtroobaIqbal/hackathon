import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const validateFullName = (value) => {
  let error;
  if (!value) {
    error = "Full name is required";
  } else if (value.length < 2) {
    error = "Full name must be at least 2 characters long";
  } else if (value.length > 50) {
    error = "Full name must be 50 characters or less";
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Password is required";
  } else if (value.length < 6) {
    error = "Password must be at least 6 characters long";
  }
  return error;
};

const validateConfirmPassword = (password, confirmPassword) => {
  let error;
  if (!confirmPassword) {
    error = "Please confirm your password";
  } else if (password !== confirmPassword) {
    error = "Passwords do not match";
  }
  return error;
};

function Signup() {
  const handleSignup = async (values, { resetForm }) => {
    try {
      console.log("Signup values:", values);

      const response = await axios.post(
        "https://hackathon-pearl-mu.vercel.app/api/auth/register",
        {
          name: values.fullName,
          email: values.email,
          password: values.password,
          role: "student", // You can set the role here if it's fixed
        }
      );

      console.log("Response status:", response.status);
      console.log("Response data:", response.data);

      if (response.status === 201) {
        toast.success("Sign Up Successful!");
        resetForm();
      }
    } catch (error) {
      console.error("Error during signup:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Sign Up Failed!");
      }
    }
  };


  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-body">
            <div className="text-center mb-4">
              <img
                src="/smit.png"
                alt="Logo"
                className="mb-2"
                style={{ width: "120px", display: "block", margin: "0 auto" }}
              />
              <h3>Sign Up</h3>
            </div>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={handleSignup}
            >
              {({ errors, touched, isSubmitting, values }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label htmlFor="fullName">Full Name</label>
                    <Field
                      type="text"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName && touched.fullName ? "is-invalid" : ""
                      }`}
                      placeholder="Full Name"
                      validate={validateFullName}
                    />
                    <ErrorMessage
                      component="div"
                      name="fullName"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <Field
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email && touched.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      validate={validateEmail}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className={`form-control ${
                        errors.password && touched.password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                      validate={validatePassword}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={`form-control ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Confirm Password"
                      validate={() =>
                        validateConfirmPassword(
                          values.password,
                          values.confirmPassword
                        )
                      }
                    />
                    <ErrorMessage
                      component="div"
                      name="confirmPassword"
                      className="invalid-feedback"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mb-3 w-100"
                    disabled={isSubmitting}
                  >
                    Create Account
                  </button>
                  <p className="text-center">
                    Already have an account? <a href="/signin">Sign In</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
