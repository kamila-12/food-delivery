import './order.css';
import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder: React.FC = () => {
  const context = useContext(StoreContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { getTotalCartAmount } = context;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">FILL IN THE DETAIL FOR DELIVERY</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Phone'/>
        <input type="text" placeholder='Address'/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;


// import './order.css'
// import React from 'react'
// import {  useContext  } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// const PlaceOrder = () => {
//   const {getTotalAmount} = useContext(StoreContext)
//   return (
//     <form className='place-order'>
//         <div className="place-order-left">
//             <p className="title">FILL IN THE DETAIL FOR DELIVERY</p>
//              <div className="multi-fields">

//                 <input type="text" placeholder='First Name' />
//                 <input type="text" placeholder='Last Name' />
            
//              </div>
//              <input type="text" placeholder='Phone'/>
//              <input type="text" placeholder='Address'/>
//         </div>
//         <div className="place-order-right">
//         <div className="cart-total">
//         <h2>Cart Totals</h2>
//                     <div>
//                         <div className="cart-total-details">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <p>Delivery Fee</p>
//                             <p>${getTotalCartAmount()===0?0:2}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <b>Total</b>
//                             <b>${getTotalCartAmount() ===0?0:getTotalCartAmount() + 2}</b>
//                         </div>
//                     </div>
//                     <button>PROCEED TO PAYMENT</button>
//                 </div>
//         </div>

//     </form>
//   )
// }

// export default PlaceOrder
