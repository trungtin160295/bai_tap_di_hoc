import { Button } from 'reactstrap';




export default function Product( props) {  

   const product=props.products
   
        
    return (
        <div className="product">
            <div className="product-img">
            <a href="">
                <img src={product.linkImages.before} alt="Avatar" className="image hover1"/>
                <img src={product.linkImages.after} alt="Avatar" className="image hover2"/>
                <div className="size "> 
                <ul >
                {
                    product.listSize.map((size) =>{
                        return (<li key = {size.toString() }> <span>{size}</span></li>)
                    })
                }
                </ul>                                                           
                
            </div>
            </a>
           

            <span className="price"> Chỉ với {Math.round(product.price*(1-(product.sale/100))).toString().slice(0,-3)} K</span>
            <span className="attention ">Saving Packs</span>
            
            <div className="evaluate">
                <div>{product.rate} </div>
                <div><i className="fa-solid fa-star" style={{fontSize: "14px"}}></i></div>
                <div>({product.comment}) </div>               
               
                
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
                    <a href="">{product.ductName}</a>
                 
                </div>
                <div className="product-price">
                    <span style={{color : "red"}}> {product.price*(1-(product.sale/100))}</span>
                    <span style={{color : "rgba(0, 0, 0, 0.27)"}}> <strike>{product.price}</strike></span>
                    <span style={{color : "red"}}> -{product.sale}%</span>

                </div>

            </div>
        </div>
  

        </div>
        
    );
  }
 