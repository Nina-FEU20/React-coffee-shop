import React from 'react'; 
import { useSelector, useDispatch } from "react-redux";
//styles
import Styles from './cart.module.css'
//svg 
import arrowUp from '../../assets/graphics/arrow-up.svg'
import arrowDown from '../../assets/graphics/arrow-down.svg'
// components
import Menu from '../Menu/Menu'
// Redux - importing actions
import { userCartIncrementQuantityAction,  
    userCartDecrementQuantityAction, 
    increaseHowManyItemsInCartAction, 
    decreaseHowManyItemsInCartAction, 
    userCartDeleteItemAction } from '../../actions/index';

//router 
import {useHistory} from 'react-router-dom'
//icons
import CartIcon from '../Icons/CartIcon'
// import for framer-motion animation 
import { motion, AnimateSharedLayout } from "framer-motion";
import { cartSliderAnim } from '../../animation'; 


function Cart(){
    const dispatch = useDispatch();
    const history = useHistory();
    // Retrieving redux state for cart
    const userCart = useSelector(state => state.userCart)

    // Counting the total price for all products in cart
    function totalPrice(){
        if (userCart.length !== 0) {
            return userCart.map((item) => item.price * item.quantity).reduce((acc, curr) => acc + curr); 
        }     
    }

    function handleIncrease(item){
        // Incrementing the items quantity with one
        dispatch(userCartIncrementQuantityAction(item))
        // Incrementing the total items in cart with one
        dispatch(increaseHowManyItemsInCartAction())
    }

    function handleDecrease(item){
        // Decrementing the items quantity with one
        dispatch(userCartDecrementQuantityAction(item))
        // Decrementing the total items in cart with one
        dispatch(decreaseHowManyItemsInCartAction())

        if (item.quantity === 0){
            // Removing the item from the cart
            dispatch(userCartDeleteItemAction(item))
        }
    }

    function saveInLocalStorage(){
        // Saving our userCart to LocaleStorage
        localStorage.setItem("userCart", JSON.stringify(userCart))
        history.push("/menu")
    }
  
    return(
        <div className={Styles.mainContainer}>
            <Menu />
            <motion.div className={Styles.shadow} variants={cartSliderAnim} initial="hidden" animate="show" exit="out">
                <div className={Styles.triangle}></div>
                <div className="cartIcon" onClick={() => history.push('/menu')}>
                    <CartIcon />
                </div>
                <AnimateSharedLayout>
                    <motion.div layout className={Styles.cartContainer}>
                        <h1 className={Styles.title}>Din beställning</h1>
                        { (userCart.length === 0) ? 
                        <div className={Styles.emptyMessage}>
                            <h2>Din varukorg är tom</h2>
                            <p>Stäng ner varukorgen för att</p>
                            <p>gå tillbaka till menyn.</p>
                        </div>
                        : 
                        <>
                            <div className={Styles.itemList}>
                            { userCart.map((item) => {
                            return (
                                <motion.section layout className={Styles.cartItems} key={item.id}>
                                    <div className={Styles.titleContainer}>
                                        <h3>{item.title}</h3>
                                        <div className={Styles.border}>.............................................</div>
                                        <p className={Styles.price}>{item.price * item.quantity} kr</p>
                                    </div>
                                    <div className={Styles.quantityContainer}>
                                        <motion.img src={arrowUp} alt="arrow up" onClick={() => handleIncrease(item)} whileTap={{ scale: 1.2 }}/>
                                        <p>{item.quantity}</p>
                                        <motion.img src={arrowDown} alt="arrow down" onClick={() => handleDecrease(item)} whileTap={{ scale: 1.2 }}/>
                                    </div>
                                </motion.section> )})}
                            </div> 
                            <motion.section layout className={Styles.buyContainer}>
                                <div className={Styles.totalContainer}> 
                                    <div className={Styles.totalSubContainer}>
                                        <h2>Total</h2>
                                        <div className={`${Styles.border} ${Styles.borderBottom}`}>........................................</div>
                                    </div>  
                                    <h2>{totalPrice()} kr</h2>
                                </div>  
                                <p className={Styles.deliveryText}>Inkl moms + drönarleverans</p>
                                <div className={Styles.btnContainer}>
                                    <motion.button onClick={ () => history.push('/status') } whileHover={{ scale: 1.02 }}>Take my money!</motion.button>
                                    <p className={Styles.btnText}>Not ready to order yet?</p>
                                    <motion.button className={Styles.saveBtn} onClick={ saveInLocalStorage } whileHover={{ scale: 1.03 }}>Save for later!</motion.button>
                                </div>
                            </motion.section> 
                        </> }
                    </motion.div>
                </AnimateSharedLayout>
            </motion.div>
        </div>
    )
}

export default Cart; 