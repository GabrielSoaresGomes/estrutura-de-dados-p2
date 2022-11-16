import { NavLink } from "react-router-dom";

import './NavItems.css'

const NavItems = ({text, to}) => {
  return (
    <li className="nav-list-item">
          <NavLink activeClassName='active' className="nav-link" to={to}>{text}</NavLink>
    </li>
  );
}

export default NavItems