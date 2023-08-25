import {Minus, Plus} from "phosphor-react";
import {useContext} from "react";
import { CartContext } from "../../services/cartService";
import './products-at-cart.css';

const ProductsAtCart = (props) => {
    const {id, author, price, download_url: image} = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

    return (
        <>
            <div className='products-at-cart-container'>
                <div className='products-at-cart-content row'>
                    <img
                        className='col-md'
                        src={image}
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    />

                    <span className='col-md'>{`id ${id}`}</span>
                    <div className='col-md row'>
                        <span className='col-12'>Autor :</span>
                        <span className='col-12'>{author}</span>
                    </div>
                    <span className='col-md'>{`Preço: R$ ${price}`}</span>

                    <div className='cart-card-price row'>
                        <button onClick={() => addToCart(id)}>
                            <Plus size={24} color='green'/>
                        </button>

                        <input className='cart-card-price-input' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>

                        <button onClick={() => removeFromCart(id)}>
                            <Minus size={24} color='red'/>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsAtCart;