import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./component/login";
import { SignUp } from "./component/signup";
import { Dashboard } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Login />
      </>
    ),
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
    path:"/dashboard",
    element: (<>
    <Dashboard/>
    </>),
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
