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
import ProductDetails from './pages/ProductDetails'
import PagesContent from './pages/PagesContent';
import PagesName from './pages/PagesName';
import Cart from './pages/Cart'
import AllProduct from './pages/AllProduct';
import AboutCoolmate from './pages/AboutCoolmate'
import ChooseSize from './pages/ChooseSize'







ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store} >
    
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Views />} >
        <Route  index element={<ChooseSize/>} />
        <Route path="Menu/Sale" element={<div> chưa có  </div>} />
        <Route path="Cart" element={<Cart/>} />
        <Route path="Menu/Sản phẩm" element={<AllProduct/>} />
        <Route path="Menu/Về Coolmate" element={<AboutCoolmate />} />     
        <Route path="Menu/Chọn Size" element={<h1>chon size</h1>}/>         
        <Route path="Menu/Coolxprint" element={<h1>Coolxprint</h1>} />      
        <Route path = "/product/:ductName&:id" element={<ProductDetails/>}/>       
        <Route path="/Danh-mục/:content" element={<PagesContent/>}/> 
        <Route path="/collection/:name" element={<PagesName/>}/>      
                      
      </Route>
  </Routes>
</BrowserRouter>
</React.StrictMode>
  </Provider>
  
  
 
)




