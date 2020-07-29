import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TourWrapper, TourImage, Disc, SubscribeSec, LabelSvg, ToutTitle, Dates, ViewMbutton, TourIntro, PagePolicies } from "../styles/TourPageStyles";
import { TOURDATA, POLICY } from '../helper/tourData';
import { widthVariant, discVariant, opacityVariant } from "../helper/Animations";
//components
import Layout from '../components/layouts/Layout';
import { Button } from '../components/Button';
import {ReactComponent as DiscSvg} from '../assests/svg/disc.svg';
import { ReactComponent as TourArc } from '../assests/svg/tour-arc.svg';
import Intro from '../components/Intro';
import Footer from '../components/LandingPage/LandingFooter';
const datesVariants = {
    animate: {
        transition: {
            delayChildren: 0.9,
            staggerChildren: 0.16,
            staggerDirection: 1
        }
    }
}

const datesNvariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: [0.6, 0.01, -0.05, 0.9]
        }
    }
}


const TourPage = () => {
    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()
    const animation4 = useAnimation()
    const animation5 = useAnimation()

    const [content1ref, content1view] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })
    const [content2ref, content2view] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })
    const [content3ref, content3view] = useInView({
        triggerOnce: true,
    })
    const [content4ref, content4view] = useInView({
        triggerOnce: true,
        rootMargin: "-100px"
    })
    const [content5ref, content5view] = useInView({
        triggerOnce: true,
    })
    
    
    useEffect(() => {
        if(content1view) {
            animation1.start("animate")
        }
        if(content2view) {
            animation2.start("animate")
        }
        if(content3view) {
            animation3.start("animate")
        }
        if(content4view) {
            animation4.start("animate")
        }
        if(content5view) {
            animation5.start("animate")
        }
    },[content1view, content2view, content3view, content4view, content5view, animation1, animation2, animation3, animation4, animation5])

    return (
        <Layout>
            <TourWrapper>
                <TourImage>
                    <motion.img
                        src={require('../assests/tour-poster.webp')} alt="Tour BG"
                        variants={widthVariant}
                        initial="initial"
                        animate="animate"
                    />
                </TourImage>
                <Disc
                    variants={discVariant}
                    initial="initial"
                    animate="animate"
                >
                    <DiscSvg />
                </Disc>
                <SubscribeSec
                    ref={content1ref}
                    variants={opacityVariant}
                    initial="initial"
                    animate={animation1}
                >
                    <div className="title">
                        <h1>DON'T SEE YOUR DATE ?</h1>
                    </div>
                    <div className="subTitle">
                        <h3>SUBSCRIBE AND BE ONE OF THE FIRST TO KNOW WHEN WIZ IS COMING TO YOUR AREA</h3>
                    </div>
                    <div className="input">
                        <input type="email" name="email" placeholder="EMAIL ADDRESS" spellCheck="false" autoComplete="off" />
                    </div>
                    <Button padding="0.5rem 1.7rem" top="2rem" font="1rem">
                        SUBSCRIBE
                    </Button>
                </SubscribeSec>
                <LabelSvg
                    ref={content2ref}
                    variants={opacityVariant}
                    initial="initial"
                    animate={animation2}
                >
                    <TourArc />
                </LabelSvg>
                <ToutTitle
                    variants={opacityVariant}
                    ref={content5ref}
                    initial="initial"
                    animate={animation5}
                >
                    <h1>UPCOMING TOURS</h1>
                </ToutTitle>
                <Dates ref={content4ref} variants={datesVariants} initial="initial" animate={animation4}>
                    {TOURDATA.map(item => (
                        <motion.div variants={datesNvariants} className="dates" key={`po_${item.id}`}>
                            <span>{item.date}</span>
                            <span>{item.location}</span>
                            <span>{item.button ? <Button padding={"0.4rem 2rem"}>BUY</Button> : item.ticket}</span>
                        </motion.div>
                    ))}
                </Dates>
                <ViewMbutton>
                    <Button top="76rem" left="44%" padding="0.6rem 2.2rem" font="1.2rem">
                        VIEW MORE
                    </Button>
                </ViewMbutton>
                <TourIntro>
                    <Intro />
                </TourIntro>
                <PagePolicies
                    variants={opacityVariant}
                    ref={content3ref}
                    initial="initial"
                    animate={animation3}
                >
                    {POLICY.map(item => (
                        <span key={item.id}>
                            {item.string}
                        </span>
                    ))}
                </PagePolicies>
                <Footer 
                    top="132rem"
                    left="50%"
                    transform="translateX(-50%)"
                />
            </TourWrapper>
        </Layout>
    )
}

export default TourPage
