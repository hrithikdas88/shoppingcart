import React from "react";
import './CatCard.scss'
import Rating from "../Rating/Rating";
import { CartState } from "../../context/Context";



function Catcard ({ item }) {

  const {state: {cart},dispatch} =CartState();





  return (
    <div className="Catcard">
     <img src={item.image} alt="" />
     <h4>{item.name}</h4>
      <p>Rs{item.price}</p> 
      <p>{item.fastDelivery}</p>
   
     
      <Rating  rating={item.ratings}/>
     

        {
          cart.some((p)=>p.id == item.id)?
          (<button className="remove-bt"
            onClick={()=>{
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload:item,
              });
            }}
          
          >Remove From Cart</button>):



          (<button  className="add-bt"
          onClick={()=>{
            dispatch({
              type: 'ADD_TO_CART',
              payload:item,
            });
          }}
          
          
          disabled={!item.inStock} >
            {!item.inStock ? "Out of Stock" : "Add to cart"}
           </button>)
        }
     
     
     
      </div>
    
  );
}

export default Catcard;