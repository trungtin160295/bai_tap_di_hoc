import Text from "./Text";
import useFetch from "../customize/fetch";
export default  function MenuHeader() {  



    
    const { data: listMenu, isLoading : loadingListMenu,  }
    = useFetch(`http://localhost:3004/menu`,false);                     
    return (
        <>
        {loadingListMenu === false && listMenu &&         
       
            <div className="menu-header " > 
                
                {listMenu.map((list) =>{       
                                    

                return(
                    <div key={list.title} >
                        <Text className="title">{list.title}</Text>
                        
                    
                        <div  className="menu-header-column">
                            
                            {list.child.map((child)  => {                                
                                return(
                                    <div key={child.name} className="menu-header-child">
                                        <a href="#" className="child-name">
                                            <div className="child-name-title"> 
                                                    <Text>{child.name}</Text>
                                                {child.attention  &&  <Text className= "attention-hot">{child.attention}</Text>}                                            
                                            
                                            </div>
                                        
                                            {child.explain  && <Text className="child-explain">{child.explain}</Text> }                        
                                        </a>
                                    
                                        
                                        <ul>
                                        
                                            { child.product  && child.product.map((content) => {
                                                return (
                                                    <li key= {content}>
                                                        <a href="#"  className="child-product">{content}</a>
                                                        
                                                    </li>                                                    
                                                
                                                )
                                            })} 
                                        </ul>
                                        <hr  style={{width:'30%'  ,margin: '0'} }/>

                                    </div>
                                    

                                )
                            })}
                        </div>
                    
                    </div>
                )
            
                } )}
                
    
            </div>
          
        }
        </>
    );
  }
    
        
        
 
  
