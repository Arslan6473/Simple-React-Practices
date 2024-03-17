import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./MyPages/Home/Home.jsx";
import About from "./MyPages/About/About.jsx";
import Contact from "./MyPages/Contact/Contact.jsx";
import User from "./MyPages/User/User.jsx";
import Github, { gitapi } from "./MyPages/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route loader={gitapi} path="github" element={<Github />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
