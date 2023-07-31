import {Minus, Plus } from "phosphor-react";

type Props = {
    id?: string;
    price: number;
    image: string;
}

import './card-item.css'
import {Link} from "react-router-dom";

const CardItem = (props: Props) => {

    const {id, price, image } = props;

    return (
        <div className='card-container row'>
                    <p>{`id ${id}`}</p>
                    <img
                        src={image}
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    />
                    <p>{`R$ ${price}`}</p>

                    <div className='card-price row'>
                        <div className='col-md'>
                            <Minus size={24} color='red'/>

                        </div>
                        <div className='col-md'>
                            <span>0</span>
                        </div>
                        <div className='col-md'>
                            <Plus size={24} color='green'/>
                        </div>
                    </div>

                    <Link to={`/acessarprodutos/${id}`}> acessar produtos </Link>
        </div>
    )
}
export default CardItem;