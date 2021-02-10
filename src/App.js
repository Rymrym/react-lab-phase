import React from 'react'
import {Input} from 'reactstrap';
import { FaShoppingCart } from "react-icons/fa";
import ProductList from './components/ProductList';
import {BrowserRouter as Router,  Route} from'react-router-dom';
import ProductDetails from './components/ProductDetails';
import {useSelector, useDispatch} from 'react-redux';
import { searchProduct } from './redux/actions';

function App(props) {

  let productId = useSelector(state=>state.reducerCheckedProduct)
  let products = useSelector(state=>state.reducerProduct)
  let dispatch = useDispatch();
  const handleChange= (e)=>{
dispatch(searchProduct(e.target.value))
  }
  return (
    <Router>
    <div>
      <div style = {{height : '120px', boxShadow : '10px 5px 5px rgba(0, 0, 0, 0.05)', width : '100%', marginBottom:'50px'}}>
      <Input style = {{borderRadius : '10px', border : '1px solid rgba(0, 0, 0, 0.05)', height : '25px', width : '400px', marginTop: '20px'}} placeholder= "Search..." onChange = {handleChange}/>
      <label style = {{marginLeft : "800px", color:"orange"}}>Home</label>
      <label style = {{marginLeft : "50px", marginRight: "50px", color:"orange"}}>About</label>
      <FaShoppingCart style = {{color:"orange"}}/>
      </div>
      
   
   <Route exact path = "/" component={ProductList}/>
 
     
   
    </div>
  </Router>
  );
}


export default App;

