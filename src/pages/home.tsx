import '../styles/styles.css'
import React,{useState} from 'react'

import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { CartContext, CartProvider } from '../utils/CartContext'
import NavbarToggleButton from '../components/NavbarToggleButton'
import useCart from '../hooks/useCart'

interface PageProps {}

export default function Home (props:PageProps) {
    const [active, setActive] = useCart()
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Blank Gatsby TypeScript Starter By KevinJonathan911</title>
            </Helmet>
            <div className='flexDirCol' >
                <Sidebar visible={active}/>
                <Navbar/>
                <div className="paxl flexDirCol">
                    <h1 className='mtxl' >Enjoy your Blank Gatsby Typescript Starter!</h1>

                    <h1>This is another different component</h1>
                    <p className="colorWhite black">Sidebar: {String(active)}</p>
                    <NavbarToggleButton/>

                    <p className="mbn" style={{fontSize:14}}>Made with love using <a href='https://www.jojobug.com'>kevinjonathan911's</a>  Vanilla Gastby Starter with TypeScript!</p>
                    <p className="mts" style={{fontSize:14}}>Click <a href='https://github.com/kevinjonathan911/Blank-Gatsby-Typscript-Starter'>here</a> to use this Gatsby starter.</p>
                    
                </div>
                

            </div>
        </div>
    )
}