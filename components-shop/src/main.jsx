import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';



import Views from './Components/Views';


import TabsProduct from './Components/TabProduct'
import Basic from './Components/Basic';
import TestCallAPI from './Components/TestCallAPI';
import DetailBlog from './Components/DetailBlog';
import ProductDetails from './pages/ProductDetails'






ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views />} >
          <Route index element={<ProductDetails />} />
          <Route path="Coolxprint" element={<Basic/>} />
          <Route path="about" element={<TabsProduct />} />
          <Route path="size" element={<TestCallAPI />} />
          <Route path="/blog/:id" element={<DetailBlog />}/>                      
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)




