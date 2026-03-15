import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className="logo"
        style={{ fontFamily: "Bile, sans-serif", fontSize: "32px", letterSpacing: "2px" }}
      >
        MAKA
      </Link>

      <Link to="/cart" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Carrito ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
