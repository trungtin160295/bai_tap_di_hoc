import React from 'react'
import '../style/productDetails.scss'

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

export default function Test() {
    const notify = () => toast("Wow so easy !");


  return (
   
         
    <div  className="buy-notice">
      <h5> Đã thêm sản phẩm vào giỏ !</h5>
      <hr />
      <div className="product-information ">
        <div className="product-img">
          <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/August2022/3536_57.jpg" alt="" />
        </div>
        <div className="information-content">
          <h5 className="product-title">
            Quần short nam thể thao Movement 7' co giãn - Xanh rêu
          </h5>
          <div className="information-buy">
            <div className="information-color-size">
              Đen / L
            </div>
            <div className="information-pice">
              <span className="pice">
                40000

              </span>
              <span className="cost">
              55555
              </span>

            </div>
          </div>

        </div>


      </div>
      <hr />
      <button className='see-cart'>
        Xem giỏ hàng 
      </button>

    </div>
   
  )
}
