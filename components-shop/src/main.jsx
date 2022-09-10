import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Components/Navbar'
// import MenuHeader from './Components/MenuHeader'
import Product from './Components/Product'
import SliderBanner from './Components/SliderBanner'
import TabsProduct from './Components/TabProduct'
import Login from './Components/Login'


import Footer from './Components/Footer';








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Navbar/>     
    <SliderBanner />     
    
   

    <TabsProduct/>
    <Login/> */}
    <Footer/>

  </React.StrictMode>
)




// import React from 'react';

// import ReactDOM from 'react-dom/client';

// import App from './App.jsx';




// ReactDOM.render(<App/>, document.getElementById('app'));




// setTimeout(() => {

//    ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);