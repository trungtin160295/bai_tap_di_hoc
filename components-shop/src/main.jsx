import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import { Provider} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from './pages/Home';


import '../src/style/Home.scss'
import Views from './Components/Views';

import TabsProduct from './Components/TabProduct';


import ProductDetails from './pages/ProductDetails'

import ListProduct from './Components/ListProduct';
import Login from "./Components/Login"
import PagesContent from './pages/PagesContent';
import PagesName from './pages/PagesName';
import Cart from './pages/Cart'
import AllProduct from './pages/AllProduct';







ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Views />} >
        <Route  index element={<Home/>} />
        <Route path="Sale" element={<div> chưa có  </div>} />
        <Route path="Cart" element={<Cart/>} />
        <Route path="Đồ thể thao" element={<h2>dsdasd</h2>}/> 
        <Route path="Sản phẩm" element={<AllProduct/>} />
        <Route path="Về Coolmate" element={<h1>về coolmate</h1>} />     
        <Route path="/Chọn Size" element={<h1>chon size</h1>}/>         
        <Route path="Coolxprint" element={<h1>Coolxprint</h1>} />      
        <Route path = "/product/:ductName&:id" element={<ProductDetails/>}/>       
        <Route path="/Danh-mục/:content" element={<PagesContent/>}/> 
        <Route path="/collection/:name" element={<PagesName/>}/>      
                      
      </Route>
  </Routes>
</BrowserRouter>
</React.StrictMode>
  </Provider>
  
  
 
)




