import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ProgressiveImage from "react-progressive-image";
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationWrapper, LinksWrapper, UpperPart, LowerPart, PageName, LowerName, Cross } from '../../styles/GlobalStyles';
import Footer from '../LandingPage/LandingFooter';

const menuT1 = {
    initial: {
        filter: "grayscale(100%)",
        clipPath: 0,
    },
    animate: {
        filter: "grayscale(0%)",
        clipPath: ["circle(30% at 2% 3%)", "circle(139% at 2% 3%)"],
        transition: {
            duration: 0.9,
        }
    }
}

const crossVariant = {
    initial: {
        filter: "brightness(0.8)",
    },
    animate: {
        filter: "brightness(2)",
        transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}

const Navigation = ({ toggleMenu, setToggleMenu }) => {
    const history = useHistory()
    const [hovered, setHovered] = useState(false)
    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)
    return (
        (toggleMenu && 
            <AnimatePresence exitBeforeEnter>
                <NavigationWrapper initial={{ y: "-200%" }} animate={{ y: 0 }}  transition={{ duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }}>
                    <LinksWrapper>
                        <Cross onClick={() => setToggleMenu(!toggleMenu)} variants={crossVariant} whileHover="animate" initial="initial">
                            <motion.span></motion.span>
                        </Cross>
                        <UpperPart>
                            <Link to="/" onClick={() => {history.push('/'); window.location.reload();}}>
                                <motion.div className="u-1" onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}>
                                    <ProgressiveImage
                                        src={require('../../assests/album-5.webp')}
                                        placeholder={require(`../../assests/album-5-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img variants={menuT1} whileHover="animate" initial="initial" src={src} alt="Menu-1" />}
                                    </ProgressiveImage>
                                    <ProgressiveImage
                                        src={require('../../assests/album-5.webp')}
                                        placeholder={require(`../../assests/album-5-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img className="gray" src={src} alt="Menu-1" />}
                                    </ProgressiveImage>
                                    <PageName animate={{ opacity: hovered ? 0 : 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9] }}>
                                        <span>ALBUMS</span>
                                    </PageName>
                                </motion.div>
                            </Link>
                            <Link to="/merch" onClick={() => {history.push('/merch'); window.location.reload();}}>
                                <motion.div className="u-2" onHoverStart={() => setHovered1(!hovered1)} onHoverEnd={() => setHovered1(!hovered1)}>
                                    <ProgressiveImage
                                        src={require('../../assests/menu-merch.webp')}
                                        placeholder={require(`../../assests/menu-merch-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src} variants={menuT1} whileHover="animate" initial="initial" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <ProgressiveImage
                                        src={require('../../assests/menu-merch.webp')}
                                        placeholder={require(`../../assests/menu-merch-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src} className="gray" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <PageName animate={{ opacity: hovered1 ? 0 : 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9] }}>
                                        <span>MERCH</span>
                                    </PageName>
                                </motion.div>
                            </Link>
                            <Link to="/tour" onClick={() => {history.push('/tour'); window.location.reload();}}>
                                <motion.div className="u-3" onHoverStart={() => setHovered2(!hovered2)} onHoverEnd={() => setHovered2(!hovered2)}>
                                    <ProgressiveImage
                                        src={require('../../assests/menu-tour.webp')}
                                        placeholder={require(`../../assests/menu-tour-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src}  variants={menuT1} whileHover="animate" initial="initial" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <ProgressiveImage
                                        src={require('../../assests/menu-tour.webp')}
                                        placeholder={require(`../../assests/menu-tour-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src}  className="gray" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <PageName animate={{ opacity: hovered2 ? 0 : 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9] }}>
                                        <span>TOUR</span>
                                    </PageName>
                                </motion.div>
                            </Link>
                        </UpperPart>
                        <LowerPart>
                            <Link to="wiztube" onClick={() => {history.push('/wiztube'); window.location.reload();}}>
                                <div className="l-1">
                                    <ProgressiveImage
                                        src={require('../../assests/menu-youtube.webp')}
                                        placeholder={require(`../../assests/menu-youtube-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src} variants={menuT1} whileHover="animate" initial="initial" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <ProgressiveImage
                                        src={require('../../assests/menu-youtube.webp')}
                                        placeholder={require(`../../assests/menu-youtube-optimized.jpg`)}
                                    >
                                        {(src) => <motion.img src={src} className="gray" alt="Menu-2" />}
                                    </ProgressiveImage>
                                    <LowerName>
                                        <span>WIZTUBE</span>
                                    </LowerName>
                                </div>
                            </Link>
                        </LowerPart>
                        <Footer right="-14rem" bottom="8.8rem" flex="column"/>
                    </LinksWrapper>
                </NavigationWrapper>
            </AnimatePresence>
        )
    )
}

export default Navigation
