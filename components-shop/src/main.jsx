import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Components/Navbar'


import SliderBanner from './Components/SliderBanner'
import TabsProduct from './Components/TabProduct'
import Login from './Components/Login'
import Collection from './Components/Collection';

import Footer from './Components/Footer';
import Test from './Components/Test';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar/>     
    <SliderBanner />          
    <TabsProduct/>
    <Collection/>
    <Login/>
    <Footer/> */}
    <Test/>

  </React.StrictMode>
)




// import React from 'react';

// import ReactDOM from 'react-dom/client';

// import App from './App.jsx';




// ReactDOM.render(<App/>, document.getElementById('app'));




// setTimeout(() => {

//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);