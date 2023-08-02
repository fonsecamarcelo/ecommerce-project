import {Minus, Plus } from "phosphor-react";
import {Link} from "react-router-dom";
import './card-item.css'

type Props = {
    id?: string;
    price?: number;
    image: string;
}

const CardItem = (props: Props) => {

    const {id, price, image } = props;

    return (
        <div className='teste row'>
            <div className='card-container col-12'>
                <div className='testedois'>
                    <p>{`id ${id}`}</p>
                </div>
                <div className='testetres'>
                    <img
                        src={image}
                        style={{ width: '200px', height: '200px', margin: '10px' }}
                    />
                </div>
                <div className='testequatro'>
                    <p>{`R$ ${price}`}</p>
                </div>

                    <div className='card-price row'>
                        <div className='col-md-2'>
                            <Minus size={24} color='red'/>

                        </div>
                        <div className='col-md-2'>
                            <span>0</span>
                        </div>
                        <div className='col-md-2'>
                            <Plus size={24} color='green'/>
                        </div>
                </div>

                <Link to={`/acessarprodutos/${id}`}> acessar produtos </Link>
            </div>
        </div>
    )
}
export default CardItem;