
import Footer from './Footer';
import Navbar  from './Navbar';
import Menu from './Menu';
import { Outlet } from "react-router-dom";


export default function Views() { 



    return (
      <>
         <Menu/>
         <main><Outlet /></main> 
             
        
              
         <Footer/>                         
      </>
    );
  }
  

  