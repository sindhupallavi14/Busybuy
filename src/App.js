// import './App.css';
// import Navbar from './components/Navbar';
// import Cart from './pages/cart';
// import Home from './pages/Home';
// import Signin from './pages/signin';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Order from './pages/order';
// import { AppProvider } from './components/context';
// import Signup from './pages/signup';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const router = createBrowserRouter([
//     {path:'/',element:<Navbar/>,
//     children:[
//       {path: "/signin",element: <Signin/>, },
//       { path:"/",element: <Home/>,},
//       { path:"/cart",element:<Cart />,},
//       { path:"/order", element:<Order/>},
//       {path: "/signup",element: <Signup/>, }
//     ]}, 
//   ]);

//   return (
//     <AppProvider>
//       <RouterProvider router={router} />
//       <ToastContainer/>
//     </AppProvider>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart';
import Home from './pages/Home';
import Signin from './pages/signin';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // Change to createHashRouter
import Order from './pages/order';
import { AppProvider } from './components/context';
import Signup from './pages/signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { path: "/signin", element: <Signin /> },
        { path: "/", element: <Home /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order", element: <Order /> },
        { path: "/signup", element: <Signup /> }
      ],
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;

