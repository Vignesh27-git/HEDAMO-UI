export default function Filters({ onStatusChange }) {
  return (
    <select className="input" onChange={e => onStatusChange(e.target.value)}>
      <option value="">All Status</option>
      <option value="Draft">Draft</option>
      <option value="Submitted">Submitted</option>
      <option value="Published">Published</option>
    </select>
  );
}
