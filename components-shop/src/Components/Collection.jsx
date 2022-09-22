import Text from "./Text"
export default function Collection(props ) {  
    
    
    return(
        
                <div className="collection" key={props.collection.id}>
                    <a href="#">                        
                        <img src={props.collection.linkImg} alt="" />    
                                            
                        <Text className="collection-title">{props.collection.title}</Text>
                    </a>
                </div>
         
        
    )

}