import Text from "./Text";
export default  function MenuHeader(props) {  
    
    
    
    
    const listMenu=props.listMenu;
    
    
    
    return (
        <div className="menu-header " > 
            
            {listMenu.map((list) =>{              
        

        return(
        <div key={list.title} >
            <Text className="title">{list.title}</Text>
            
        
        <div style={{margin: '30px 0 0 0'}} className="menu-header-column">
            {list.child.map((child)  => {
                return(
                    <div key={child.name} className="menu-header-child">
                        <a href="#" className="child-name">
                            <div className="child-name-title"> 
                                    <Text>{child.name}</Text>
                                {child.attention  &&

                                    <Text className= "attention-hot">{child.attention}</Text>

                                }
                               
                            </div>
                           
                            <Text className="child-explain">{child.explain}</Text>                         
                        </a>
                    
                        
                        <ul>
                           {child.product.map((content) => {
                            return (
                                <li key= {content.toString()}>
                                    <a href="#"  className="child-product">{content}</a>
                                    
                                </li>
                        
                               
                            )
                           })} 
                        </ul>
                        <hr  style={{width:'30%'  ,margin: '0'} }/>

                    </div>
                    

                )
            }) }
        </div>
        
      </div>
        )
        
    } )}
            
  
    </div>
      
    );
  }
    
        
        
 
  
