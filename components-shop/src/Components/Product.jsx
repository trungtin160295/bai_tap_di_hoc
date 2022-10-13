import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Text from './Text';



export default function Product( props) {  
    
   const product=props.products
   
        
    return (
        <div className="product">
            <div className="product-img">
                <Link to={`/product/${product.ductName}&${product.id} `}>
                    <img src={product.linkImages[0]} alt="Avatar" className="image hover1"/>
                    <img src={product.linkImages[1]} alt="Avatar" className="image hover2"/>
                    {product.listSize? 
                     <div className="size "> 
                        <ul >
                        {
                            product.listSize.map((size) =>{
                                return (
                                <li key = {size.toString() }> 
                                 <Text className="sizechild">{size} </Text>                                
                                </li>)
                            })
                        }
                        </ul>                                                         
                 
                    </div>
                    :null
                 }
                   
                </Link>   
                <Text className="price">Chỉ với {Math.round(product.price*(1-(product.discount/100))).toString().slice(0,-3)} K</Text>
                <Text className="attention ">Saving Packs</Text>
            
                {product.rate? 
                    <div className="evaluate">
                    <Text >{product.rate}</Text>
                    <Text ><i className="fa-solid fa-star" ></i></Text>
                    <Text >{product.comment}</Text>                                                 
                
                </div> 
                :null
                }      
                      

            </div>
            
            <div className="product-information">
                <ul>
                {product.listColor?
                   product.listColor.map((color) =>{
                        return (<li key = {color.toString() }> <Button >{color}</Button></li>)
                    })
                    :null
                }                   

                </ul>
                <div className="product-name ">
                    <Link to={`/product/${product.ductName} ${product.id}`}> {product.ductName}</Link>
                 
                </div>
                <div className="product-price">



                    <Text className="sale">{product.price*(1-(product.discount/100))}</Text> 
                    {product.price ===""&&
                    <Text  className="price1">{product.price}</Text> 
                    &&
                    <Text  className="sale">-{product.discount}%</Text> 
                    }
                                        
                </div>
                

            </div>
    </div>
  

        
        
    );
  }
 