
export default  function MenuHeader(props) {  
    
    

    
    
     const listMenu=props.listMenu;
    
    const listItems = listMenu.map((list) =>{              
        

        return(
        <div key={list.title} >
            <a href="#" className="title">{list.title}</a>
        
        <div style={{margin: '30px 0 0 0'}} className="menu-header-column">
            {list.child.map((child)  => {
                return(
                    <div key={child.name} className="menu-header-child">
                        <a href="#" className="child-name">
                            <span>{child.name} <span style={{borderRadius:"12px",backgroundColor:" aqua" }}>{child.attention}</span></span>
                            <span style={{fontSize:"12px" }}>{child.explain}</span>
                            
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
        
    } );
    return (
        <div className="menu-header " > 
            
            {listItems}
            
  
        </div>
      
    );
  }
    
        
        
 
  
