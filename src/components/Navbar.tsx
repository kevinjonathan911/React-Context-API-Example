import React,{useContext} from 'react'
import useCart from '../hooks/useCart'
import '../styles/styles.css'
import { CartContext } from '../utils/CartContext'

function Navbar() {
    const [active, setActive] = useCart()
    return (
        <div className='vw100 orange paxs flexDirRow fixed' style={{zIndex:10}}>
            <h1>This is a different component</h1>
            <p className='colorWhite black maxl' style={{width:'100px'}}>Sidebar : {JSON.stringify(active)}</p>
            
            <button onClick={()=>setActive(!active)} >Toggle Sidebar</button>
        </div>
    )
}

export default Navbar
