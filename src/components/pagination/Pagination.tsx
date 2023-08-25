import { useEffect, useState } from "react";
import cardImages from '../../../cardImages.json'
import CardItem from "../cardItem/CardItem";
import {MagnifyingGlass} from "phosphor-react";

import './pagination.css';

type Props = {
        image?: string;
}

const Pagination = (props: Props) => {

    const {image} = props;

    const [ items, setItems ] = useState([]);
    const [ itemsPerPage, ] = useState(16);
    const [ currentPage, setCurrentPage ] = useState(0);


    const pages = Math.ceil(items.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    useEffect(() => {
        setItems(cardImages)
    }, [])


    return (
        <>
            {currentItems.map(item => {
                return <CardItem key={item.id} item={item} image={image} />
            })}

            <div className='pagination'>
                {Array.from(Array(pages), (item, index) => {
                    return <button className='button-pagination' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}></button>
                })}
            </div>
        </>
    )
}
export default Pagination;