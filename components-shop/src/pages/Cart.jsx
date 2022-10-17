
import {Row,Col } from 'react-bootstrap';
import {FormGroup,Label,Input} from'reactstrap';
import Login from '../Components/Login';
import { useForm } from 'react-hook-form';
import { useState ,useEffect} from 'react';
import { useSelector ,useDispatch} from "react-redux";
import { cartProductSelector } from "../redux/selectors";
import cartSlice from "../redux/sliceReducer/cartReducer";


import CartProductDetal from '../Components/CartProductDetal';


import '../style/cart.scss'

const Cart = () => {  
    
    

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const cartProduct = useSelector(cartProductSelector);
    const [sumMoney, setSumMoney] = useState()

    
    
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

    function sum (cartProduct){
        let sumMoney = 0;
        for (let i = 1; i < cartProduct.length; i++){
            
            sumMoney += Math.round(cartProduct[1].product.price*(1-(cartProduct[1].product.discount/100))*cartProduct[1].quantity);
        }
       
        return sumMoney;
    }

    useEffect(() => {
        
        setSumMoney(sum(cartProduct))
    },[cartProduct]) 

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
                    <button className='button-pay'> Thanh toán {sumMoney}</button>
                </Row>
            </Col>
            <Col  md={12} xl={5} className='cart-right'>
                <div className='title-cart'> Giỏ hàng của bạn</div>
                {cartProduct.length > 1 && 
                cartProduct.map((product) =>{
                    return(
                        <CartProductDetal product={product} key={product.id}/>
                    )
                })
                }
                
                <div className='bill'>
                    <hr />
                    <div className=' bill-child'>
                        <span>Tính tổng </span>
                        <span>{sumMoney}.000 đ</span>
                    </div>
                    <div className='bill-child'>
                        <span>Giảm giá</span>
                        <span>0 đ</span>
                        
                    </div>
                    <div className='bill-child'>
                        <span>Phí giao hàng</span>
                        <span>Miễn phí</span>
                        
                    </div>
                    <hr />
                    <div className='bill-child'>
                        <span>Tổng tiền thanh toán</span>
                        <span>{sumMoney}.000 đ</span>
                        
                    </div>

            </div>

                
            </Col>
            
        </Row>
    )
}
export default Cart