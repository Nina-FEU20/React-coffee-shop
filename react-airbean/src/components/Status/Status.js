//Import react
import React, { useEffect, useState } from 'react'; 
//Import CSS
import Styles from './status.module.css';
//Import svg
import Drone from '../../assets/graphics/drone.svg';
import Loader from '../../assets/graphics/loader.png';

//Import useHistory
import { useHistory } from 'react-router-dom';
// react redux
import { useSelector, useDispatch } from "react-redux";
// Importing redux-actions
import { userCartDeleteAllAction, resetHowManyItemsInCartAction } from '../../actions/index';
// imports for framer-motion animamtion
import { motion } from 'framer-motion'
import { flyingDroneAnim, pageFadeAnim } from '../../animation'

function Status(){
    const [apiResponse, setApiResponse] =  useState()
    const userCart = useSelector(state => state.userCart)
    
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData () {
            try {
                // Fetching data from API
                const response = await fetch('http://localhost:5000/api/beans', 
                    {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(userCart),
                    })

                // Converting the response from JSON JavaScript
                const data = await response.json();

                // Updating state of apiResponse
                setApiResponse(data);

                // Clearing local Storage
                localStorage.clear()
                // Clearing number of items in cart
                dispatch(resetHowManyItemsInCartAction())
                // Clearing userCart store
                dispatch(userCartDeleteAllAction())

            } catch (error) {
                console.error(`Something went wrong when contacting the server: ${error.message}`)
                
                const apiError = {error: 'Något gick fel :(', errorMessage: 'Kunde inte skicka din beställning'}
                setApiResponse(apiError);
            }
        }

        fetchData();
    }, []);

    return(
        <motion.section variants={pageFadeAnim} initial="hidden" animate="show">
            { apiResponse ?
                <section>
                    { apiResponse.error ?
                        <section className={Styles.statusContainer}>
                            <div className={Styles.orderContainer}>
                                <p>{ apiResponse.error }</p>
                            </div>
                            <motion.img className={Styles.drone} src={Drone} alt="drone" transition={flyingDroneAnim} animate={{y: ["5%", "-5%"], x: ["5%", "-5%"], scale: [0.3, 1] }} />
                            <div className={Styles.etaContainer}>
                                <p>{ apiResponse.errorMessage }</p>
                            </div>
                            <motion.button className={Styles.okBtn} onClick={() => history.push('./menu')} whileHover={{ scale: 1.02 }}>Ok! :(</motion.button>
                        </section>
                    :
                        <section className={Styles.statusContainer}>
                            <div className={Styles.orderContainer}>
                                <p className={Styles.normalP}>Ordernummer</p>
                                <p className={Styles.bigP}>{ apiResponse.orderNr }</p>
                            </div>
                            <motion.img className={Styles.drone} src={Drone} alt="drone" transition={flyingDroneAnim} animate={{y: ["5%", "-5%"], x: ["5%", "-5%"], scale: [0.3, 1] }} />
                            <h1 className={Styles.title}>Din beställning är på väg!</h1>
                            <div className={Styles.etaContainer}>
                                <p className={Styles.bigP}>{ apiResponse.eta }</p>
                                <p className={Styles.normalP}>minuter</p>
                            </div>
                            <motion.button className={Styles.okBtn} onClick={() => history.push('./menu')} whileHover={{ scale: 1.02 }}>Ok, cool!</motion.button>
                        </section>
                    }
                </section>
            : 
                <section className={Styles.statusContainer}>
                    <img src={Loader} alt='loader'/>
                    <h1 className={Styles.title}>Skickar din beställning!</h1>
                </section>
            }
        </motion.section>
    )
}

export default Status; 