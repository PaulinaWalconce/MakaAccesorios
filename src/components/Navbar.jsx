import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">MAKA</Link>
      <Link to="/cart">Carrito ({cart.length})</Link>
    </nav>
  );
}

export default Navbar;
