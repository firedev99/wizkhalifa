import React, { useState } from 'react';
import { GlobalStyle } from '../../styles/GlobalStyles';
//components
import Header from '../headers/LandingHeader';
import Navigation from "../headers/Navigation";

const LandingLayout = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    return (
        <>
            <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <GlobalStyle />
            <main>
                {children}
            </main>
        </>
    )
}

export default LandingLayout
