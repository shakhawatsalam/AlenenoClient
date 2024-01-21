import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";
import CourseDetails from "../pages/Main/CourseDetails";
import { Login } from "../pages/Main/Login";
import Signup from "../pages/Main/Signup";
import { ProtectedRoute } from "../components/ProtectedRoute";
import MyCourses from "../pages/Dashboard/MyCourses";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "course/:id",
        element: (
          <ProtectedRoute>
            <CourseDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <MyCourses />,
      },
    ],
  },
]);

export default routes;
