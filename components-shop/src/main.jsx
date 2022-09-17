import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import Views from './Components/Views';

import SliderBanner from './Components/SliderBanner'
import TabsProduct from './Components/TabProduct'

import Collection from './Components/Collection';

import Basic from './Components/Basic';







ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <Navbar/>     
  //   <SliderBanner />          
  //   <TabsProduct/>
  //   <Collection/>
  //   <Login/>
    
  //   <Basic/>

  //   <Footer/> 

  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views />} >
          <Route index element={<SliderBanner />} />
          <Route path="Coolxprint" element={<Basic/>} />
          <Route path="about" element={<TabsProduct />} />
          <Route path="size" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

)




