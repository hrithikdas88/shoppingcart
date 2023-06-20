import React from "react";
import { CartState } from "../../context/Context";
import "./Cart.scss";
import Rating from "../../components/Rating/Rating";
import Subtotal from "../../components/subtotal/Subtotal";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="cart">
      <div className="container">
        <div className="title">
          <h1>Shopping Cart</h1>
        </div>
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>

          {cart.map((item) => (
            <tr>
              <td>
                <img src={item.image} style={{ width: "30%" }} />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Rating rating={item.ratings} />
              </td>
              <td>
                <select
                  value={item.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: item.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(item.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </td>
              <td>
                <AiFillDelete
                  fontSize="20px"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    })
                  }
                />
              </td>
            </tr>
          ))}
        </table>
      </div>

      <Subtotal />
    </div>
  );
};

export default Cart;
