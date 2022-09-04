import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  
} from 'reactstrap';


const listPolicy =[
        "Miễn phí vận chuyển  cho đơn hàng trên 200k",
        "60 ngày đổi trả bất kỳ lí do nào",
        "Đến tận nơi nhận hàng trả và hoàn tiền trong 24h"
]

const items = [
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/August2022/COMBO-GIAM-GIA---T7_15.jpeg',
      
      key: 1,
    },
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Banner-Coolmate-Active-opt-1.jpeg',
      
      key: 2,
    },
    {
      src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/August2022/Banner-CXp-2.jpeg',
      
      key: 3,
    },
    {
        src: 'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100/uploads/July2022/Excool-Banner-website.jpeg',
        
        key: 4,
      },
  ];

export default function SliderBanner(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <div className='slide'>
        <div >
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                cssModule={ {bottom: "0" }}
            
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
               
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
            </Carousel>

        </div>
        <div className='policy'>
            {

                listPolicy.map((policy) => {
                    return (<span key={policy.toString()}>{policy}</span> )
                   
                })
            }
        </div>
       
    </div>
    
  );
}


