import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import reportWebVitals from './reportWebVitals';
import Products from './routes/products';
import Cart from './routes/cart';
import Login from './routes/login';
import store from './store';
import Product from './routes/productDetail'
import Main from './routes/main';
import { Provider } from 'react-redux';
import Register from './routes/register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "/",
        element: <Main />,
        children:[
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "cart/",
            element: <Cart/>
          },
          {
            path: "/login",
            element: <Login/>
          },
          {
            path: "/register",
            element: <Register/>
          }
        ]
      },
      {
        path:"/details/:id",
        element: <Product/>
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
