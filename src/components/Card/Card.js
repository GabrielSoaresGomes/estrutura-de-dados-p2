import './Card.css'
import {Link} from "react-router-dom";

const Card = ({title, text, to, imageUrl}) => {
    return (
        <div className='card'>
            <div className='thumb-card'><img src={imageUrl} /></div>
            <div className='contwent-card'>
                <Link to={to}>{title}</Link>
                <div className='text-card'>{text}</div>
            </div>            
        </div>
    )
}

export default Card