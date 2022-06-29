import { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      const updatedCartItems = state.items.concat(action.item);
      console.log(updatedCartItems)
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedCartItems,
        totalAmount: updatedTotalAmount
      }

  }
  return defaultCartState
}


const CartProvider  = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD_ITEM', item})
  };

  const removeItemFromCartHandler = id => {}

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
};

export default CartProvider;