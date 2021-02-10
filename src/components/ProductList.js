import React from 'react'
import Product from './Product'
import {BrowserRouter as Router, Link} from'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

 const ProductList = ()=>{
    let products = useSelector(state=>state.reducerProduct)
    // let products = useSelector(state=>state)
    // console.log(products+"ttttttttttttt")
  /*  let productsList =  useSelector(state=>state)
    let dispatch = useDispatch();*/
    return (
        <div style = {{display : 'flex', alignItems:'flex-start'}}>
        {products.map(product => <Product name = {product.name} price = {product.price} id = {product.id} image = {product.image}/>)}     
     <Product/>         
        </div>
    )
 }
 export default ProductList;