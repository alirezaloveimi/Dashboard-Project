import Dashbord from "./Pages/Dashbord";
import Users from "./Pages/Users";
import Billing from "./Pages/Billing";
import { Navigate } from "react-router-dom";

const Router = [
  { path: "/", element: <Navigate to="/dashbord" /> },
  { path: "/dashbord", element: <Dashbord /> },
  { path: "/users", element: <Users /> },
  { path: "/billing", element: <Billing /> },
];

export default Router;
