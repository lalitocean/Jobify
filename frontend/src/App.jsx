import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Jobs from "./components/pages/Jobs";
import Browse from "./components/pages/Browse";
import Contact from "./components/pages/Contact";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import JobDeatils from "./components/JobDeatils";
import Profile from "./components/pages/Profile";
import CompanyCreate from "./components/pages/CompanyCreate";
import CompanySetup from "./components/pages/CompanySetup";
import Companies from "./components/pages/Companies";
import RecruiterJobs from "./components/pages/RecruiterJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/deatils/:id",
        element: <JobDeatils />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/recruiter/companies",
        element: <Companies />,
      },
      {
        path: "/recruiter/company/create",
        element: <CompanyCreate />,
      },
      {
        path: "/recruiter/company/:id",
        element: <CompanySetup />,
      },
      {
        path: "/recruiter/jobs",
        element: <RecruiterJobs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
