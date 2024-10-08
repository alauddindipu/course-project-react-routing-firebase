import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/ProductsOff";
import PrivateRoute from "./PrivateRoute";
import ProductsDetails from "../Pages/ProductsDetailsOff";
import CourseDetails from "../Pages/CourseDetails";
import Course from "../Pages/Course";
// import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }, 
      // {
      //   path: "/products",
      //   element: (<PrivateRoute>
      //     <Products></Products>
      //   </PrivateRoute>)
      // }, 
      {
        path: "/products",
        element: (<PrivateRoute>
          <Course></Course>
        </PrivateRoute>)
      },
      //  {
      //   path: "/products/:id",
      //   element: (<PrivateRoute>
      //     <ProductsDetails></ProductsDetails>
      //   </PrivateRoute>),
      //   loader: ({params}) => fetch(`http://localhost:5173/products/${params.id}`)
      // },
       {
        path: "/products/:id",
        element: (<PrivateRoute>
          <CourseDetails></CourseDetails>
        </PrivateRoute>),
        loader: ({params}) => fetch(`http://localhost:5173/course/${params.id}`)
      }
    ]
  }
]);

export default routes;
