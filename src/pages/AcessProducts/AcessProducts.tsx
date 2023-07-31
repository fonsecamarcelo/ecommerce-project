import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";

const AcessProducts = () => {
    const { id } = useParams()

    return (
        <>
            <Header shoppingCart/>
            <p>{id}</p>
        </>
    )
}
export default AcessProducts