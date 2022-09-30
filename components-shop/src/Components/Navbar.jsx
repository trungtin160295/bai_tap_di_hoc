import useFetch from "../customize/fetch";
import Text from "./Text"
import MenuHeader from "./MenuHeader"
import AboutCool from "./AboutCool"
import {  NavLink } from "react-router-dom";
import '../style/Navbar.scss'
  

export default function Navbar() {  


    return (    
      
      <header>        
          
          <Text className='topbar'>Ưu đãi combo tiết kiệm đến 44% </Text>
          <nav className="navbar">
                  <div id="logo">
                      <a href="#"><img src="./src/img/logo.svg" alt="" /></a>                    
                  </div>
                  <div className="nav-center">
                    <ul >
                        
                        
                        <li><NavLink to="/Sale"> Combo Tiết Kiệm</NavLink></li> 
                        <li className="hover">
                            <NavLink to="/Sản Phẩm" > Sản phẩm</NavLink>
                                <div className="dropdown-content">
                                
                                   {/* <MenuHeader /> */}
                                </div>
                         </li>
                        <li><NavLink to="/Coolxprint"> Coolxprint</NavLink></li>
                        <li className="hover">
                                <NavLink to="/Về Coolmate"> Về Coolmate</NavLink>
                                <div className="dropdown-content">
                                    <AboutCool/>
                                </div>
                        </li>
                        <li> <NavLink to="/Chọn Size">Chọn Size</NavLink></li>

                    </ul>
                  </div>
                    
                  <div className="nav-right">
                    <button><img src="./src/img/icon-search.svg" alt="" /></button>
                    <button><img src="./src/img/icon-account.svg" alt="" /></button>                  
                    
                    <a href="#"><img src="./src/img/icon-cart.svg" alt="" />   </a>
                                     
                  </div>
              </nav>
          
          
      </header>
    )
  }
  