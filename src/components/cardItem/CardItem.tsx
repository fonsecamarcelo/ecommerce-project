import { Minus, Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import {useContext} from "react";
import { CartContext } from "../../services/cartService";
import './card-item.css'

type Props = {
    image: string;
    id: string;
    price: number;

}

const CardItem = (props: Props) => {
    const { image, id, price } = props;

    const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

    const cartItemsAmount = cartItems[id];

    return (
        <div className='teste row'>
            <div className='card-container col-12'>
                <div className='card-info'>
                    <p>{`Id ${id}`}</p>
                </div>
                <div className='card-info'>
                    <img
                        src={image}
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    />
                </div>
                <div className='card-info'>
                    <p>{`R$ ${price.toFixed(2)}`}</p>
                </div>

                    <div className='card-price row'>
                        <div className='col-md-2'>
                            <button onClick={() => removeFromCart(id)}>
                                <Minus size={24} color='red'/>
                            </button>

                        </div>
                        <div className='col-md-2'>
                            <span>{cartItemsAmount}</span>
                        </div>
                        <div className='col-md-2'>
                            <button onClick={() => addToCart(id)}>
                                <Plus size={24} color='green'/>
                            </button>
                        </div>
                </div>

                <Link to={`/acessarprodutos/${id}`}> acessar produtos </Link>
            </div>
        </div>
    )
}
export default CardItem;