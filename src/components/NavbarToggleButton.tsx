import React from 'react'
import useCart from '../hooks/useCart'

function NavbarToggleButton() {
    const [active, setActive] = useCart()
    return (
        <button onClick={()=>setActive(!active)} className='mhxl' style={{width:'100px'}}>Also Toggle Sidebar</button>
    )
}

export default NavbarToggleButton
