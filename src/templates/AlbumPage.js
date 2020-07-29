import React, { useEffect, useState } from 'react';
import { ALBUMS } from '../helper/albumData';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlbumContainer, AlbumTitle, AlbumImageWrapper, AlbumIntro, LeftContent, RightContent, MainContent, SliderFirst, SliderSecond, Label, Music  } from '../styles/AlbumPageStyles';
import { albumVariants, titleVariant, subTitleVariant, subTitleLetter, titleLetter, introVariant, leftContentVariant, rightContentVariant, mainContentVariant, svgVariant, slide1Variant, slide2Variant, musicVariants } from '../helper/Animations';
//components 
import Layout from '../components/layouts/LandingLayout';
import LandingFooter from '../components/LandingPage/LandingFooter';
import Header from '../components/headers/Header';

const AlbumPage = ({ match }) => {
    const { params: {albumId} } = match;
    const SPECIFIC_DATA = ALBUMS.find(data => albumId === data.albumId);
    const titleText = SPECIFIC_DATA.title;
    const titleArr = titleText.split("");
    const subTitleText = SPECIFIC_DATA.subTitle;
    const subTitleArr = subTitleText.split(""); 
    const [playing, setPlaying] = useState(false)
    const animation = useAnimation()
    const animation2 = useAnimation()
    const svgAnimation = useAnimation()
    const [content1ref, content1View] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    }) 
    const [content2ref, content2View] = useInView({
        triggerOnce: true,
        // rootMargin: "-200px"
    }) 
    const [svgRef, svgInView] = useInView({
        triggerOnce: true,
        // rootMargin: "-200px"
    }) 

    useEffect(() => {
        if(content1View) {
            animation.start("visible")
        }
        if(content2View) {
            animation2.start("visible")
        }
        if(svgInView) {
            svgAnimation.start("animate")
        }
    }, [content1View, content2View, svgInView, animation, animation2, svgAnimation])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const audioEl = new Audio(SPECIFIC_DATA.musicSrc)
        const controls = () => playing ? audioEl.play() : audioEl.pause()
        audioEl.addEventListener("canplaythrough", controls)

        return() => audioEl.removeEventListener("canplaythrough", controls)
    }, [playing, SPECIFIC_DATA.musicSrc])


    return (
        <Layout>
            <Header />
            <AlbumContainer>
            <AlbumTitle>
                <motion.span variants={titleVariant} initial="initial" animate="animate" className="title_wrapper">
                    {titleArr.map((item, index) => (
                        <motion.span key={index} variants={titleLetter}>{item}</motion.span>
                    ))}
                </motion.span>
                <motion.span variants={subTitleVariant} initial="initial" animate="animate" className="subTitle_wrapper">
                    {subTitleArr.map((item, index) => (
                        <motion.span key={index} variants={subTitleLetter}>{item}</motion.span>
                    ))}
                </motion.span>
            </AlbumTitle>
            <AlbumIntro variants={introVariant} initial="initial" animate="animate">
                <h2>{SPECIFIC_DATA.title}{" "}{SPECIFIC_DATA.subTitle}{SPECIFIC_DATA.intro}</h2>
            </AlbumIntro>
            <Music variants={musicVariants} initial="initial" animate="animate">
                <div className="icons">
                    <svg style={{ filter: playing ? "brightness(1.5)" : "brightness(0.7)", transform: playing ? "scale(1.15)" : "scale(1)" }} onClick={() => setPlaying(true)} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                        <path id="ic_play_circle_filled_24px" d="M32,2A30,30,0,1,0,62,32,30.011,30.011,0,0,0,32,2ZM26,45.5v-27L44,32Z" transform="translate(-2 -2)" fill="#bcbcbc"/>
                    </svg>
                    <svg style={{ filter: !playing ? "brightness(1.5)" : "brightness(0.7)", transform: !playing ? "scale(1.15)" : "scale(1)" }} onClick={() => setPlaying(false)} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                        <path id="Icon_awesome-pause-circle" data-name="Icon awesome-pause-circle" d="M30.563.563a30,30,0,1,0,30,30A29.995,29.995,0,0,0,30.563.563ZM28.627,40.24a1.941,1.941,0,0,1-1.935,1.935H20.885A1.941,1.941,0,0,1,18.95,40.24V20.885a1.941,1.941,0,0,1,1.935-1.935h5.806a1.941,1.941,0,0,1,1.935,1.935Zm13.548,0a1.941,1.941,0,0,1-1.935,1.935H34.433A1.941,1.941,0,0,1,32.5,40.24V20.885a1.941,1.941,0,0,1,1.935-1.935H40.24a1.941,1.941,0,0,1,1.935,1.935Z" transform="translate(-0.563 -0.563)" fill="#bcbcbc"/>
                    </svg>
                </div>
                <h2>You're listening, {SPECIFIC_DATA.title}{" "}{SPECIFIC_DATA.subTitle}</h2>
            </Music>
            <AlbumImageWrapper
                variants={albumVariants}
                initial="initial"
                animate="animate"
            >
                <motion.img src={SPECIFIC_DATA.imageSrc} alt={SPECIFIC_DATA.title} />
            </AlbumImageWrapper>
            <LeftContent
                ref={content1ref}
                variants={leftContentVariant}
                initial="hidden"
                animate={animation}
            >
                <span>{SPECIFIC_DATA.content1}</span>
            </LeftContent>
            <RightContent
                ref={content1ref}
                variants={rightContentVariant}
                initial="hidden"
                animate={animation}
            >
                <span>{SPECIFIC_DATA.content2}</span>
            </RightContent>
            <MainContent
                ref={content2ref}
                variants={mainContentVariant}
                initial="hidden"
                animate={animation2}
            >
                <span>{SPECIFIC_DATA.content3}<br /><br />{SPECIFIC_DATA.content4}</span>
            </MainContent>
            <SliderFirst>
                <div className="slider1">
                    <motion.img variants={slide1Variant} animate="animate" src={require('../assests/slider1.jpg')} alt="Slider" />
                </div>
            </SliderFirst>
            <SliderSecond>
                <div className="slider2">
                    <motion.img variants={slide2Variant} animate="animate" src={require('../assests/slider2.jpg')} alt="Slider" />
                </div>
            </SliderSecond>
            <Label
                ref={svgRef}
                variants={svgVariant}
                initial="initial"
                animate={svgAnimation}
            >
                <img src={SPECIFIC_DATA.svgSrc} alt={SPECIFIC_DATA.title} />
            </Label>
            <LandingFooter top="138rem" left="2.6rem" />
            </AlbumContainer>
        </Layout>
    )
}

export default AlbumPage
