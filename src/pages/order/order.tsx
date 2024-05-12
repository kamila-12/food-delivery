import './order.css'
import React from 'react'

const order = () => {
  // const {getTotalAmount} = useContext(StoreContext)
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
            <h2>Cart total</h2>
            
            
        </div>




    </form>
  )
}

export default order
