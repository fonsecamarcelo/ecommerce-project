
import {Minus, Plus } from "phosphor-react";

type Props = {
    id?: string;
    image: string;
}

import './card-item.css'

const CardItem = (props: Props) => {

    const {id, image } = props;

    return (
        <div className='card-container'>
            <div className='card-content'>
                <div className='card-items'>
                    <img src={image}/>
                    <p>{`id ${id}`}</p>
                    <div>
                        <Minus size={8} color='red'/>
                        <Plus size={8} color='green'/>
                    </div>
                    <p>acessar produtos</p>
                </div>
            </div>
        </div>
    )
}
export default CardItem;