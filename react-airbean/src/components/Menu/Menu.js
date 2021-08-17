import React from 'react'; 
// redux
import { useSelector, useDispatch } from "react-redux";
// components
import MenuItem from './MenuItem'
// Importing actions
import { userCartAddItemAction, 
    userCartIncrementQuantityAction, 
    increaseHowManyItemsInCartAction } from  '../../actions/index';
//styles
import Styles from './menu.module.css'
// svg
import graphicsHeader from  "../../assets/graphics/graphics-header.svg"
import graphicsFooter from '../../assets/graphics/graphics-footer.svg'
// icons
import HamburgerMenu from '../Icons/HamburgerMenu'
import CartIcon from '../Icons/CartIcon'
import AddIcon from '../../assets/graphics/add.svg'
// router
import { useLocation } from 'react-router-dom'
// imports for framer-motion animation
import { motion } from 'framer-motion'
import { headerLeavesAnim, footerLeavesAnim, menuTextAnim} from '../../animation'


function Menu(){
    const dispatch = useDispatch();
    const location = useLocation(); // using location to decide whether or not to perform animations
    // retrieving redux states
    const menuItems = useSelector((state) => state.coffeeMenu.menu)
    const userCart = useSelector(state => state.userCart)

    function handleClick (item) {
        // adding one to amount of items in cart (orange circle)
        dispatch(increaseHowManyItemsInCartAction())

        let itemAlreadyInCart = false
        
        // Evaluates if the clicked item already exists in the userCart
        userCart.forEach(element => {
            if (item.id === element.id) {
                itemAlreadyInCart = element
            }
        })

        if (!itemAlreadyInCart) {
            // Adds the coffee to the itemcart if not already added
            dispatch(userCartAddItemAction(item))
        } else {
            // Updating the quantity of the coffee if already added
            dispatch(userCartIncrementQuantityAction(itemAlreadyInCart))
        }
    }

    return(
        <div className={Styles.container}>
            <HamburgerMenu />
            <CartIcon />
            <motion.img className="leaves" src={graphicsHeader} alt="header" 
            variants={location.fromLanding ? headerLeavesAnim : ""} animate="show" initial="hidden"/>
            <div className={Styles.menuContainer}>
                <motion.h1 className={Styles.title} 
                variants={location.fromNav ? menuTextAnim : ""} initial="hidden" animate="show">Meny</motion.h1>
                { menuItems !== undefined && menuItems.length > 1 ? 
                    menuItems.map((item) => {
                        return (
                            <div className={Styles.itemWrapper} key={item.id}>
                                <motion.div className={Styles.addBtn} onClick={ () => handleClick(item) } whileTap={{ scale: 0.8 }}>
                                    <img className={Styles.addIcon} src={AddIcon} alt="add-icon"></img>
                                </motion.div>
                                <MenuItem menu={item} />
                            </div>
                        )
                    }) 
                : 
                <div className={Styles.itemWrapper}>
                    { menuItems ?
                    <section className={Styles.errorMessage}>
                        <p>{ menuItems[0].errorTitle }</p>
                        <p>{ menuItems[0].errorMessage }</p>
                    </section>
                    :
                    <p> Något gick fel :( </p>
                    }
                </div>
                }
            </div>
            <motion.img src={graphicsFooter} alt="footer" variants={location.fromLanding ? footerLeavesAnim : ""} animate="show" initial="hidden"/>
        </div>
    )
}

export default Menu; 