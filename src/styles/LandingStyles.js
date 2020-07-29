import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: relative;
    width: 100%;
`
export const SubContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100vw;
`
export const Gallery = styled(motion.ul)`
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: max-content;
    user-select: none;
    list-style-type: none;
    will-change: transform;
    cursor: default; 
`

export const List = styled.li`
    margin-left: 60rem;
    margin-top: 13.5rem;
    &:nth-child(1){
        margin-left: 52rem;
        .subTitle {
            &:nth-child(6) {
                margin-right: 1.5rem;
            }
        }
    }
    &:nth-child(2) {
        .albums {
                object-position: 0 1%;
        }
        .title {
            bottom: 25rem;
            right: 38rem;
        }
        .subTitle {
            bottom: 26rem;
            right: 38rem;
        }
    }
    &:nth-child(3){
        margin-top: 6.9rem;
        .title {
            letter-spacing: 2rem;
            right: 35.3rem;
            bottom: 22rem;
        }
        
    }
    &:nth-child(4) {
        .title {
            bottom: 24.5rem;
            right: 35.5rem;
        }
        .subTitle {
            bottom: 25.5rem;
            right: 35.5rem;
            &:nth-child(6) {
                margin-right: 1.5rem; 
            }
        }
    }
    &:nth-child(5){
            .albums {
                filter: brightness(0.6)
            }
            .title {
                right: 36.8rem;
            }
            .subTitle {
                right: 37rem;
                &:nth-child(1) {
                    margin-right: 1.5rem;
                }
            }
    }
`

export const DashedWrapper = styled(motion.div)`
    width: 525px;
    height: 525px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='rgb(188,188,188)' stroke-width='2' stroke-dasharray='24%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(0.9);
`

export const Image = styled(motion.div)`
    height: 500px;
    width: 500px;
    position: relative;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.9);
        border-radius: 15px;
        object-position: center;
        will-change: transform;
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

export const Labels = styled(motion.div)`
    position: relative;
    img {
        position: absolute; 
        bottom: -1rem;
        left: -43rem; 
        width: 250px;
        filter: brightness(0.9);
        animation: ${rotate} 30s linear infinite;
    }
`    

export const Title = styled(motion.h1)`
    display: flex;
    span {
        display: block;
        font-size: 5rem;
        text-transform: uppercase;
        color: #BCBCBC;
        font-family: 'maragsadisplay'; 
        letter-spacing: 0.8rem;  
        
        }
    .title {
            position: relative;
            bottom: 24.5rem;
            right: 32rem;  
            
    }
`
export const SubTitle = styled(motion.h1)`
    display: flex;
    span {
        display: block;
        font-size: 5.4rem;
        text-transform: uppercase;
        color: #BCBCBC;
        font-family: 'maragsadisplay'; 
        letter-spacing: 0.8rem;  
        
        }
    .subTitle {
        position: relative;
        bottom: 25.5rem;
        right: 32rem;
    }
`
export const SocialFooter = styled(motion.div)`
    height: 5rem;
    width: 38rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        margin: 0 1.3rem;
        filter: brightness(0.8);
        cursor: pointer;
        svg {
            width: 1.7rem;
        }
    }
`

export const Intro = styled(motion.div)`
    position: relative;
    right: 10rem;
`

