import React from 'react'
import {useSelector} from 'react-redux'
 const ProductDetails = (props)=>{
    const productId = parseInt(props.match.params.id)
const products = useSelector(state=>state.reducerProduct)
const product = products.find(item=>item.id===productId)
    return (
        <>
        <img src = {product.image}/>
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
        <p>Product description</p>        
        </>
    )
 }
 export default ProductDetails;