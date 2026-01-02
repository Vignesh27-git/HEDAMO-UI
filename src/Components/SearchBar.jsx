export default function SearchBar({ onSearch }) {
  return (
    <input
      className="input"
      placeholder="Search products"
      onChange={e => onSearch(e.target.value)}
    />
  );
}
