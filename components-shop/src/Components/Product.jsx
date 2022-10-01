import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Text from './Text';



export default function Product( props) {  
    
   const product=props.products
   
        
    return (
        <div className="product">
            <div className="product-img">
                <Link to={`/product/${product.id}`}>
                    <img src={product.imgsHome.before} alt="Avatar" className="image hover1"/>
                    <img src={product.imgsHome.after} alt="Avatar" className="image hover2"/>
                    <div className="size "> 
                        <ul >
                        {
                            product.listSize.map((size) =>{
                                return (<li key = {size.toString() }> 
                                <Text className="sizechild">{size} </Text>
                                
                                </li>)
                            })
                        }
                        </ul>                                                         
                    
                    </div>
                </Link>   
                <Text className="price">Chỉ với {Math.round(product.price*(1-(product.discount/100))).toString().slice(0,-3)} K</Text>
                <Text className="attention ">Saving Packs</Text>
            
            
                <div className="evaluate">
                <Text >{product.rate}</Text>
                <Text ><i className="fa-solid fa-star" ></i></Text>
                <Text >{product.comment}</Text>                                                 
                
                </div>       

            </div>
            
            <div className="product-information">
                <ul>
                {
                   product.listColor.map((color) =>{
                        return (<li key = {color.toString() }> <Button >{color}</Button></li>)
                    })
                }                   

                </ul>
                <div className="product-name ">
                    <Link to={`/product/${product.id}`}> {product.ductName}</Link>
                 
                </div>
                <div className="product-price">
                    <Text className="sale">{product.price*(1-(product.discount/100))}</Text>  
                    <Text  className="price1">{product.price}</Text> 
                    <Text  className="sale">-{product.discount}%</Text>                     
                </div>
                

            </div>
    </div>
  

        
        
    );
  }
 