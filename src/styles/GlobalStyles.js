import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//fonts
import Maragsa1 from '../fonts/maragsa-display-webfont.woff';
import Maragsa2 from '../fonts/maragsa-display-webfont.woff2';


export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after{
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
        text-decoration: none;
    }
    html {
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    body {
        background: #000000;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
    }

    @font-face {
    font-family: 'maragsadisplay';
    src: url(${Maragsa2}) format('woff2'),
         url(${Maragsa1}) format('woff');
    font-weight: normal;
    font-style: normal;
    }
    
    `

    export const NavigationWrapper = styled(motion.div)`
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    export const LinksWrapper = styled(motion.div)`
        height: 40rem;
        width: 70rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
    export const UpperPart = styled(motion.div)`
        height: 62%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            width: 18rem;
            height: 23.8rem;
            margin: 0.5rem;
            &:nth-child(1) {
            }
            &:nth-child(2) {
                height: 100%;
                margin-bottom: 1.55rem;
            }
            &:nth-child(3) {
            }
            .u-1 {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: 0 0;
                }
                .gray {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -10;
                    opacity: 0.5;
                    filter: grayscale(100%);
                }
                
            }
            .u-2 {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                .gray {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -10;
                    opacity: 0.5;
                    filter: grayscale(100%);
                }
            }
            .u-3 {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                .gray {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -10;
                    opacity: 0.5;
                    filter: grayscale(100%);
                }
            }
        }
    `
    export const LowerPart = styled(motion.div)`
        height: 38%;
        width: 100%;
        a {
            .l-1 {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                .gray {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -10;
                    opacity: 0.5;
                    filter: grayscale(100%);
                }
            }
        }
    `

    export const PageName = styled(motion.div)`
        position: absolute;
        z-index: 10;
        width: inherit;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 4.5rem;
        background: rgba(0,0,0,0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            color: #BCBCBC;
            font-size: 1.2rem;
            letter-spacing: 3px;
            filter: brightness(2);
            font-family: 'maragsadisplay';
        }
    `

    export const LowerName = styled(motion.div)`
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        left: -10.5rem;
        span {
            font-family: 'maragsadisplay';
            font-size: 1.2rem;
            letter-spacing: 3px;
            filter: brightness(1.3);
            color: #BCBCBC;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                width: 50%;
                left: 6.7rem;
                top: 50%;
                height: 2px;
                border-radius: 15%;
                background: #BCBCBC;
                filter: brightness(0.8);
            }
        }
    `

    export const Cross = styled(motion.div)`
        position: fixed;
        z-index: 20;
        top: 1.2rem;
        right: 7.4rem;
        cursor: pointer;
        width: 62px;
        height: 62px;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='rgb(188,188,188)' stroke-width='3' stroke-dasharray='18%25%2c 8%25' stroke-dashoffset='46' stroke-linecap='butt'/%3e%3c/svg%3e");
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            display: block;
            background-color: #BCBCBC;
            height: 1.5px;
            width: 35px;
            position: relative;
            border-radius: 10%;
            transform: rotate(45deg);
            &:after {
                content: '';
                position: absolute;
                height: inherit;
                width: inherit;
                border-radius: inherit;
                background-color: inherit;
                transform: rotate(-90deg);
            }
        }
    `