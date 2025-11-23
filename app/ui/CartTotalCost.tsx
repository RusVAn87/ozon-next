import { useCart } from "../providers/CartProvider";

export default function CartTotalCost() {
    const { cartItems } = useCart(); // cartItems: CartItem[]
    const totalCost = cartItems.reduce((sum, item) => sum + (+item.count * +item.price), 0)

    return (
        <div className="cart-total">Общая сумма: <span>{totalCost}</span> ₽</div>
    )
}