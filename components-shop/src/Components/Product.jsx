import { Button } from 'reactstrap';




export default function Product() {  

    const product = {
        id:1,
        linkImages: { before: "https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/August2022/quickdry_box_2_new.jpg",
                        after: "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/quickdry_box_2_new_333.jpg" },
         rate:  4.9 ,
         comment: 400,
         ductName: "quan lot nam",
         price:300000,
         sale: 25,
         voucherCode: "XMDDDDDDDD",
        voucherValue: 30000,
        listSize :['S','M','L','XL','2XL'],
        listColor : ['màu 1','màu 2','màu 3','màu 4',]
    


    }
     const a = Math.round(product.price*(1-(product.sale/100))).toString().slice(0,-3)
     console.log(a);
   
        
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
                    <span>{product.ductName}</span>
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
 