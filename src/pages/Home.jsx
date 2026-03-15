import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
