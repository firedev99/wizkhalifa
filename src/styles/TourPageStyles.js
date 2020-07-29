import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const TourWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const TourImage = styled(motion.div)`
    position: absolute;
    top: 4.7rem;
    left: 6rem;
    width: 45rem;
    height: 28rem;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.85);
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
const rotate2 = keyframes`
    from {
        transfrom: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
`

export const Disc = styled(motion.div)`
    position: absolute;
    right: 7rem;
    top: -4.5rem;
    svg {
        width: 30rem;
        animation: ${rotate2} 30s linear infinite;
    }
`
export const SubscribeSec = styled(motion.div)`
    position: absolute;
    top: 46rem;
    left: 11rem;
    margin-bottom: 3rem;
    .title {
        h1 {
            color: #BCBCBC;
            font-size: 2.3rem;
            letter-spacing: 4px;
            font-family: "Advent Pro";
        }
    }
    .subTitle {
        margin-top: 1rem;
        width: 20rem;
        h3 {
            color: #BCBCBC;
            font-size: 1rem;
            letter-spacing: 0.5px;
            font-family: "Advent Pro";
        }
    }
    .input {
        margin-top: 3rem;
        position: relative;
        input {
            background: transparent;
            outline: none;
            border: none;
        }
        input[type=email] {
                color: #BCBCBC;
                font-size: 1rem;
                margin-left: 0.3rem;
        }
        input[type=email]:focus {
                background: transparent;
        }
        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #BCBCBC;
            margin-top: 1.8rem;
            filter: brightness(0.7);
        }
    }
`



export const LabelSvg = styled(motion.div)`
    position: absolute;
    top: 42.5rem;
    right: 13rem;
    svg {
        width: 15rem;
        animation: ${rotate} 30s linear infinite;
    }
`

export const ToutTitle = styled(motion.div)`
    position: relative;
    top: 68rem;
    h1 {
        font-size: 3.8rem;
        letter-spacing: 6px;
        font-family: 'maragsadisplay';
        color: #BCBCBC;
        text-align: center;
        filter: brightness(0.95);
    }
`

export const Dates = styled(motion.div)`
    position: relative;
    top: 73rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .dates {
        width: 60rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.4rem;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            margin-top: 2rem;
            height: 1.5px;
            background: #BCBCBC;
            filter: brightness(0.6);
        }
        span {
            margin-bottom: 1rem;
            width: 20rem;
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            font-size: 1.4rem;
            letter-spacing: 4px;
            font-family: 'maragsadisplay';
            color: #BCBCBC;
            
        }
    }
`

export const ViewMbutton = styled.div`

`

export const TourIntro = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    top: 84rem;
    margin-bottom: 10rem;
    svg {
        width: 88rem;
        filter: brightness(0.7);
    }
`

export const PagePolicies = styled(motion.div)`
    width: 90rem;
    display: flex;
    margin-left: 3.5rem;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 76rem;
    span {
        filter: brightness(0.6);
        font-size: 1.2rem;
        font-family: 'maragsadisplay';
        letter-spacing: 1.5px;
        color: #BCBCBC;
    }
`