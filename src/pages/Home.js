import React, { useState, useEffect, useRef } from 'react';
import { useMotionValue } from 'framer-motion';
import { Container, SubContainer, Gallery } from '../styles/LandingStyles';
import { withRouter } from 'react-router-dom';
//components 
import Layout from '../components/layouts/LandingLayout';
import Albums from '../components/LandingPage/LandingAlbumsPreview';
import LandingFooter from '../components/LandingPage/LandingFooter';




const Home = () => {
    const [dynamicHeight, setDynamicHeight] = useState(null)
    const containerRef = useRef(null)
    const galleryRef = useRef(null)

    const yMotionValue = useMotionValue(0)

    useEffect(() => {
        const calcDynamicHeight = galleryWidth => {
            const vw = window.innerWidth
            const vh = window.innerHeight
            const dynamicHeight = galleryWidth - vw + vh
            return dynamicHeight
        }

        const handleDynamicHeight = ref => {
            const galleryWidth = ref.current.scrollWidth 
            const dynamicHeight = calcDynamicHeight(galleryWidth)
            setDynamicHeight(dynamicHeight)
        }

        const applyScrollListener = ref => {
            const setTranslateX = () => {
                const offsetTop = -ref.current.offsetTop
                yMotionValue.set(offsetTop)
            }
            window.addEventListener("scroll", setTranslateX)
            return () => window.removeEventListener("scroll", setTranslateX)
        }
        
        const resizeHandler = () => {
            handleDynamicHeight(galleryRef)
        }
        handleDynamicHeight(galleryRef)
        window.addEventListener("resize", resizeHandler)
        applyScrollListener(containerRef)
        return () => window.removeEventListener("resize", resizeHandler)
    }, [yMotionValue])

    

    return (
        <Layout>
            <Container style={{ height: dynamicHeight }}>
                <SubContainer ref={containerRef}>
                    <Gallery ref={galleryRef} style={{ x: yMotionValue }}>
                        <Albums />
                        <LandingFooter 
                            bottom="0"
                            left="16rem"
                         />
                    </Gallery>
                </SubContainer>
            </Container>
        </Layout>
    )
}

export default withRouter(Home);
