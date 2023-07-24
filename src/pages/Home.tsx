import '../App.css'
import Header from "../components/header/Header";
import CardItem from "../components/cardItem/CardItem";

import cardImages from '../../cardImages.json'

function Home() {

  return (
    <>
        <Header shoppingCart/>

        {cardImages.length > 0 ? (
            cardImages.map((info) => {
                return (
                    <CardItem
                        id={info.id}
                        image={info.url}
                    />
                    )

            })
        ) : 'nao tem nada'}
    </>
  )
}

export default Home
