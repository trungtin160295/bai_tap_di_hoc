import React, { useState } from 'react';
import useFetch from '../customize/fetch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Product from './Product';


import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'





function TabsProduct() {
    const { data: titleTabs, isLoading}
    = useFetch(`http://localhost:3004/homeProducts`, false);    
    const [key, setKey] = useState("");
    {titleTabs !=null && key ==="" && setKey(`${titleTabs[0].title}`)}

    
    
    const handleOnDragStart = (e) => e.preventDefault()
      
    const responsive = {
        0: { items: 3 },
        568: { items: 5 },
        1024: { items: 6 },
        1520: {items: 6 }
    };
    
  return (

    <>
        {isLoading === false && titleTabs !=null &&
        
    
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 "
      
    >
        {
            titleTabs.map((item) =>{
                
                return (
                    
                    <Tab eventKey={item.title ? item.title :item.conten } title={item.title ? item.title : item.conten } key={item.id}>
                        <div className='tab-product'>                           
                            { 
                             <>           
                                 
                            <Slider
                                dots={false}
                                slidesToShow={6}
                                slidesToScroll={2}
                                autoplay={true}
                                autoplaySpeed={3000}
      
                            >
                                {item.products.map( (product) =>{
                                return(
                                    <div key={product.id}>
                                        <Product products ={product} />
                                    </div>
                                    
                                )
                            })}
                            </Slider>

                            
                            {/* <AliceCarousel                                                       

                                mouseTracking                            
                                responsive={responsive}
                                controlsStrategy="alternate"
                                autoWidth
                             
                            >
                                {item.products.map( (product) =>{
                                 return(
                                     <div key={product.id}  >
                                         <Product products ={product} />
                                    </div>
                                    
                              )})}
                            </AliceCarousel> */}
                            
                        
                            </> }
                    
                        </div>
                    </Tab>
                    
                    
                
                )

            })
            
        }
      
      
      
      
        </Tabs>}

    </>
    
  );
}

export default  TabsProduct;