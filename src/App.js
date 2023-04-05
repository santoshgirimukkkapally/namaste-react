import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/ReataurantMenu"
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))
// const Contact = lazy(() => import("./components/Contact"))



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : '/',
        element: <Body/>
      },
      {
        path : '/about',
        element: <Suspense fallback={<h1> Loading ....!!</h1>}><About/></Suspense>

      },
      {
        path : '/contact',
        element: <Contact/>
      },
      {
        path : '/restaurant/:id',
        element: <RestaurantMenu/>
      },
      {
        path : '/instamart',
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
      
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
