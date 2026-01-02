import { useParams, Link } from "react-router-dom";
import { products } from "../Data/Product";
import StatusBadge from "../Components/StatusBadge";


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <Link to="/">← Back</Link>

      <h2>{product.name}</h2>
      <StatusBadge status={product.status} />

      <section className="card">
        <h3>Disclosure Summary</h3>
        <p><strong>Declared by:</strong> {product.declaredBy}</p>
        <p><strong>Last updated:</strong> {product.updatedAt}</p>
        <p><strong>Evidence attached:</strong> {product.evidenceCount}</p>
      </section>

      <section className="card">
        <h3>Version History</h3>
        {product.versions.map(v => (
          <p key={v.version}>
            {v.version} — {v.date} ({v.status})
          </p>
        ))}
      </section>

      <div className="disclaimer">
        This page presents producer-declared information; it is not certification or verification.
      </div>
    </div>
  );
}
