import { useContext } from 'react';
import CartContext from '../../store/cart_context';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems =<ul className='={classes[cart-item]}'>{
    cartCtx.items.map(item => { return <li key={item.id}>{item.name}</li> })}
    </ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;