import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { AuthProvider } from "./store/auth";
import { Login } from "./component/login";
import { SignUp } from "./component/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  
  {
    path: "/SignUp",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
