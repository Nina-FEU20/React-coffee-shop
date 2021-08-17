const userCartReducer = (state = [], action) => {
    const userCart = [...state]
    
    switch (action.type) {
      case 'ADD_ITEM':
        // Adding action.payLoad to the array.
        userCart.push(action.payLoad);
        // Adding property 'quantity' with a value of 1.
        userCart[userCart.indexOf(action.payLoad)]['quantity'] = 1;
        return userCart;
      case 'INCREMENT_QUANTITY':
        // Adding 1 to the value of property 'quantity'.
        userCart[userCart.indexOf(action.payLoad)]['quantity']++;
        return userCart
      case 'DECREMENT_QUANTITY':
        // Removing 1 from the value of property 'quantity'.
        userCart[userCart.indexOf(action.payLoad)]['quantity']--;
        return userCart
      case  'DELETE_ITEM':
        // Removing action.payLoad from the array.
        userCart.splice(userCart.indexOf(action.payLoad), 1);
        return userCart
        // For LocalStorage
      case 'ADD_LOCALSTORAGE': 
      // Adding action.payLoad to the array.
        userCart.push(action.payLoad)
        return userCart
      case 'DELETE_USERCART': 
        // empty state
        return state = [] 
      default:
        return userCart;
    }
}

export default userCartReducer;