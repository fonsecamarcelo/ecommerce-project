import './without-item.css'
import {SmileySad} from "phosphor-react";
const WithoutItem = () => {
    return (
        <div className='without-item-container'>
            <div className='without-item-content'>
                <h2>Página não encontrada</h2>
                <h3>que tal voltar para página inicial?</h3>
                <SmileySad size={26} />

            </div>
        </div>
    )
}
export default WithoutItem;