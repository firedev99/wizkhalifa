import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const buttonVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: [5, -10, 10, -10, 10, -5],
        transition: {
            yoyo: Infinity,
            ease: [0.6,0.05,-0.01,0.9],
        }
    }
}

const ButtonWrapper = styled(motion.button)`
    position: relative;
    border: 1.5px solid #BCBCBC;
    background: transparent;
    color: #BCBCBC;
    outline: none;
    letter-spacing: 1px;
    cursor: pointer;
`

export const Button = ({ children, padding, top, left, font }) => {
    return (
        <ButtonWrapper
            variants={buttonVariants}
            whileHover="animate" 
            initial="initial"
            style={{ padding: padding, top: top, left: left, fontSize: font }}
        >
            {children}
        </ButtonWrapper>
    )
}


