import Header from "../../components/header/Header";
import {Link, useParams} from "react-router-dom";
import cardImages from '../../../cardImages.json'
import WithoutItem from "../../components/withoutItem/WithoutItem";
import {ArrowBendUpLeft} from "phosphor-react";

import './access-products.css'
import IdBadge from "../../components/idBadge/IdBadge";

const AccessProducts = () => {
    const { id } = useParams();
    const product = cardImages.find((info) => info.id === id);

const textLorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'

    return (
        <>
            <Header shoppingCart />

            <div className='access-product-go-to-home'>
                <Link to='/' >{<ArrowBendUpLeft size={26} />}</Link>
            </div>

            <div className='access-product-container '>
                <div className='access-product-content '>
                    {product ? (
                        <div className='row'>

                            <div className='access-product-image col-12 col-sm'>
                                <img
                                    src={product.download_url}
                                    // style={{ width: '400px', height: '300px', margin: '10px' }}
                                />
                            </div>


                            <div className='access-product-info col-12 col-md-12'>
                                <span>{`Id: ${product.id}`}</span>
                                <span>{`Autor: ${product.author}`}</span>
                            </div>

                            <div className='access-product-description col-12 col-sm'>
                                <h3>Descrição</h3>
                                <p>{textLorem}</p>
                            </div>

                        </div>
                    ) : <WithoutItem />
                    }
                </div>
            </div>


        </>
    )
}
export default AccessProducts