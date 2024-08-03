import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignIn.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";  

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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

const validateRole = (value) => {
  let error;
  if (!value) {
    error = "Role is required";
  }
  return error;
};

function Signin() {
  const handleSignin = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: values.email,
        password: values.password,
        role: values.role,
      });

      if (response.status === 200) {
        toast.success("Sign In Successful!");
        console.log("User Data: ", response.data); // Handle the user data as needed
        resetForm();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Sign In Failed!");
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
                style={{ width: "100px" }}
              />
              <h3>Sign In</h3>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                role: "",
              }}
              onSubmit={handleSignin}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
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
                    <label htmlFor="role">Role</label>
                    <Field
                      as="select"
                      name="role"
                      className={`form-control ${
                        errors.role && touched.role ? "is-invalid" : ""
                      }`}
                      validate={validateRole}
                    >
                      <option value="">Select a role</option>
                      <option value="admin">Admin</option>
                      <option value="student">Student</option>
                    </Field>
                    <ErrorMessage
                      component="div"
                      name="role"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block mb-3 w-100"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                  <p className="text-center">
                    Don't have an account? <a href="/">Create Account</a>
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

export default Signin;