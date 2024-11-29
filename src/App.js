import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart';
import Home from './pages/Home';
import Signin from './pages/signin';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Order from './pages/order';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignin, setShowSignin] = useState(false);


  const router = createBrowserRouter([
    {path:'/',element:<Navbar  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>,
    children:[
      {
        path: "/signin",
        element: <Signin setIsLoggedIn={setIsLoggedIn} setShowSignin={setShowSignin}/>,
      },
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/order",
        element:<Order/>
      }
    ]}, 
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
