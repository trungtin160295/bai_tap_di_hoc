import { useParams } from "react-router-dom";
import { useState } from "react";
import ListProduct from "../Components/ListProduct";


import '../style/HomeUnderwear.scss';

const HomeUnderwear = () => {  
    let {title} = useParams();
    

      const  listFilter = ["Mới nhất","Bán chạy", "Giá thấp đến cao","Giá cao đến thấp"]
      const [filter,setFilter] =useState(listFilter[0])

    return (
    <>
        <div className="collections-filter">
            <h2>Sản phẩm :</h2>

            <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            
          >
            {listFilter.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

        </div>
        <div>
        <ListProduct imgFirst='https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/do-mac-nha-va-mac-trong.jpg'
                amount="6"/>
        </div>


    </>

    )
}
export  default HomeUnderwear;