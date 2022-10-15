
import {Row,Col } from 'react-bootstrap';
import {FormGroup,Label,Input} from'reactstrap';
import Login from '../Components/Login';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { cartProductSelector } from "../redux/selectors";


import '../style/Cart.scss'

const Cart = () => {  
    const product = {
        color:"màu 2",
        size:"XL",
        quantity:3,
        product:{
            "id":1,
            "linkImages": [ "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/September2022/combo-3_49.jpg",
                            "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/September2022/139-1.jpg",
                            "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/September2022/Untitled-3_45.jpg",
                            "https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/September2022/139-6.jpg"
                            ],                         
            "rate":  3.9 ,
            "comment": 400,
            "ductName": "Combo 03 Quần lót Trunk Pima Cotton thấm hút tốt - Xanh Navy",
            "price":299000,
            "discount": "",
            "voucherCode": "",
            "sale":"",
            "combo":"",
            "attention": "New" ,
            "voucherValue": "",
            "listSize" :["S","M","L","XL","2XL"],
            "listColor" : ["màu 1","màu 2","màu 3","màu 4"],
            "demand":"Mặc-nhà-&-Mặc-trong",
            "category":"Quần-Lót-Nam",
            "type":"Quần-Trunk-(Boxer)",
            "collection":"",
            "technology":"",
            "date":"2011-11-14",
            "outstanding":
                [
                        {
                            "key" :"1",
                            "content" :"Chất liệu 92% sợi Pima Cotton, 8% Spandex với khả năng hút ẩm và giữ màu tốt."
                        },
                        {
                            "key" :"2",
                            "content" :"Cotton Pima có độ dài hơn 50% so với cotton thông thường, nên sẽ tạo sự mềm mại, ít xù lông, bền và chắc chắn hơn so với cotton thường."
                        },
                        {
                            "key" :"3",
                            "content" :"Đai lưng được dệt bằng công nghệ mới nhất hiện tại, đem đến cảm giác co giãn siêu tốt, mềm mượt không vết hằn."
                        },
                        {
                            "key" :"4",
                            "content" :"An toàn, không gây kích ứng da."
                        },
                        {
                            "key" :"5",
                            "content" :"Sản xuất tại xưởng 10 năm kinh nghiệm tại TP Hồ Chí Minh."
                        },
                        {
                            "key" :"6",
                            "content" :"Tự hào sản xuất tại Việt Nam."
                    }
                ]
                        
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const CartProduct = useSelector(cartProductSelector);
    

    
    
    const listPayments=[
        {
            id:1,
            name:"COD",
            content:["COD","Thanh toán khi nhận hàng"],
            linkImg:"https://www.coolmate.me/images/COD.svg"
        },
        {
            id:2,
            name:"MoMo",
            content:["Thanh Toán MoMo"],
            linkImg:"https://www.coolmate.me/images/momo-icon.png"
        },
        {
            id:3,
            name:"ZaloPay",
            content:["Ví điện tử ZaloPay"],
            linkImg:"https://www.coolmate.me/images/logo-zalopay.svg"
        },
        {
            id:4,
            name:"ShopeePay",
            content:["Ví điện tử ZaloPay"],
            sale:"Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay",
            linkImg:"https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png"
        },
        {
            id:5,
            name:"VNPAY",
            content:["Thẻ ATM / Internet Banking","Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)","VNPay QR"],
            linkImg:"https://www.coolmate.me/images/vnpay.png"
        },
        {
            id:6,
            name:"9PAY",
            content:["Ví điện tử 9Pay"],
            linkImg:"https://mcdn.coolmate.me/uploads/May2022/9pay.svg"
        }
    ]

    
    function Payments({payment}){
        return(
            <FormGroup check className='payments-child'>
            <Label check className='check-input'>
            <input  type="radio" name="radio1" />
            <div className='payments-child-conten'>
                <img src={payment.linkImg} alt= {payment.content} className='img-check'/>
                <div className='payments-content'>
                {payment.content.map((item) =>{
                    return <div className='payments-title' key={item}>{item}</div>
                })}
                {payment.sale?<i>{payment.sale}</i>:null}
                </div>
            </div>
            </Label>
         </FormGroup>  
        )}
    function DetaillProduct({product}){
        const [quantity, setQuantity] = useState(product.quantity)
        const [color, setColor] = useState(product.color)
        const [size, setSize] = useState(product.size)
        const updateQuantity = (type) => {
            if (type === 'plus') {
                setQuantity(quantity + 1)
            } else {
                setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
            }
    }
        return(
            <Row className='product-cart-detail'>
                    <Col md={12} xl={4}  className='product-img'>
                        <img src={product.product.linkImages[1]} alt={product.product.ductName} />
                    </Col>
                    <Col md={12} xl={8}  className='product-detail-right'>
                        <div className='product-detail-top'>
                            <div className='product-detail-name'>
                                {product.product.ductName}
                            </div>
                            <span>X</span>
                            <div className='product-detail-selected'>
                                <i>{color} / {size}</i>
                            </div>
                        </div>
                        <div className='product-detail-bottom'>
                            <div className='select-color-size'>
                                <select
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className='select'
                                >
                                    {product.product.listColor.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <select
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className='select'
                                >
                                    {product.product.listSize.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='quantity-price'>
                                <div className="product-quantity-change">
                                    <button className="product-quantity-down" onClick={() => updateQuantity('minus')}>
                                    -
                                    </button>
                                    <span className="quantity-buy">
                                        {quantity}
                                    </span>
                                    <button className="product-quantity-up" onClick={() => updateQuantity('plus')}>
                                        +
                                    </button>
                                </div>
                                <div className='price'>
                                    <span>000000</span>
                                    <i><strike>22222</strike> </i>
                                </div>
                            </div>
                        </div>
                        

                    </Col>
                </Row>
        )
    }



    return(
        <Row className="cart-product">
            <Col  md={12} xl={7}  className='cart-left'>
                <Row className='shipping-information'>
                    <Col  className='title-shipping'>
                        Thông tin vận chuyển
                    </Col>
                    <Col  className='title-shipping--right'>
                    <span>Bạn đã có tài khoản ?</span>
                    <Login/>
                    </Col>
                </Row>
                <Row >
                    <Col md={12} xl={6} > 
                        <input type="text" placeholder="Họ và tên"  className='buyer-information'/>
                    </Col>
                    <Col md={12} xl={6} >
                        <input type="text" placeholder="Số điện thoại" {...register("Mobile number", {required: true, minLength: 9, maxLength: 12})}  className='buyer-information'/>
                    </Col>
                </Row>
                <Row>
                    <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}  className='buyer-information more'/>
                </Row>                
                <Row>
                    <input type="text" placeholder="Địa chỉ"  className='buyer-information more'/>
                </Row>
                <Row>
                    <input type="text" placeholder="Chú ý (Ví dụ:Giao hàng giờ hành chính)"  className='buyer-information more'/>
                </Row>
                <FormGroup tag="fieldset">
                <legend className='title-pay'>Hình thức thanh toán</legend>
                {listPayments.map((payment) =>{
                return (
                    <Payments payment={payment} key={payment.id} />
                )
                })}
                </FormGroup>
                <Row>
                    <button className='button-pay'> Thanh toán</button>
                </Row>
            </Col>
            <Col  md={12} xl={5} className='cart-right'>
                <div className='title-cart'> Giỏ hàng của bạn</div>
                {CartProduct.length > 0 && 
                CartProduct.map((product) =>{
                    return(
                        <DetaillProduct product={product}/>
                    )
                })
                }
                
                <div className='bill'>
                    <hr />
                    <div className=' bill-child'>
                        <span>Tạm tính</span>
                        <span>253366</span>
                    </div>
                    <div className='bill-child'>
                        <span>Giảm giá</span>
                        <span>253366</span>
                        
                    </div>
                    <div className='bill-child'>
                        <span>Phí giao hàng</span>
                        <span>253366</span>
                        
                    </div>
                    <hr />
                    <div className='bill-child'>
                        <span>Tổng tiền thanh toán</span>
                        <span>253366</span>
                        
                    </div>

            </div>

                
            </Col>
            
        </Row>
    )
}
export default Cart