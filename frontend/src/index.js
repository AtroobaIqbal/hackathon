import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './components/signup/Signup';
import Signin from './components/signIn/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />    
 
    <ToastContainer />
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
