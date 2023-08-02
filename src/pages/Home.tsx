import { useState } from "react";
import Header from "../components/header/Header";
import CardItem from "../components/cardItem/CardItem";

import cardImages from '../../cardImages.json'

import '../App.css'

function Home() {
    // const [price, isPrice] = useState(0);

  return (
    <>
        <Header shoppingCart />

        {cardImages.length > 0 ? (
            <div className='row'>
                {cardImages.map((info) => {
                    return (
                        <div className='col-12 col-md-4'>
                            <CardItem
                                id={info.id}
                                price={info.price}
                                image={info.download_url}
                            />
                        </div>
                    )
                })}
            </div>
        ) : 'nao tem nada'}
    </>
  )
}

export default Home
