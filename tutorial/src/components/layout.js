import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import "./styles/layout.css"

const layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main style={{padding: "10px"}}>
                {children}
            </main>  
            <Footer />
        </>
    )
}

export default layout
