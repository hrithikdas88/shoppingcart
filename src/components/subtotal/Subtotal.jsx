import React, { useEffect, useState } from 'react'
import { CartState } from '../../context/Context';
import "./Subtotal.scss";


const Subtotal = (item) => {
    const{state: {cart},dispatch}=CartState();


    const [total,setTotal]=useState()

    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price),0))
    },[cart])
  return (
    <div className='subtotal'>
   
   <div>Subtotal({cart.length}) items</div>
   <div>Total:{total}</div>
   <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal