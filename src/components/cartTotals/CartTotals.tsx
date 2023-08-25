import { useContext } from "react";
import { CartContext } from "../../services/cartService";
import './cart-totals.css'

const CartTotals = () => {
    const { getTotalCartAmount } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();

    return (
        <>
            <div className='cart-totals-container'>
                <div className='cart-totals-content'>
                    <span>total</span>
                    <span>{totalAmount}</span>
                </div>
            </div>
        </>
    )
}
export default CartTotals;