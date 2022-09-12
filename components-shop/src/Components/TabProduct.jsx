import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Product from './Product';

const products = [
    {
        id:1,
        linkImages: { before: "https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/August2022/quickdry_box_2_new.jpg",
                        after: "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/quickdry_box_2_new_333.jpg" },
         rate:  4.9 ,
         comment: 400,
         ductName: "Áo Polo nam công nghệ khử mùi cao 1",
         price:300000,
         sale: 25,
         voucherCode: "XMDDDDDDDD",
        voucherValue: 30000,
        listSize :['S','M','L','XL','2XL'],
        listColor : ['màu 1','màu 2','màu 3','màu 4',]
    },
    {
        id:2,
        linkImages: { before: "https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/August2022/quickdry_box_2_new.jpg",
                        after: "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/quickdry_box_2_new_333.jpg" },
         rate:  4.9 ,
         comment: 400,
         ductName: "Áo Polo nam công nghệ khử mùi cao 2",
         price:300000,
         sale: 25,
         voucherCode: "XMDDDDDDDD",
        voucherValue: 30000,
        listSize :['S','M','L','XL','2XL'],
        listColor : ['màu 1','màu 2','màu 3','màu 4',]
    },
    {
        id:3,
        linkImages: { before: "https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/August2022/quickdry_box_2_new.jpg",
                        after: "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/quickdry_box_2_new_333.jpg" },
         rate:  4.9 ,
         comment: 400,
         ductName: "Áo Polo nam công nghệ khử mùi cao 3",
         price:300000,
         sale: 25,
         voucherCode: "XMDDDDDDDD",
        voucherValue: 30000,
        listSize :['S','M','L','XL','2XL'],
        listColor : ['màu 1','màu 2','màu 3','màu 4',]
    },
    {
        id:4,
        linkImages: { before: "https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=100/uploads/August2022/quickdry_box_2_new.jpg",
                        after: "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/quickdry_box_2_new_333.jpg" },
         rate:  4.9 ,
         comment: 400,
         ductName: "Áo Polo nam công nghệ khử mùi cao 4",
         price:300000,
         sale: 25,
         voucherCode: "XMDDDDDDDD",
        voucherValue: 30000,
        listSize :['S','M','L','XL','2XL'],
        listColor : ['màu 1','màu 2','màu 3','màu 4',]
    },
]


function TabsProduct() {
  const [key, setKey] = useState('Combo tiết kiệm');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
      
    >
      <Tab eventKey="Combo tiết kiệm" title="Combo tiết kiệm">
      <div className='tab-product'>
        {products.map( (product) =>{
            return(
                <div >
                    <Product products ={product} />
                </div>
                
            )
        })}
      </div>
      </Tab>
      <Tab eventKey="Mặc hàng ngày" title="Mặc hàng ngày">
      <div className='tab-product'>
        {products.map( (product) =>{
            return(
                <div >
                    <Product products ={product} />
                </div>
                
            )
        })}
      </div>
      </Tab>
      <Tab eventKey="Quần lót nam" title="Quần lót nam" >
      <div className='tab-product'>
        {products.map( (product) =>{
            return(
                <div >
                    <Product products ={product} />
                </div>
                
            )
        })}
      </div>
      </Tab>
      <Tab eventKey="Đồ thể thao" title="Đồ thể thao" >
        <div className='tab-product'>
            {products.map( (product) =>{
                return(
                    <div >
                        <Product products ={product} />
                    </div>
                    
                )
            })}
        </div>
      </Tab>
    </Tabs>
  );
}

export default  TabsProduct;