


import Text from "./Text"
import MenuHeader from "./MenuHeader"
import AboutCool from "./AboutCool"

import {  NavLink,Link } from "react-router-dom";
import '../style/Navbar.scss'
import useFetch from "../customize/fetch";



export default function Menu() {    
    const {
    data: dataMenu,
    isLoading    
  } = useFetch(`http://localhost:3004/menu`, false);
  console.log(dataMenu);



  

    return (    
           
        
        <header>
            {isLoading === false && dataMenu.sale ? <Text className='topbar'>{dataMenu.sale} </Text> :null}
            {isLoading === false && dataMenu.menu ?  
            
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src="https://www.coolmate.me/images/logo-coolmate.svg" alt="" /></Link>                    
                </div>
                 {console.log(dataMenu.menu)} 
                <div className="nav-center">
                  <ul >
                      { dataMenu.menu.map((item) =>{
                          return(
                            <li className="hover" key={item.id}>
                                
                                  <NavLink  to={item.title}>  {item.title}  </NavLink>
                                  {item.child ?  
                                    <div className="dropdown-content ">
                                        
                                        {item.title ==="Sản phẩm" &&
                                          <div className="menu-header">
                                              {
                                                  item.child.map((list) =>{       
                                          

                                                      return(
                                                          <div key={list.title} >
                                                              <Text className="title">{list.title}</Text>
                                                              
                                                          
                                                              <div  className="menu-header-column">
                                                                  
                                                                  {list.child.map((child)  => {                                
                                                                      return(
                                                                          <div key={child.name} className="menu-header-child">
                                                                              <Link to={`/Home/${child.name}`} className="child-name">
                                                                                  <div className="child-name-title"> 
                                                                                          <Text>{child.name}</Text>
                                                                                      {child.attention? <Text className= "attention-hot">{child.attention}</Text> :null}                                            
                                                                                  
                                                                                  </div>
                                                                              
                                                                                  {child.explain ? <Text className="child-explain">{child.explain}</Text> :null }                        
                                                                              </Link>
                                                                          
                                                                              { child.product?
                                                                              <ul>
                                                                              
                                                                                   {child.product.map((content) => {
                                                                                      return (
                                                                                          <li key= {content}>
                                                                                              <Link to= {`/Home/${content}`}  className="child-product">{content}</Link>
                                                                                              
                                                                                          </li>                                                    
                                                                                      
                                                                                      )
                                                                                  })} 
                                                                              </ul>:null} 
                                                                              <hr  style={{width:'80%'  ,margin: '0'} }/>
                                      
                                                                          </div>
                                                                          
                                      
                                                                      )
                                                                  })}
                                                              </div>
                                                          
                                                          </div>
                                                      )
                                                  
                                                  } )
                                              } 
                                              
                                          </div>
                                        }  
                                        {item.title ==="Về Coolmate" &&
                                        
                                          <div className="about-cool ">
                                            {item.child.map((content) =>{
                                                return(
                                                    <div key={content.id} className="about-cool-child">
                                                        <img src={content.linkImg} alt={content.title} />
                                                        <div className="title">{content.title}</div>
                                                        <span>{content.content}</span>
                                                    </div>
                                                )
                                                
                                            })}                                    
                                         </div>                                      
                                        }                                  
                                      
                                    </div>
                                : null}
                            </li>
                        )

                        })  
                    }                      
                     

                  </ul>
                </div>
                  
                 
                    
                <div className="nav-right">
                    <button><img src="./src/img/icon-search.svg" alt="" /></button>
                    <button><img src="./src/img/icon-account.svg" alt="" /></button>                  
                    
                    <a href="#"><img src="./src/img/icon-cart.svg" alt="" />   </a>
                                     
                </div>
            </nav>
             :null}
          
        
        </header>
    )
  }
   
    
  
  