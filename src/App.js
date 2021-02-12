import React from 'react'
import {Input} from 'reactstrap';
import { FaShoppingCart } from "react-icons/fa";
import ProductList from './components/ProductList';
import {BrowserRouter as Router,  Route, Link} from'react-router-dom';
import ProductDetails from './components/ProductDetails';
import {useSelector, useDispatch} from 'react-redux';
import { searchProduct } from './redux/actions';
import Cart from './components/Cart';

function App(props) {

 // let productId = useSelector(state=>state.reducerCheckedProduct)
  let products = useSelector(state=>state.reducerProduct)
  let clicked = useSelector (state=>state.reducerClicked)
  let dispatch = useDispatch();
  const handleChange= (e)=>{
dispatch(searchProduct(e.target.value))
  }
  return (
    <Router>
    <div>
      <div style = {{height : '120px', boxShadow : '10px 5px 5px rgba(0, 0, 0, 0.05)', width : '100%', marginBottom:'50px'}}>
      <Input style = {{borderRadius : '10px', border : '1px solid rgba(0, 0, 0, 0.05)', height : '25px', width : '400px', marginTop: '20px'}} placeholder= "Search..." onChange = {handleChange}/>
      <Link to = "/" style = {{textDecoration: 'none'}}><label style = {{marginLeft : "800px", color:"orange"}}>Home</label></Link>
      <label style = {{marginLeft : "50px", marginRight: "50px", color:"orange"}}>About</label>
      <Link to = "/Cart"><FaShoppingCart color = {clicked ? "red" :"orange" }/></Link>
      </div>
      
   
   <Route exact path = "/" component={ProductList}/>
   <Route exact path = "/Cart" component={Cart}/>
   <Route path = "/Details/:id" component = {ProductDetails}/>
     
   
    </div>
  </Router>
  );
}


export default App;

