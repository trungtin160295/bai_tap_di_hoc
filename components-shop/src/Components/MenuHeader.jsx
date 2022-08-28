
export default  function MenuHeader(props) {   
    
     const listMenu=props.listMenu;
    
    const listItems = listMenu.map((list) =>{              
        

        return(
        <div key={list.title} style={{ width: "300px"}}>
            <a href="#" className="title">{list.title}</a>
        
        <div style={{margin: '30px 0 0 0'}} className="flex">
            {list.child.map((child)  => {
                return(
                    <div key={child.name} className="menu-header-child">
                        <a href="#" className="child-name">{child.name} <span>{child.attention}</span></a>
                        <a href="#" className="child-explain">{child.explain}</a>
                        
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
    
        
        
 
  
