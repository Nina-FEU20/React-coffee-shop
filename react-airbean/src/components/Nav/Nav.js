import React from 'react'; 
//Import from router
import {useHistory, useLocation} from 'react-router-dom'
//Import CSS module
import Styles from './nav.module.css';
//Import SVG
import close from '../../assets/graphics/close.svg';
import graphicsHeader from  "../../assets/graphics/graphics-header.svg"
import graphicsFooter from '../../assets/graphics/graphics-footer.svg'
//Imports from redux
import { useDispatch } from "react-redux";
//Importing actions
import { toggleNavAction } from '../../actions/index';
// imports for Framer-Motion animation
import { motion } from 'framer-motion'
import { navSliderAnim, navMenuAnim, navAboutAnim } from '../../animation'


function Nav(){
    const history = useHistory();
    const location = useLocation(); // using location to check current path and using as condition for animations
    const dispatch = useDispatch();

    function handleClick(path) {
        // Toggling the navbar to close it
        dispatch(toggleNavAction())
        // pushing next route, depending on what is sent in as argument. Sending a true boolean as props for animations on next page
        history.push({pathname: path, fromNav: true})
    }
    
    return(
        <section className={Styles.navContainer}>
                <img className="leaves" src={graphicsHeader} alt="header"/>
                <img className="leaves" src={graphicsFooter} alt="header"/>
                <motion.nav variants={navSliderAnim} initial="hidden" exit="out" animate="show">
                    <div className={Styles.closeButton}>
                        <img className={Styles.close} alt="close button" src={close} onClick={() => handleClick(location.pathname) }/>
                    </div>
                    <div className={Styles.linkBox}>
                        <motion.h1 className={Styles.links} onClick={() => handleClick("/menu") }
                        variants={location.pathname === "/menu" ? navMenuAnim : ""} initial="hidden" animate="show">Meny</motion.h1>
                        <label className={Styles.line}/>
                        <motion.h1 className={Styles.links} onClick={() => handleClick("/about") }
                        variants={location.pathname === "/about" ? navAboutAnim : ""} initial="hidden" animate="show">Vårt kaffe</motion.h1>
                        <label className={Styles.line}/>
                    </div>
                </motion.nav> 
        </section>
    )
}


export default Nav; 