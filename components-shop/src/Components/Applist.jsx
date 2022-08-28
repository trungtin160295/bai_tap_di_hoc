import React from 'react'


 export default function AppList({list}) {
    const dropMenu = React.createElement('div', null, )
    const title= React.createElement('a' ,null, "list.key.name")
    for (let key in list) {
        const container = React.createElement('li', {className:"'flex-colum"}," aaa")
        const title= React.createElement('a' ,null, "list.key.name")
        
            
        // for (let key1 in props.list.key){


        //     <li className ="drop-menu" >
        //     <a href="" className="flex-colum">                             
        //      <span>{props.content} <a href="#"> {props.especially}</a> </span>                    
        //      <span className="">{props.attention}</span>   
                            
        //     </a>             
        //    </li>
            
        // }



        // const explain = <span>{props.list.key.explain}</span> 





        
        
    }
    return (
        <div>
            {title}
        </div>
    )

        




  
    // const contents = props.contents;
    // const listItems = contents.map((content,index) =>
    //   <li className ="drop-menu" key={index}>
    //      <a href="#" className="flex">                             
    //       <span>{content}</span>                    
    //       {/* <span>{content.attention}</span>                    */}
    //      </a> 
         
         
    //     </li>
       
    // );
    // return (
    //   <ul>{listItems}
    //   </ul>
  
    // );
  }
  