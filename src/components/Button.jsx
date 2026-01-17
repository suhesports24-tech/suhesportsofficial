import "./components.css";

export default function Button({ children, type = "primary" }) {
  return (
    <button className={`btn ${type === "secondary" ? "btn-secondary" : ""}`}>
      {children}
    </button>
  );
}
