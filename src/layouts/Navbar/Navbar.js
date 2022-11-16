import NavItems from "../../components/NavItems/NavItems";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <NavItems text='Home' to='/' />
        <NavItems text='Home' to='/1' />
      </ul>
    </nav>
  );
}

export default Navbar;