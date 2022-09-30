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
import Menu from './Components/Menu'

import TabsProduct from './Components/TabProduct';
import Basic from './Components/Basic';
import TestCallAPI from './Components/TestCallAPI';
import DetailBlog from './Components/DetailBlog';
import ProductDetails from './pages/ProductDetails'






ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views />} >
          <Route  index element={<ProductDetails/>} />
          <Route path="Sale" element={<ProductDetails/>} />
          <Route path="Sản phẩm" element={<TabsProduct />} />
          <Route path="Về Coolmate" element={<TestCallAPI />} />
          <Route path="/blog/:id" element={<DetailBlog />}/> 
          <Route path="/Chọn Size" element={<ProductDetails/>}/> 
          <Route path="Coolxprint" element={<Menu/>} />                       
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)




