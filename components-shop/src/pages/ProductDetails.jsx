
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useFetch from "../customize/fetch";
import { useState, useEffect } from 'react';
import '../style/ProductDetails.scss'
import {Row,Col, } from 'react-bootstrap';
import Text from '../Components/Text';




const ProductDetails = () => {  
  
  const { data: product, isLoading, isError,imgProduct }
        = useFetch(`http://localhost:3004/products/1`, true); 
   
 
  
  
  const productPolicy =[
    { key:"1",
      icon:"./src/img/iconPolicy/doi-tra.svg",
      content:"Đổi trả cực dễ chỉ cần số điện thoại"
    },
    {key:"2",
      icon:"./src/img/iconPolicy/van-chuyen.svg",
      content:"Miễn phí vận chuyển cho đơn hàng trên 200k"
    },
    {key:"3",
      icon:"./src/img/iconPolicy/doi-tra-60.svg",
      content:"60 ngày đổi trả vì bất kỳ lý do gì"
    },
    {key:"4",
      icon:"./src/img/iconPolicy/hotline.svg",
      content:"Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày"
    },
    {key:"5",
      icon:"./src/img/iconPolicy/hoan-tien.svg",
      content:"Đến tận nơi nhận hàng trả,hoàn tiền trong 24h"
    },
    {key:"6",
      icon:"./src/img/iconPolicy/giao-hang.svg",
      content:"Giao hàng nhanh toàn quốc"
    },
  ]
           
  return (
    
       
    <main className="product-petails">
          {isLoading === false && product !=null && 
            <>
                <div  className="path">
            Trang chủ / {product.type}
          </div>
          <div className="product-presented">
          
            
            <Row>
                <Col xs={12} xl={6}>
                  <div >
                    <ImageGallery items={imgProduct}   autoPlay="true"  />
                  </div>               
                </Col>
              <Col xs={12} xl={6}> 
                <div className="presented-information">
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
                        
                      
    
                      
                      
                </div>
              </Col>
              
            </Row>
              
            
    
          
          </div>

           </>}
           {isLoading === true &&
              <span style={{ textAlign: "center", width: '100%' }}>Loading data...</span>
            }
          
  
  
    
    
        
    </main>
      
     
    
   
  )
};

  


export default ProductDetails;
