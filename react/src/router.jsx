import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import InputPage from "./Components/Pages/InputPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/input",
        element: <InputPage />,
    },
]);

export default router;
