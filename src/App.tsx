import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./component/login";
import { SignUp } from "./component/signup";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
