import { useState } from "react";
import { products } from "../Data/Product";
import ProductCard from "./ProductCard";
import Filters from "../Components/Filters";
import SearchBar from "../Components/SearchBar";


export default function ProductList() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (status ? p.status === status : true)
  );

  return (
    <div className="container">
      <h1>Product Disclosures</h1>

      <SearchBar onSearch={setSearch} />
      <Filters onStatusChange={setStatus} />

      <div className="grid">
        {filtered.length === 0 && (
          <p className="empty">No products match your filters.</p>
        )}

        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
