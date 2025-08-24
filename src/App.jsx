
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoute from './components/MainRoute/MainRoute';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import SignUp from './Pages/SignUp';

const router = createBrowserRouter ([

    {
      path: '/',
      Component: MainRoute,
      children: [
        {index: true, Component: Home},
        {path: 'product', Component: Product},
        {path: 'contact', Component: Contact},
        {path: 'about', Component: About},
        {path: 'signup', Component: SignUp},
      ]
    }
  
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
