import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="title">Catálogo de productos</h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products-container">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No se encontraron productos</p>
        )}
      </div>
    </div>
  );
}

export default Home;