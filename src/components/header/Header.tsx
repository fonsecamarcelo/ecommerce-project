
import {GitlabLogo, ImageSquare, ShoppingCartSimple} from "phosphor-react";

type Props = {
    title?: string;
    shoppingCart?: boolean;
}

import {Link} from "react-router-dom";
import './header.css'


const Header = (props: Props) => {

    const { title = 'pics found', shoppingCart = false } = props;

    return (
        <div className='header-container'>
            <div className='header-content '>
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
                            <ShoppingCartSimple color='white' size={26} />
                        </div>
                        <p>R$ 0,00</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Header;
