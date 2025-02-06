import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login/Login';
import Home from './HomePage/Home';
import { QueryDetails } from './HomePage/Comments/QueryDetails';
import Front from './Front Page/Front';
import FarmerMarket from './pages/FarmersMarket/FarmersMarket';
import Cart from './pages/FarmersMarket/CartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Front />}></Route>
      <Route path='login/' element={<Login />}></Route>
      <Route path='home/' element={<Home/>}></Route>
      <Route path='querydetails/:uid' element={<QueryDetails />} ></Route>
      <Route path="/farmers-market" element={<FarmerMarket />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
