 import SlideBanner from '../Components/SliderBanner'
 import TabsProduct from '../Components/TabProduct'
 import Card from '../Components/Card'
import Basic from '../Components/Basic'

 import Collection from '../Components/Collection'






 export default function Home(){
    const cleandenim ={
        linkImage:"https://mcdn.coolmate.me/image/August2022/mceclip0.jpg",
        title:"Coolmate's CLEAN DENIM",
        content:"Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng  và trồng bằng quy trình sạch, bền vững. Chiếc quần với vải Denim được dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex /- nhà máy với nhiều trang máy móc, thiết bị hiện đại với quy trình sản xuất khép kín, giảm thiểu CO2 và nước thải ra môi trường.",
        
    }

    const collections=[
        {title:"Đồ mặc trong",
        linkImg:"./src/img/mceclip0_43.jpg",
        id:1},
        {title:"Mặc hàng ngày",
        linkImg:"./src/img/mceclip0_99.jpg",
        id:2},
        {title:"Đồ thể thao",
        linkImg:"./src/img/mceclip1_56.jpg",
        id:3},
        {title:"Tất cả",
        linkImg:"./src/img/mceclip1_61.jpg",
        id:4},
    
    ]


    return(
        <>
            <SlideBanner/>
            <TabsProduct/>
            <Card obj={cleandenim} />
            <Card obj={cleandenim} right="false"/>    
            <Basic/>                    
            {
                <div className="collections">
                    {collections.map((collection) =>{
                        return(
                        <Collection collection={collection}/>
                    )
                    })}
                </div>
            }
            <Card obj={cleandenim}/>    
            <div className='marquee ' >
                <marquee>CoolClub - Ưu đãi nhiều hơn, mua sắm vui hơn. Nhận ngay ưu đãi 7% cho lần mua sắm tiếp theo</marquee>
             <a href="">Đăng nhập ngay</a>
            </div>       

           <div className='card-collections '>
            <div><a href=""><img src="https://mcdn.coolmate.me/uploads/November2021/image1_59.jpg" alt="" /></a></div>
            <div><a href=""><img src="https://mcdn.coolmate.me/uploads/November2021/image2.jpg" alt="" /></a></div>
            
           </div>


        </>

    )
 }