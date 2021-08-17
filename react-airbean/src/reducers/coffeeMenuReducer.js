const coffeeMenuReducer = (state = {}, action) => {
    switch (action.type) {
      case 'COFFEE_MENU':
        return action.payLoad;
      default:
        return state;
    }
}

export default coffeeMenuReducer;