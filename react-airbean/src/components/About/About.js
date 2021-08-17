import React from 'react';
//Import styles
import Styles from './about.module.css'
//Import svg
import graphicsHeader from  "../../assets/graphics/graphics-header.svg"
import graphicsFooter from '../../assets/graphics/graphics-footer.svg'
import eva from '../../assets/graphics/eva-cortado.jpg';
//Import icons
import HamburgerMenu from '../Icons/HamburgerMenu'
// imports for framer-motion animation
import {motion} from 'framer-motion'
import { aboutTextAnim } from '../../animation'

function About(){
    return(
        <div className={Styles.container}>
            <HamburgerMenu />
            <img className="leaves" src={graphicsHeader} alt="header"/>
            <div className={Styles.menuContainer}>
                <motion.h1 className={Styles.title}  variants={aboutTextAnim} initial="hidden" animate="show">Vårt kaffe</motion.h1>
                <div className={Styles.contentContainer}>
                    <p className={Styles.fatText}>
                    Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
                    </p>
                    <p className={Styles.normalTextTop}>
                    Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
                    </p>
                    <p className={Styles.normalTextBottom}>
                    Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
                    </p>
                    <div className={Styles.evaContainer}>
                        <img className={Styles.eva} src={eva} alt="Eva"/>
                        <h2>Eva Cortado</h2>
                        <p>VD & Grundare</p>
                    </div>
                </div>
            </div>
            <img src={graphicsFooter} alt="footer"/>
        </div>
    )
}

export default About; 