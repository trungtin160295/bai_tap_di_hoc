


import Text from "./Text"
import '../style/Footer.scss'


import {  NavLink,Link } from "react-router-dom";
import '../style/Navbar.scss'
import useFetch from "../customize/fetch";
import useSrt from "../customize/str"


 function Header({dataheader}) {    
 

    return (    
           
        
        <header>
            {dataheader.sale ? <Text className='topbar'>{dataheader.sale} </Text> :null}
            {dataheader.header ?  
            
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src="https://www.coolmate.me/images/logo-coolmate.svg" alt="" /></Link>                    
                </div>
                 
                <div className="nav-center">
                  <ul >
                      { dataheader.header.map((item) =>{
                          return(
                            <li className="hover" key={item.id}>
                                
                                  <NavLink  to={`/${item.title}`}>  {item.title}  </NavLink>
                                  {item.child ?  
                                    <div className="dropdown-content ">
                                        
                                        {item.title ==="Sản phẩm" &&
                                          <div className="menu-header">
                                              { item.child ?
                                                  item.child.map((list) =>{       
                                          

                                                      return(
                                                          <div key={list.title} >
                                                              <Text className="title">{list.title}</Text>
                                                              
                                                          
                                                              <div  className="menu-header-column">
                                                                  
                                                                  {
                                                                    list.child.map((child)  => {                                
                                                                      return(
                                                                          <div key={child.name} className="menu-header-child">                                                                            
                                                                              <Link to={`${child.name}`} className="child-name">
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
                                                                                              <Link to= {`Danh-mục/${content}`}  className="child-product">{content}</Link>
                                                                                              
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
                                                :null
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
                    <button><img src="./src/img/icon-search.svg" alt="1" /></button>
                    <button><img src="./src/img/icon-account.svg" alt="1" /></button>                  
                    
                    <a href="#"><img src="./src/img/icon-cart.svg" alt="1" />   </a>
                                     
                </div>
            </nav>
             :null}
          
        
        </header>
    )
  }
   

  function Footer( {dataFooter}) {      
    
     return(
       dataFooter ?
       <footer >
           <div className="footer-menu">
               {dataFooter.map((item) => {
                   return(
                       <div className="footer-menu-item" key={item.id}>  
                           <Text className="footer-title">{item.name}</Text>
                           <ul>
                               {item.children.map((content) =>{
                                   return(
                                   <li key={content.toString()}>                                                                
                                       <a href="#">{content}</a>
                                    </li>)
                                   
                                   
                               } ) }
                           </ul>
                       </div>
                   )    })}
               
               <div className="footer-right">
                   <Text className="footer-title-right">COOLMATE lắng nghe bạn!</Text>
                   <Text className="footer-content-right">Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý
                        kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.</Text>
                   
                   <a href="#" className="sent-idea">Gửi ý kiến</a>
                   <div className="hotline">
                       <img src="./src/img/icon-hotline.svg" alt="" />
                       <div>
                           <Text> Hotline</Text>
                           <Text> 1900.272737 (028.7777.2737)</Text>
                       </div>                        
                   </div>
                   <div className="hotline">
                       <img src="./src/img/icon-email.svg" alt="" />
                       <div>
                           <Text> Email</Text>
                           <Text> Cool@coolmate.me</Text>
                       </div>                        
                   </div>
                   <div className="social">
                       <a href=""><img src="./src/img/icon-facebook.svg" alt="" /></a>
                       <a href=""><img src="./src/img/icon-instar.svg" alt="" /></a>
                       <a href=""><img src="./src/img/icon-youtube.svg" alt="" /></a>
                   
                   
                   
                   </div>
               </div>

           </div>
           <div className="footer-bottom">
               <div className="company">
                   <h6>@ CÔNG TY TNHH FASTECH ASIA</h6>
                    <span>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</span>

              </div>
               <div className="footer-bottom-right">
                   <a href="#"><img src="./src/img/handle_cert.png" alt="" /></a>
                    <a href="#"><img src="./src/img/dmca_protected_15_120.png" alt="" /></a>
                   <a href="#"><img src="./src/img/coolmate-info.png" alt="" /></a>
                    <a href="#"><img src="./src/img/logoSaleNoti.png" alt="" /></a>

               
              </div>
            </div>
           
       </footer>
       :null

       

     )    
   }
    
  
export {Header,Footer}  