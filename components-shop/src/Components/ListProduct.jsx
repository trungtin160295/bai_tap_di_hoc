
import '../style/ListProduct.scss'
import {Row,Col, } from 'react-bootstrap';
import Text from '../Components/Text';
import { useParams} from "react-router-dom";
import Product from './Product';
import useFetch from "../customize/fetch";

export default function ListProduct( props) { 

    const { data: products, isLoading }
    = useFetch(`http://localhost:3004/products`, false); 
    return (
        isLoading === false && products !=null && 
        <Row className='list-product' >
            {     
             products.map( (product) =>{
                return(                 
                    <Col xxl={2} xl={3} lg={4}  md={6} className='product-child'>
                         <Product products ={product} />   
                    </Col>
                                                                           
                )
            })}
                                     
        </Row>
    )
 }
