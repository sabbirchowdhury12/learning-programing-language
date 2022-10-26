import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Courses from "../components/Courses/Courses";
import CourseDeatails from "../components/CourseDeatails/CourseDeatails";
import CheackOut from "../components/CheackOut/CheackOut";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPAge/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDeatails></CourseDeatails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheackOut></CheackOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }

        ]
    }
]);