import '../styles/styles.css'
import React,{useState} from 'react'


import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { CartContext, CartProvider } from '../utils/CartContext'
import NavbarToggleButton from '../components/NavbarToggleButton'
import Home from './home'

interface PageProps {}

export default function Page (props:PageProps) {
    const [sideBarVisible, setSideBarVisible] = useState<Boolean>(false)
    return (
        <CartProvider >
            <Home/>
        </CartProvider>
    )
}
