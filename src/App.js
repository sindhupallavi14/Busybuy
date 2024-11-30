import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart';
import Home from './pages/Home';
import Signin from './pages/signin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Order from './pages/order';
import { AppProvider } from './components/context';
import Signup from './pages/signup';


function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Navbar/>,
    children:[
      {path: "/signin",element: <Signin/>, },
      { path:"/",element: <Home/>,},
      { path:"/cart",element:<Cart />,},
      { path:"/order", element:<Order/>},
      {path: "/signup",element: <Signup/>, }
    ]}, 
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
