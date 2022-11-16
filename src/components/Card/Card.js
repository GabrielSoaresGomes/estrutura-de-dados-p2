import './Card.css'
import {Link} from "react-router-dom";

const Card = ({text, to, linkText}) => {
    return (
        <div className='card'>
            {text}
            <br/>
            <Link to={to}>{linkText}</Link>
        </div>
    )
}

export default Card