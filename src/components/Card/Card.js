import './Card.css'
import {Link} from "react-router-dom";

const Card = ({title, text, to, imageUrl}) => {
    return (
        <div className='container-card'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#191a19" fill-opacity="1" d="M0,224L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div className='card'>
                <div className='thumb-card'><img src={imageUrl} /></div>
                <div className='contwent-card'>
                    <Link to={to}>{title}</Link>
                    <div className='text-card'>{text}</div>
                </div>            
            </div>
            <svg className='svg-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#191a19" fill-opacity="1" d="M0,32L1440,64L1440,0L0,0Z"></path>
            </svg>
        </div>    
    )
}

export default Card