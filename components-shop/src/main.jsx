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
import TestCallAPI from './Components/TestCallAPI';
import DetailBlog from './Components/DetailBlog';
import ProductDetails from './pages/ProductDetails'
import ListProduct from './Components/ListProduct';
import Login from "./Components/Login"






ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views />} >
          <Route  index element={<Home/>} />
          <Route path="Sale" element={<ListProduct/>} />
          <Route path="Sản phẩm" element={<TabsProduct />} />
          <Route path="Về Coolmate" element={<TestCallAPI />} />
          <Route path="/blog/:id" element={<DetailBlog />}/> 
          <Route path="/Chọn Size" element={<Login/>}/> 
          <Route path="Coolxprint" element={<Menu/>} />      
          <Route path="/product/:id" element={<ProductDetails/>}/>                  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)




