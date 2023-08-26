import './id-badge.css'
const IdBadge = () => {

    const id = '2'

    return (
        <div className='id-bagde-container'>
            <div className='id-bagde-content'>
                <span>Id</span>
                <span>{id}</span>
            </div>
        </div>
    )
}
export default IdBadge;