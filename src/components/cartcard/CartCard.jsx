import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../../context/Context';
import { Link } from 'react-router-dom';

import "./CartCard.scss"
const CartCard = () => {
  
  const {state: {cart},dispatch} =CartState();



  return (
    <div className='CartCard'>
     {cart.length>0 ? (
       <>
       {cart.map((item)=>(
        <>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
        <span>{item.name}</span>
        <img src={item.image} alt="" />
        <AiFillDelete
         fontSize="20px"
         style={{cursor:"pointer"}}
         onClick={()=>
        dispatch({
          type: "REMOVE_FROM_CART",
          payload:item,
        })
        
        }
        
        
        />
        </div>
        </>
       ))}
       
       <Link to="/cart">
        <button>Go To Cart</button>
       </Link>
       </>
     ): ("Empty!")}
    </div>
  )
}

export default CartCard