import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/ReataurantMenu"
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/useContext";
// import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import LoginForm from "./components/LogIn"
const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))



const AppLayout = () => {
  const [user, setUser] = useState(
    {
          name:'Santosh Giri',
          email: 'santosh.react@gmail.com'
  }
  )
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user: user}}>
      <Header />
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
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
        element: <Body />
      },
      {
        path : '/about',
        element: <Suspense fallback={<h1> Loading ....!!</h1>}><About/></Suspense>

      },
      {
        path : '/contact',
        element: <Suspense fallback={<Shimmer/>}><Contact/></Suspense>
      },
      {
        path : '/restaurant/:id',
        element: <RestaurantMenu/>
      },
      {
        path : '/instamart',
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
      {
        path : '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <LoginForm/>
      }
      
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
