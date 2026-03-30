import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    total,
    clearCart
  } = useCart();

  return (
    <div className="container">
      <h2 className="title">Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              
              <div>
                <h4>{item.name}</h4>
                <p>${item.price} x {item.quantity}</p>
              </div>

              <div className="card-buttons">
                <button onClick={() => decreaseQuantity(item.id)}>−</button>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>

            </div>
          ))}

          <h3 className="total">Total: ${total}</h3>

          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            
            <button onClick={clearCart}>
              Vaciar carrito
            </button>

            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;