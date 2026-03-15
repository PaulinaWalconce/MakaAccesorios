function Checkout() {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="text" placeholder="Dirección" required />
        <input type="email" placeholder="Correo electrónico" required />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
