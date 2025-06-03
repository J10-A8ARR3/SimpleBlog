import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/signup";
import Signin from "./components/Signin";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/signup", element: <Signup /> },
    { path: "/signin", element: <Signin /> },
]);
