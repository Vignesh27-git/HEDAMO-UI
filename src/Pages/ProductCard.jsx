import { Link } from "react-router-dom";
import StatusBadge from "../Components/StatusBadge";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card hover">
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>{product.producer}</p>
      <StatusBadge status={product.status} />
      <small>Updated: {product.updatedAt}</small>
    </Link>
  );
}
