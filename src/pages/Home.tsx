import Header from "../components/header/Header";
import CardItem from "../components/cardItem/CardItem";

import cardImages from '../../cardImages.json'

import {MagnifyingGlass} from "phosphor-react";

import '../App.css'
import {useState} from "react";

function Home() {
    const [ search, setSearch ] = useState('')

    const filterSearch = cardImages.filter((card) => card.id.startsWith(search));
    console.log(filterSearch)

  return (
    <>
        <Header shoppingCart />

        <div className='filter-container'>
            <div className='filter-icon'>
                <MagnifyingGlass size={22} color='white'/>
            </div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value) }
                />
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
            ) : 'nao tem nada'}

    </>
  )
}

export default Home