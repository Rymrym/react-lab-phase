import React from 'react'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from'react-router-dom';
import {browserHistory} from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import {setProduct} from '../redux/actions'
import ProductDetails from './ProductDetails'
 const Product = (props)=>{
     let checkedItem = useSelector(state=>state.reducerCheckedProduct)
     let products = useSelector(state=>state.reducerProduct)
     let dispatch = useDispatch();
const handleClick=(props) => {
    dispatch(setProduct(props.id))
    browserHistory.push("/Details")
}
    return (
        
    <>
   <Router>
        
<div style = {{border : '1px solid rgba(0, 0, 0, 0.05)', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)', height : '300px', width : '250px', borderRadius : '8px', marginRight : '20px'}}>
    <img src = {props.image} style = {{display : 'block', marginLeft: 'auto', marginRight: 'auto', height : '200px', width : '250px'}}></img>
   <div style = {{marginBottom: '0%', height : '100px'}}> 
  <div style = {{display : 'flex', alignItems: 'center'}}><h5>{props.name}</h5> <h6 style = {{marginLeft: '100px'}}>{props.price}</h6>
    </div>
  
  
    <Router>
            <Link to={`/Details/${props.id}`} className="btn btn-primary btn-movie">
               More
                <i class="fas fa-chevron-right"></i>
            </Link>
        </Router>
  
    </div>
</div>

<Route path = "/Details/:id" component = {ProductDetails}/>
  </Router> 
        </>
      
    )
 }
 export default Product;