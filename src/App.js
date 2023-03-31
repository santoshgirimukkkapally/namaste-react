import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <AppLayout/>,
    errorElement : <Error/>
  },
  {
    path : '/About',
    element: <About/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
