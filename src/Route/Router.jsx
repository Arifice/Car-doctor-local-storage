import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoutes/MainLayoute";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyCart from "../Pages/MyCart";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoute></MainLayoute>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/mycart',
                element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
            }
        ]
    },
]);
export default router;