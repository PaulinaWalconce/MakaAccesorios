import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MAKA
      </Link>

      <div className="nav-links">
        <Link to="/cart" className="cart-link">
          🛒 Carrito ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;