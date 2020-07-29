import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { headerVariants } from '../../helper/Animations';
//components
import MenuTab from './MenuTab';


const LandingHeaderWrapper = styled(motion.div)`
    height: 5.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Links = styled(motion.div)`
    width: 60rem;
    height: 3rem;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
    
    .links {
        width: 10rem;
        margin: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:nth-child(2) {
            margin-left: 0.9rem;
                    .block {
                        position: relative;
                        left: -0.75rem;
                    }
            }
        &:nth-child(3) {
                    margin-left: 0.5rem;
                    .block {
                        position: relative;
                        left: -1.5rem;
                    }
            }
        &:nth-child(4) {
                    margin-left: -0.6rem;
                    .block {
                        display: none;
                    }
            }
        
        .block {
            height: 1px;
            display: block;
            width: 4.2rem;
            background-color: #BCBCBC;
        }
        a {
            font-size: 1.1rem;
            font-family: "Advent Pro";
            color: #BCBCBC;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            position: relative;
            &:after {
               content: '';
               position: absolute;
               width: 0;
               height: 1.5px;
               right: 0;
               display: block;
               margin-top: 3px;
               margin-left: -1.5px;
               background: #BCBCBC;
               transition: 0.4s ease; 
            }
            &:hover {
                &:after {
                    width: 100%;
                    left: 0;
                    background: #BCBCBC;
                }
            }
        }
        .active {
            font-family: 'maragsadisplay';
            background-color: red;
        }
    }
`



const Header = () => {
    
    return (
        <LandingHeaderWrapper>
            <Links variants={headerVariants} initial="initial" animate="animate" >
                <div className="links">
                    <Link to="/" >
                        Albums
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/merch">
                        Merch
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/tour">
                        Tour
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/wiztube">
                        WizTube
                    </Link>
                    <span className="block" />
                </div>
            </Links>
            <MenuTab />
        </LandingHeaderWrapper>
    )
}

export default Header;