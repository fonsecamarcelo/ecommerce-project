import {useState} from "react";
import Header from "../components/header/Header";
import CardItem from "../components/cardItem/CardItem";

import cardImages from '../../cardImages.json'

import { MagnifyingGlass } from "phosphor-react";

import Footer from "../components/footer/footer";
import WithoutItem from "../components/withoutItem/WithoutItem";
import '../App.css'


function Home() {
    const [ search, setSearch ] = useState('');
    const filterSearch = cardImages.filter((card) => card.id.startsWith(search) || card.author.startsWith(search));

    console.log(cardImages)


  return (
    <>
            <Header shoppingCart />

            <div className='filter-container'>
                <div className='filter-icon'>
                    <MagnifyingGlass size={22} color='white'/>
                </div>
                <div className='filter-search'>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value) }
                    />
                </div>

            </div>

        {filterSearch.length > 0 ?
            (
                <div className='row'>
                    {filterSearch.map((info) => {
                        return (
                            <div className='col-12 col-md-4' key={info.id}>
                                <CardItem
                                    id={info.id}
                                    price={info.price}
                                    image={info.download_url}
                                />
                            </div>
                        )
                    })}
                </div>
            ) : <WithoutItem />}

        <Footer/>
    </>
  )
}

export default Home