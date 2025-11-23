'use client'

import { useCart } from "../providers/CartProvider";

export default function CartButtonProductCounter() {
    const { cartItems } = useCart(); // cartItems: CartItem[]
    const totalCount = (cartItems ?? []).reduce((sum, item) => sum + item.count, 0);

    return (
        <span className="counter">{totalCount}</span>
    )
}