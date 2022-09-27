import Text from "./Text"
import MenuHeader from "./MenuHeader"
import AboutCool from "./AboutCool"
import {  NavLink } from "react-router-dom";
import '../style/Navbar.scss'
  

export default function Navbar() {
   
const listMenu =[
    {title :"Nhu cầu",
    child : [
             {               
                 name:"Mặc nhà & mặc trong",
                 explain:"Homewear /& Underwear" ,
                 product:[],    
                 },
             {               
                 name:"Mặc Hằng ngày",
                 explain:"Casualwear" ,  
                 product:[]     ,            
             },     
             
             {               
                 name:"Đồ thể thao",
                 explain:"Casualwear" , 
                 attention: "Hot" ,     
                 product:[]     ,     
                 },
             {               
             name:"Phụ kiện",
                 explain:"Accessories" ,      
                 product:[]     ,        
             }
         ] 
         },    
  
  
    {title :"Danh mục",
    child : [
             {               
                 name:"Áo nam",
                 product:['Áo Tank top','Áo T-shirt','Áo Polo','Áo Sơ mi','Áo thể thao','Áo in hình','Áo khoác thể thao']             
                 },
             {               
                 name:"Phụ kiện",
                 product:['Mũ (Nón)','Tất(Vớ)']         
             },     
             {               
                 name:"Quần Nam",
                 product:['Quần Shorts','Quần Jeans','Quần dài',]          
             },
             {               
                 name:"Quần Lót Nam",
                 product:['Quần Brief (Tam giác)','Quần Trunk (Boxer)','Quần Brief Boxer','(Boxer dài)',]     
                 },
             {               
                 name:"Tất cả sản phẩm",      
                 product:[]
                 
                   
             },
             {               
                 name:"Box đồ nam",  
                 attention: "Sale" ,     
                 product:[]
                   
             }
    ] }, 
    {title :"Bộ Sưu Tập",
    child : [
             {               
                 name:"Vũ trụ áo Marvel NEW",
                 explain:"Ưu đãi trải nghiệm hấp dẫn" ,
                 attention: "New" ,  
                 product:[]     ,    
                 },
                 
             {               
                 name:"Clean Vietnam",
                 explain:"Sự kết hợp giữa Coolmate & Vietmax" ,  
                 product:[]     ,            
             },     
             
             {               
                 name:"Coolmate Basics",
                 explain:"10% doanh thu dành cho các bé" , 
                    
                 product:[]     ,     
                 },
             {               
             name:"Sản phẩm bền vững",
                 explain:"Sản phẩm thân thiện với môi trường" ,      
                 product:[]     ,        
             }
         ] 
         },  
        
     {title :"Công nghệ",
    child : [
             {               
                 name:"Excool",
                 explain:"Công nghệ làm mát tối đa" ,
                 
                 product:[]     ,    
                 },
             {               
                 name:"Cleandye",
                 explain:"Nhuộm không dùng nước" ,  
                 product:[]     ,            
             },     
             
             {               
                 name:"HeiQ Viroblock",
                 explain:"10% doanh thu dành cho các bé" , 
                    
                 product:[]     ,     
                 },
             {               
             name:"Anti-Smell",
                 explain:"Công nghệ khử mùi từ Nhật Bản" ,      
                 product:[]     ,        
             }
         ] 
         },                                                                                   
     
  ]     
     

    return (    
      
      <header>        
          
          <Text className='topbar'>Ưu đãi combo tiết kiệm đến 44% </Text>
              <nav className="navbar">
                  <div id="logo">
                      <a href="#"><img src="./src/img/logo.svg" alt="" /></a>                    
                  </div>
                  <div className="nav-center">
                    <ul >
                        
                        
                        <li><NavLink href="#"> Combo Tiết Kiệm</NavLink></li> 
                        <li className="hover">
                                <NavLink to="/" > Sản phẩm</NavLink>
                                <div className="dropdown-content">
                                    <MenuHeader  listMenu={listMenu}/>
                                </div>
                         </li>
                        <li><NavLink to="/Coolxprint"> Coolxprint</NavLink></li>
                        <li className="hover">
                                <NavLink to="/about"> Về Coolmate</NavLink>
                                <div className="dropdown-content">
                                    <AboutCool/>
                                </div>
                        </li>
                        <li> <NavLink to="/size"> Chọn Size</NavLink></li>

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
  