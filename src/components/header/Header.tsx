// import {Link} from "react-router-dom";

import {GitlabLogo, ShoppingCartSimple} from "phosphor-react";

type Props = {
    title?: string;
    shoppingCart?: boolean;
}

import './header.css'
// import ShoppingCart from "../shoppingCart/ShoppingCart";

const Header = (props: Props) => {

    const { title = 'ecommerce', shoppingCart = false } = props;

    return (
        <div className='header-container row'>
            <div className='header-content col-12'>
                <div className='header-title-content'>

                    <div className='header-icon'>
                        <GitlabLogo color='white' size={16} />
                    </div>

                    <div className='header-title'>
                        <p>{title}</p>
                    </div>

                </div>

                {shoppingCart && (
                    <div className='header-shopping-cart'>
                        <div className='header-shopping-cart-icon'>
                            <ShoppingCartSimple color='white' size={14} />
                        </div>
                        <p>R$ 0,00</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Header;
