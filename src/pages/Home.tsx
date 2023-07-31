import { useState } from "react";
import Header from "../components/header/Header";
import CardItem from "../components/cardItem/CardItem";

import cardImages from '../../cardImages.json'

import '../App.css'

function Home() {
    const [price, isPrice] = useState(0);

  return (
    <>
        <Header shoppingCart />

        {cardImages.length > 0 ? (
            cardImages.map((info) => {
                const multiple = () => {
                }
                return (
                    <>
                        <CardItem
                            id={info.id}
                            price={info.price}
                            image={info.download_url}
                        />

                    </>
                    )
            })
        ) : 'nao tem nada'}
    </>
  )
}

export default Home
