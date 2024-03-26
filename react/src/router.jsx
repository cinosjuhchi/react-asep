import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/input",
        element: <App />,
    },
]);

export default router;
