import React from 'react'; 
// styles
import Styles from './icons.module.css'

//svg
import navIcon from  "../../assets/graphics/navicon.svg"

// TODO: ADD DESC.. Importing
import { useDispatch } from "react-redux";
// Importing actions
import { toggleNavAction } from '../../actions/index';

function HamburgerMenu(){
    // Importing dispatch
    const dispatch = useDispatch();

    return(
        <div className={Styles.hamburgerContainer} onClick={() => dispatch(toggleNavAction()) }>
            <img className={Styles.hamburger} src={navIcon} alt=""/>
        </div>
        
    )
}

export default HamburgerMenu; 