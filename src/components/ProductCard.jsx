import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
        style={{ width: "100%", maxWidth: "600px" }}
      />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div className="card-buttons">
        <Link to={`/product/${product.id}`}>
          <button>Ver detalle</button>
        </Link>

        <button onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;