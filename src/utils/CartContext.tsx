import React, { useState, createContext } from 'react'

export const CartContext = createContext();

export function CartProvider(props) {
    const [active, setActive] = useState(false)
    return (
        <CartContext.Provider value={[active,setActive]}>
            {props.children}
        </CartContext.Provider>
    )
}
