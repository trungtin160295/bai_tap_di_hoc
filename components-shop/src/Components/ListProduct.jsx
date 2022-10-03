
import '../style/ListProduct.scss'
import {Row,Col, } from 'react-bootstrap';
import Text from '../Components/Text';
import { useParams} from "react-router-dom";
import Product from './Product';
import useFetch from "../customize/fetch";
import { useState, useEffect } from 'react';

export default function ListProduct( props) { 
    
    const [listProducts, setListProducts] = useState([])

    const { data: dataProducts, isLoading }
    = useFetch(`http://localhost:3004/products`, false); 
    useEffect(() => {
        if(isLoading === false && dataProducts.length >0) {
            let listProducts =dataProducts.slice(0, 10);
            setListProducts(listProducts)
        }
    }, [dataProducts]);

    
    return (
        listProducts.length >0 &&
        <Row className='list-product' >
            {props.image ?
            <Col xxl={2} xl={3} lg={4}  md={6} className="collection-thumbnail">
                <img src={props.image} alt={props.image} />
            </Col>
            :null
            }
            
            {     
             listProducts.map( (product) =>{
                return(                 
                    <Col xxl={2} xl={3} lg={4}  md={6} className='product-child' key={product.id}>
                         <Product products ={product} />   
                    </Col>
                                                                           
                )
            })}
                                     
        </Row>
        
    )
 }
