import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
        <tr className="items-info">
        <td className="product-img">
          <img src={img} alt="iamge" />
        </td>

        <td className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </td>

        <td className="add-minus-quantity">
          <i className="fa fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fa fa-plus add" onClick={() => increment(id)}></i>
        </td>

        <td className="price">
          <h3>{price}₹</h3>
        </td>

        <td className="remove-item">
          <i className="fa fa-trash btn btn-sm btn-danger remove"
            onClick={() => removeItem(id)}></i>
        </td>
        </tr>
    </>
  );
};

export default Items;
