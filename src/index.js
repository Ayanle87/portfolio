import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main from "./components/Main";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import DataProjects from "./components/DataProjects";
// import Layout from "./components/Layout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Main />} />
//       <Route path="about" element={<About />} />
//       <Route
//         path="projects"
//         element={<Projects DataProjects={DataProjects} />}
//       />

//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Main />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       { path: "projects", element: <Projects DataProjects={DataProjects} /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
