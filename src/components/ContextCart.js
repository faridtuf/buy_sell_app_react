import React, { useContext } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import arrow from "../images/arrow.png";
const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
        <>
          <header>
            <div className="continue-shopping">
              <i className="fa fa-arrow-left"></i>
              <h3>continue shopping</h3>
            </div>

            <div className="cart-icon">
              <i className="fa fa-shopping-cart"></i>
              <p>{totalItem}</p>
            </div>
          </header>

          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItem} </span>{" "}
              items in shopping cart
            </p>
          </section>
        </>
    );
  }

  return (
      <>
        <header>
          <div className="continue-shopping">
            <div className="card cart-checkout">
              <div className="card-body">
                <i className="fa fa-angle-right me-3"></i>
                <i className="fa fa-home me-1"></i>
                <a href="#" className="me-3">Home</a>
                <i className="fa fa-angle-right me-1"></i>
                <a href="#" className="me-3">My Sales Basket</a>
                <i className="fa fa-angle-right me-1"></i>
                <a href="#">Checkout</a>
              </div>
            </div>
          </div>

          <div className="cart-icon">
            <i className="fa fa-shopping-cart"></i>
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span> items
            in shopping cart
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* <Scrollbars> */}
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                  {/* </Scrollbars> */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-total">
              <table className="table table-bordered">
                <tr>
                  <td>
                    <h3>
                      <span>Total :</span>{totalAmount}₹
                    </h3>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="card-total">

            <button className="btn btn-sm btn-success">checkout</button>
            <button className="btn btn-sm btn-primary ms-2" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </section>
      </>
  );
};

export default ContextCart;
