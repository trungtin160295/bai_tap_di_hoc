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








ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Views />} >
        <Route  index element={<Home/>} />
        <Route path="Sale" element={<div> chưa có  </div>} />
        <Route path="Đồ thể thao" element={<h2>dsdasd</h2>}/> 
        <Route path="Sản phẩm" element={<TabsProduct />} />
        <Route path="Về Coolmate" element={<div> chưa có  </div>} />     
        <Route path="/Chọn Size" element={<Login/>}/>         
        <Route path="Coolxprint" element={<ProductDetails/>} />      
        <Route path = "/product/:ductName&:id" element={<ProductDetails/>}/>       
        <Route path="/Danh-mục/:content" element={<PagesContent/>}/> 
        <Route path="/collection/:name" element={<PagesName/>}/>      
                      
      </Route>
  </Routes>
</BrowserRouter>
</React.StrictMode>
  </Provider>
  
  
 
)




