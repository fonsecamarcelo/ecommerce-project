import { ImageSquare, ShoppingCartSimple } from "phosphor-react";

type Props = {
    title?: string;
    shoppingCart?: boolean;
}

import {Link} from "react-router-dom";
import './header.css'
import {useContext} from "react";
import {CartContext} from "../../services/cartService";


const Header = (props: Props) => {

    const { title = 'pics found', shoppingCart = false } = props;

    const { getTotalCartAmount } = useContext(CartContext);

    const total = getTotalCartAmount();

    return (
        <div className='header-container'>
            <div className='header-content'>
                <div className='header-title-content'>

                    <div className='header-icon'>
                        <ImageSquare color='white' size={28} />
                    </div>

                    <div className='header-title'>
                        <Link to='/'>{title}</Link>
                    </div>

                </div>

                {shoppingCart && (
                    <div className='header-shopping-cart'>
                        <div className='header-shopping-cart-icon'>
                            <Link to='/carrinho'>
                                <ShoppingCartSimple color='white' size={26} />
                            </Link>
                        </div>
                        <p>{`R$ ${total}`}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Header;
