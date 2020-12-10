import React, { useContext } from 'react'
import { CartContext } from '../utils/CartContext'

function useCart() {
    const [active, setActive] = useContext(CartContext)
    return [active,setActive]
}

export default useCart
