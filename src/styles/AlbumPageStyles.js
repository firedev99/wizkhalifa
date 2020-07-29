import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const AlbumContainer = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: relative;
`

export const AlbumImageWrapper = styled(motion.div)`
    position: absolute;
    top: 13rem;
    height: 820px;
    width: 100%;
    img {
        filter: brightness(0.9);
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: 50% 20%;
    }
`
export const AlbumTitle = styled(motion.div)`
    overflow: hidden;
    position: absolute;
    top: 5rem;
    left: 10rem;
    span {
            display: inline-block;
            font-size: 3.4rem;
            font-family: 'maragsadisplay'; 
            color: #BCBCBC;
            letter-spacing: 9px;
    }
    .title_wrapper {
        span {
            
        }
    }
    .subTitle_wrapper {
        span {
            &:nth-child(1) {
                margin-left: 1.5rem;
            }
        }
    }
`

export const AlbumIntro = styled(motion.div)`
    width: 370px;
    position: absolute;
    top: 9.3rem;
    left: 17.7rem;
    h2 {
        font-family: "Advent Pro";
        font-size: 1.2rem;
        letter-spacing: 1px;
        text-align: right;
        color: #BCBCBC;
    }
`
export const LeftContent = styled(motion.div)`
    position: absolute;
    top: 73rem;
    left: 5rem;
    width: 550px;
    span {
        font-size: 1.2rem;
        font-family: "Advent Pro";
        letter-spacing: 1px;
        color: #BCBCBC
    }
`
export const RightContent = styled(motion.div)`
    position: absolute;
    top: 73rem;
    right: 5rem;
    width: 600px;
    span {
        font-size: 1.2rem;
        font-family: "Advent Pro";
        letter-spacing: 1px;
        color: #BCBCBC
    }
`
export const MainContent = styled(motion.div)`
    position: absolute;
    top: 108rem;
    right: 5rem;
    width: 600px;
    span {
        font-size: 1.5rem;
        font-family: "Advent Pro";
        letter-spacing: 0.5px;
        color: #BCBCBC
    }
`


export const SliderFirst = styled.div`
overflow: hidden;
    .slider1 {
        position: absolute;
        top: 92.27rem;
        height: 2rem;
        width: 100%;
        img {
            filter: brightness(0.7);
            height: 100%;
            width: 100%;
            
        }
    }
`
export const SliderSecond = styled.div`
overflow: hidden;
    .slider2 {
        position: absolute;
        top: 94.3rem;
        height: 2rem;
        width: 100%;
        img {
            height: 100%;
            width: 100%;
            filter: brightness(0.7);
        }
    }
`

const rotate = keyframes`
    from {
        transfrom: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Label = styled(motion.div)`
        position: absolute; 
        top: 112rem;
        left: 13rem; 
        animation: ${rotate} 30s linear infinite; 
    img {
        width: 280px;
        filter: brightness(0.9);
    }
`
export const Music = styled(motion.div)`
    height: 3rem;
    width: 20rem;
    display: flex;
    position: absolute;
    right: 1.5rem;
    top: 8.2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icons {
        position: relative;
        left: 4.3rem;
        width: 5rem;
        display: flex;
        justify-content: space-between;
        svg {
            cursor: pointer;
            width: 2rem;
        } 
    }
    h2 {
        margin-top: -0.5rem;
        font-size: 1.1rem;
        color: #BCBCBC;
        font-family: "Advent Pro"; 
    }
`