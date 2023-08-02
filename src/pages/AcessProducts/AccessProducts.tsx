import Header from "../../components/header/Header";
import {Link, useParams} from "react-router-dom";
import cardImages from '../../../cardImages.json'
import WithoutItem from "../../components/WithoutItem/WithoutItem";
import {ArrowBendUpLeft} from "phosphor-react";

import './access-products.css'

const AccessProducts = () => {
    const { id } = useParams();
    const product = cardImages.find((info) => info.id === id);

    const textLorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


    return (
        <>
            <Header shoppingCart />
            <div className='access-product-go-to-home'>
                <Link to='/' >{<ArrowBendUpLeft size={26} />}</Link>
            </div>

            <div className='access-product-container'>


                <div className='access-product-content '>
                    {product ? (
                        <div>
                            <span>{`id ${product.id}`}</span>

                            <img
                                src={product.download_url}
                                style={{ width: '200px', height: '200px', margin: '10px' }}
                            />
                            <span>{`Autor ${product.author}`}</span>

                            <h3>Descrição</h3>
                            <p>{textLorem}</p>
                        </div>
                    ) : <WithoutItem />
                    }
                </div>
            </div>


        </>
    )
}
export default AccessProducts