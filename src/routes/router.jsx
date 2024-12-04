import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Hompage from "../Pages/Hompage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Hompage></Hompage>
    },
]);
export default router