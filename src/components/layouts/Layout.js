import React from 'react'
import Header from '../headers/Header';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <GlobalStyle />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
