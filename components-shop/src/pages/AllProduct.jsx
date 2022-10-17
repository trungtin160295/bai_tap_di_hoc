import ListProduct from "../Components/ListProduct";
import useFetch from "../customize/fetch";

import '../style/allProduct.scss'
export default function AllProduct () {    
    const { data: dataProducts, isLoading }
  = useFetch(`http://localhost:3004/products`, false); 

    const collectionsFilter=[
        {
            id:1,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip0_35.png"
        },
        {
            id:2,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip1_79.png"
        },
        {
            id:3,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip2_44.png"
        },
        {
            id:4,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip4_40.png"
        },
        {
            id:5,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip2_97.png"
        },
        {
            id:6,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip5_4.png"
        }
        
    ]

    const collectionsListing = [
        {
            id:1,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-short.jpg",
            title:"Quần Shorts"
        },
        {
            id:2,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-dai.jpg",
            title:"Quần dài"
        },
        {
            id:3,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-dai.jpg",
            title:"Áo Tanktop"
        },
        {
            id:4,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-lot.jpg",
            title:"Quần lót nam"
        },
        {
            id:5,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-lot.jpg",
            title:"Phụ kiện"
        },
        {
            id:6,
            linkImg:"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/quan-lot.jpg",
            title:"Phụ kiện"
        }
    ]

    

    return(
        <div className="collections">
            <div className="collections-filter">
                {collectionsFilter.map((item) => {
                    return(
                        <a href="#"><img src={item.linkImg} key={item.id} alt=""  /></a>
                    )
                })}
                
            
            </div>
            <hr />
            <div className="collections-listing">
                

            </div>
            
        </div>
    )
}   