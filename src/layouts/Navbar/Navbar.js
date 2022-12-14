import NavItems from "../../components/NavItems/NavItems";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <NavItems text='Home' to='/' />
      </ul>
    </nav>
  );
}

export default Navbar;