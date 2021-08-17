import React from 'react'; 
// styles
import Styles from './icons.module.css'
//svg
import cart from  "../../assets/graphics/bag.svg"
// router
import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

function CartIcon(){
    const history = useHistory(); 
    const itemsInCart = useSelector(state => state.cartIconAmount)

    return(
        <>
            <div className={Styles.cartContainer} onClick={() => history.push('./cart')}>
                <img className={Styles.cartIcon} src={cart} alt="cart"/>
            </div>
            <div className={Styles.orangeCircle}>
                <p className={Styles.num}>{itemsInCart}</p>
            </div>
        </>    
    )
}

export default CartIcon; 