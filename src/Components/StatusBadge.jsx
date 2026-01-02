function StatusBadge({ status }) {
  if (status === "active") {
    return <span className="active">Active</span>;
  }

  return <span className="inactive">Inactive</span>;
}

export default StatusBadge;
