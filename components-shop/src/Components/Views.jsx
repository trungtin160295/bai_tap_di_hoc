
import Footer from './Footer';
import Navbar  from './Navbar';
import { Outlet } from "react-router-dom";


export default function Views() { 



    return (
      <>
         <Navbar/>
          <main><Outlet /> </main>
              
         <Footer/>                         
      </>
    );
  }
  

  