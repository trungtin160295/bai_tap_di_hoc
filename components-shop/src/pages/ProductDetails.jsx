
import React from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useFetch from "../customize/fetch";
import { useState, useEffect } from 'react';
import '../style/ProductDetails.scss'
import {Row,Col, Container} from 'react-bootstrap';


const ProductDetails = () => {   
   const product={
    "id":8,
    "linkImages": [  "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_3.jpg",
                     "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_2.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_1.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_4.jpg"
                ],
     "rate":  4.9 ,
     "comment": 400,
     "ductName": "Áo Polo nam công nghệ khử mùi cao 4",
     "price":300000,
     "discount": 25,
     "voucherCode": "XMDDDDDDDD",
     "sale":"Ưu đãi sản phẩm mới 20-27/9",
     "combo":"Mua 3 được giảm thêm 5%",
    "voucherValue": 30000,
   " listSize" :["S","M","L","XL","2XL"],
   " listColor" : ["màu 1","màu 2","màu 3","màu 4"],
   "demand":"mặc hàng ngày",
   "category":"Áo nam",
   "type":"Áo tank top",
   "collection":"Proudly Vietnam",
   "technology":"Excool"  
}
  
 
  
    const imgProduct = product.linkImages.map((item) => {
      return { original: item,
          thumbnail: item ,
          originalWidth:"500px",
          fullscreen:"fase",
          

        };
   });
    
  
  console.log("aaaaa", imgProduct);
  return (
    <main className="product-petails">
      <div  className="path">
        Trang chủ / {product.type}
      </div>
      <div className="present">
      
       
          <Row>
           <Col xs={12} xl={6}>
            <ImageGallery items={imgProduct}   autoPlay="true"  originalHeight ="100%" sizes={{ width:"100%"}}/>
            </Col>
          <Col xs={12} xl={6}> 
            <span>Quần Short Nam New French Terry V2 (thêu logo)</span>
          </Col>
          
                </Row>
          
        

      
      </div>


  
 
     
  </main>
    
  )
};

  


export default ProductDetails;
