import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateUser from "./Components/createUser";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateUser />,
  },
]);
