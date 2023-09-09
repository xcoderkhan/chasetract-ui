import { createBrowserRouter } from "react-router-dom";
import Root from "../../roots/Root/Root";
import Home from "../../layout/Home/Home/Home";
import ErrorPage from "../../layout/ErrorPage/ErrorPage";
import Login from "../../layout/com/Login/Login";
import Register from "../../layout/com/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashbord from "../../layout/Dashbord/Dashbord";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                path: '/dashbord',
                element: <PrivateRoute><Dashbord /></PrivateRoute>
            }
        ]
    }
])

export default router;