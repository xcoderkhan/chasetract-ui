import { createBrowserRouter } from "react-router-dom";
import Root from "../../roots/Root/Root";
import Home from "../../layout/Home/Home/Home";
import ErrorPage from "../../layout/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;