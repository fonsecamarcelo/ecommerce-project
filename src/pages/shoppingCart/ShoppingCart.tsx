import Header from "../../components/header/Header";
import cardImages from '../../../cardImages.json'
import { useContext } from "react";
import { CartContext } from "../../services/cartService";
import ProductsAtCart from "../../components/productsAtCart/ProductsAtCart";
import { Link } from "react-router-dom";
import { ArrowBendUpLeft } from "phosphor-react";
import CartTotals from "../../components/cartTotals/CartTotals";
import './shopping-cart.css'

const ShoppingCart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <>
            <Header shoppingCart/>

            <div className='shopping-cart-actions'>
                <div className='shopping-cart-actions-anchor'>
                    <Link to='/' >{<ArrowBendUpLeft size={26} />}</Link>
                </div>
                <button className='shopping-cart-button'>Finalizar</button>
            </div>

            <div className='shopping-cart-content'>
                <div>
                    {cardImages.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <>
                                    <ProductsAtCart data={product}/>
                                </>
                            )
                        }
                    })}
                </div>
                <CartTotals/>
            </div>



        </>
    )
}
export default ShoppingCart