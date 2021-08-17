import React from 'react'; 
import { useHistory } from 'react-router-dom';
import Styles from './landing.module.css';

//Import SVG
import landingLeft from '../../assets/graphics/intro-graphic-left.svg';
import landingRight from '../../assets/graphics/intro-graphic-right.svg';
import landingLogo from '../../assets/graphics/airbean-landing.svg'; 


function Landing(){
    const history = useHistory();

    return(
        <section className={Styles.landingWrapper} onClick={() => history.push({pathname: './menu', fromLanding: true})}>
            <div className={Styles.containerleft}>
                <img data-testid="leftImage" className={landingLeft} src={landingLeft} alt="graphic left"/>
            </div>
            <div className={Styles.containerlogo}>
                <img data-testid="logoImage" className={landingLogo} src={landingLogo} alt="airbean logo"/>
            </div>
            <div className={Styles.containerright}>
                <img data-testid="rightImage" className={Styles.landingRight} src={landingRight} alt="graphic right"/>
            </div>
        </section>
        
    )
}

export default Landing; 