export const coffeeMenuAction = (data) => {
    return {
        type: 'COFFEE_MENU',
        payLoad: data
    }
}

export const toggleNavAction = (data) => {
    return {
        type: 'TOGGLE_NAV',
        payLoad: data
    }
}

export const userCartAddItemAction = (data) => {
    return {
        type: 'ADD_ITEM',
        payLoad: data
    }
}

export const userCartIncrementQuantityAction = (data) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payLoad: data
    }
}
export const userCartDecrementQuantityAction = (data) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payLoad: data
    }
}

export const userCartDeleteItemAction = (data) => {
    return {
        type: 'DELETE_ITEM',
        payLoad: data
    }
}

// Nina

// increment num of items in cart
export const increaseHowManyItemsInCartAction = (data) => {
    return {
        type: 'INCREASE_AMOUNT', 
        payLoad: data
    }
}

// decrement num of items in cart
export const decreaseHowManyItemsInCartAction = (data) => {
    return {
        type: 'DECREASE_AMOUNT', 
        payLoad: data
    }
}

/******************* new ****************/

// reset items in cart back to 0
export const resetHowManyItemsInCartAction = (data) => {
    return {
        type: 'RESET_AMOUNT', 
        payLoad: data
    }
}

// action to push everything from localstorage to redux
export const userCartGetLocalStorageAction = (data) => {
    return {
        type: 'ADD_LOCALSTORAGE',
        payLoad: data
    }
}

// action to delete everything from userCart
export const userCartDeleteAllAction = (data) => {
    return {
        type: 'DELETE_USERCART', 
        payLoad: data
    }
}