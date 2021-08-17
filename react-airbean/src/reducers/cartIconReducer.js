const cartIconReducer = (state = 0, action) => {

    switch (action.type){
        case 'INCREASE_AMOUNT': 
        return state + 1
        case 'DECREASE_AMOUNT': 
        return state - 1
        case 'RESET_AMOUNT': 
        return state = 0
        default: 
        return state; 
    }
}

export default cartIconReducer; 