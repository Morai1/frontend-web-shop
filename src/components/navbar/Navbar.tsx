import NavbarLogo from "./NavbarLogo";
import "../../styles/navbar/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavbarLogo />
      </div>
      <div className="nav-center">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/products" className="nav-item">
          Products
        </a>
        <a href="/about" className="nav-item">
          About
        </a>
      </div>
      <div className="nav-right">
        <button className="cart-button" onClick={navigateToCheckout}>
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
