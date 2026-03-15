import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="container">
      <h2>Carrito</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} x {item.quantity}</p>
          <p>${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <Link to="/checkout">
        <button>Proceder al pago</button>
      </Link>
    </div>
  );
}

export default Cart;
