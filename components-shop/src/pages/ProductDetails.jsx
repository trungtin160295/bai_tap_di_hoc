
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
    console.log( "aa",imgProduct);
  //  const product={
  //   "id":8,
  //   "linkImages": [  "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_3.jpg",
  //                    "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_2.jpg",
  //                   "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_1.jpg",
  //                   "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/May2022/outdor23_4.jpg"
                    
  //               ],
  //    "rate":  4.9 ,
  //    "comment": 400,
  //    "ductName": "Áo Polo nam công nghệ khử mùi cao 4",
  //    "price":300000,
  //    "discount": 25,
  //    "voucherCode": "XMDDDDDDDD",
  //    "sale":"Ưu đãi sản phẩm mới 20-27/9",
  //    "combo":"Mua 3 được giảm thêm 5%",
  //   "voucherValue": 30000,
  //  "listSize" :["S","M","L","XL","2XL"],
  //  "listColor" : ["màu 1","màu 2","màu 3","màu 4"],
  //  "demand":"mặc hàng ngày",
  //  "category":"Áo nam",
  //  "type":"Áo tank top",
  //  "collection":"Proudly Vietnam",
  //  "technology":"Excool" ,
  //  "outstanding":[
  //       {
  //         "key" :"1",
  //         "content" :"Chất liệu: 100% Polyester kết hợp tính năng: Wicking (Thấm hút nhanh), 4-way Mechanical stretch (Co giãn 4 chiều) và Quick-Dry (Nhanh khô)."
  //       },
  //       {
  //         "key" :"2",
  //         "content" :"Vải siêu nhẹ chỉ 106 gsm, mang lại cảm giác mặc như không mặc."
  //       },
  //       {
  //         "key" :"3",
  //         "content" :"Công nghệ hoàn thiện vải giúp chiếc quần thoải mái, khô thoáng và dễ chịu tối đa cho các hoạt động chạy nhẹ và tập gym."
  //       },
  //       {
  //         "key" :"4",
  //         "content" :"Dệt kiểu Double Weaving mang lại cảm giác Cooling khi mặc."
  //       },
  //       {
  //         "key" :"5",
  //         "content" :"Có túi 2 bên đựng đồ cá nhân nhỏ gọn và tiện lợi."
  //       },
  //       {
  //         "key" :"6",
  //         "content" :"Vải được nhuộm bằng công nghệ Zero Water Discharge (Không nước thải) theo đuổi xu hướng yếu tố thời trang bền vững."
  //       },
  //       {
  //         "key" :"7",
  //         "content" :"Đơn vị sản xuất vải là Promax - đơn vị hàng đầu về sản xuất đồ thể thao trên thế giới"
  //       },
  //       {
  //         "key" :"8",
  //         "content" :"Tự hào sản xuất tại Việt Nam."
  //       }
  //  ]
  // }
  
  
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
          {isLoading === false && product && 
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
