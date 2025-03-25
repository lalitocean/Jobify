import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Jobs from "./components/pages/Jobs";
import Browse from "./components/pages/Browse";
import Contact from "./components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: "/home",
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
