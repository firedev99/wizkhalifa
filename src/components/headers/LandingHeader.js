import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { headerVariants } from '../../helper/Animations';


const LandingHeaderWrapper = styled(motion.div)`
    position: fixed;
    z-index: 50;
    height: 5.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Links = styled.div`
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

const MenuTab = styled.div`
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
        margin-top: -1.15rem;
        position: relative;
        border-radius: 10%;
        &:before {
            content: '';
            position: absolute;
            height: inherit;
            width: inherit;
            background-color: inherit;
            top: 0.6rem;
            border-radius: inherit;
        }
        &:after {
            content: '';
            position: absolute;
            height: inherit;
            width: inherit;
            background-color: inherit;
            top: 1.2rem;
            border-radius: inherit;
        }
    }
`

const LandingHeader = ({ toggleMenu, setToggleMenu }) => {
    let history = useHistory()
    
    return (
        <LandingHeaderWrapper
            variants={headerVariants}
            initial="initial"
            animate="animate"
        >
            <Links>
                <div className="links">
                    <Link to="/" onClick={() => {history.push('/'); window.location.reload();}} >
                        Albums
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/merch" onClick={() => {history.push('/merch'); window.location.reload();}} >
                        Merch
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/tour" onClick={() => {history.push('/tour'); window.location.reload();}}>
                        Tour
                    </Link>
                    <span className="block" />
                </div>
                <div className="links">
                    <Link to="/wiztube" onClick={() => {history.push(`/wiztube`); window.location.reload();}}  >
                        WizTube
                    </Link>
                    <span className="block" />
                </div>
            </Links>
            <MenuTab onClick={() => setToggleMenu(!toggleMenu)}>
                <span></span>
            </MenuTab>
        </LandingHeaderWrapper>
    )
}

export default LandingHeader;