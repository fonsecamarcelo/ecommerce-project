import CardItem from "../cardItem/CardItem";
import {MagnifyingGlass} from "phosphor-react";
import cardImages from "../../../cardImages.json";
import { useState } from "react";

type Props = {
    item: any;
}

const Products = (props: Props) => {

    const {item} = props

    const [ search, setSearch ] = useState('');

    const filterSearch = cardImages.filter((card) => card.id.startsWith(search) || card.author.startsWith(search));

    return (
        <>
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
                            console.log('oiiiiii', info)
                            return (
                                <div className='col-12 col-md-4' key={item.id}>
                                    <CardItem item={item} image={info.download_url}/>
                                </div>
                            )
                        })}
                    </div>
                ) : 'nao tem nada'}
        </>
    )
}
export default Products