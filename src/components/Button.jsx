import "./components.css";

export default function Button({
  children,
  type = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn ${
        type === "secondary" ? "btn-secondary" : ""
      }`}
    >
      {children}
    </button>
  );
}
