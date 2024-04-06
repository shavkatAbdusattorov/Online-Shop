import { React } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Notfound } from "./pages/Notfound/Notfound";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";

function App() {
  const wifi = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "category/:id",
          element: <Category />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={wifi} />
    </>
  );
}

export default App;
