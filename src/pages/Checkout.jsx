import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: ""
  });

  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.address || !form.email) {
      alert("Por favor completa todos los campos");
      return;
    }

    setOrderCompleted(true);
    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (cart.length === 0 && !orderCompleted) {
    return (
      <div className="container">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="title">Finalizar compra</h2>

      {orderCompleted ? (
        <div>
          <h3>🎉 ¡Compra realizada con éxito!</h3>
          <p>Gracias por tu compra en MAKA.</p>
          <p>Serás redirigido al inicio...</p>
        </div>
      ) : (
        <>
          <h3>Total a pagar: ${total}</h3>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={form.address}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
            />

            <button type="submit">
              Confirmar compra
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;