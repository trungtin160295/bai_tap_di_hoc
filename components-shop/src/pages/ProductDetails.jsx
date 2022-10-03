
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useFetch from "../customize/fetch";

import '../style/ProductDetails.scss'
import {Row,Col, } from 'react-bootstrap';
import Text from '../Components/Text';
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";


const ProductDetails = () => {  
  let {id} = useParams();

  
  const { data: product, isLoading,imgProduct }
        = useFetch(`http://localhost:3004/products/${id}`, true); 
 
   
 
        
  
  
  const productPolicy =[
    { key:"1",
      icon:"https://www.coolmate.me/images/icons/icon3.svg",
      content:"Đổi trả cực dễ chỉ cần số điện thoại"
    },
    {key:"2",
      icon:"https://www.coolmate.me/images/icons/icon4.svg",
      content:"Miễn phí vận chuyển cho đơn hàng trên 200k"
    },
    {key:"3",
      icon:"https://www.coolmate.me/images/icons/icon5.svg",
      content:"60 ngày đổi trả vì bất kỳ lý do gì"
    },
    {key:"4",
      icon:"https://www.coolmate.me/images/icons/icon2.svg",
      content:"Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày"
    },
    {key:"5",
      icon:"https://www.coolmate.me/images/icons/icon1.svg",
      content:"Đến tận nơi nhận hàng trả,hoàn tiền trong 24h"
    },
    {key:"6",
      icon:"https://www.coolmate.me/images/icons/icon6.svg",
      content:"Giao hàng nhanh toàn quốc"
    },
  ]
           
  return (
    
       
  <div className="product-petails">
    {isLoading === false && product !=null && 
      <>
         <div  className="path">
          <Link to="/">Trang chủ /</Link>
          <Link to={`/${product.type}`}>{product.type}</Link>          
             
          </div>
          <div className="product-presented">
          
            
            <Row>
                <Col md={12} xl={6}  className="product-img">
                  
                    <ImageGallery items={imgProduct}   autoPlay="true"  />
                                
                </Col>
              <Col xs={12} xl={6} className="presented-information"> 
                
                      <h1 className="product-title">{product.ductName}</h1>
                      <div className="evaluate">                  
                        <span><i className="fa-solid fa-star star" ></i>({product.rate}) &nbsp;</span>
                        <span> Số lượng đã bán :  &nbsp;{product.comment} </span>
                      </div>
                      
                      <div className="product-price">
                        <Text className="price-discount">{product.price*(1-(product.discount/100))}đ &nbsp;</Text>  
                        <Text  className="price">{product.price}d &nbsp;</Text> 
                        <Text  className="product-discount">-{product.discount}%</Text>                     
                      </div>
                      { product.combo ? 
                        <span className="product-combo">
                          {product.combo}
                        </span>
                        : null}
                      { product.sale ? 
                        <Text className="product-sale">{product.sale}   </Text>
                        : null}
                      <div className="product-color">
                        <span>Màu sắc:</span>
                        <div className="product-listcolor">
                        {
                            product.listColor.map((color) =>{
                              return <span key={color}>{color}</span>
                            })
                        }
                        </div>                                                           
                      </div>
                      <div className="product-size">
                        <span>Kích thước :</span>
                        <div className="product-listsize">
                        {
                            product.listSize.map((size) =>{
                              return <span key={size}>{size}</span>
                            })
                        }
                        </div>                                                           
                      </div>
                      <div className="product-policy">
                        {
                          productPolicy.map((policy) =>{
                            return (
                              <div className="policy-item " key={policy.key}>
                                <div className="policy-icon">
                                  <img src={policy.icon} alt={policy.content} />
                                </div>
                                <span className="policy-content">{policy.content}</span>
                              </div>
                              
                            )
                          })
                        }           
    
    
    
                      </div>
                      { product.outstanding ? 
                        <div className="product.outstanding">
                        
                          <h5>Đặc điểm nổi bật:</h5>
                          <ul>
                            
                              {product.outstanding.map((item) =>{
                                return (<li key={item.key}>{item.content}</li>)
                              })}
                            
                          </ul>
    
                        </div>
                        : null
                      }
                        
                      
    
                      
                      
                
              </Col>
              
            </Row>
              
            
    
          
          </div>

           </>}
           {isLoading === true &&
              <span style={{ textAlign: "center", width: '100%' }}>Loading data...</span>
            }
          
  
  
    
    
        
    </div>
      
     
    
   
  )
};

  


export default ProductDetails;
