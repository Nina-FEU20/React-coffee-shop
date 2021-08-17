import React from 'react'; 

//styles
import Styles from './menu.module.css'

function MenuItem({ menu }){
    return(
        <div className={Styles.itemContainer}>
            <div className={Styles.coffeeContainer}>
                <h2 className={Styles.coffee}>{menu.title}</h2>
                <div className={Styles.border}>...........................</div>
                <p className={Styles.desc}>{menu.desc}</p>
            </div>
            <h3 className={Styles.price}>{menu.price} kr</h3>
        </div>
    )
}

export default MenuItem; 