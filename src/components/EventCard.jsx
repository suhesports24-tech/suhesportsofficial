import { Link } from "react-router-dom";
import "./components.css";

export default function EventCard({
  image,
  title,
  desc,
  status,
  showRegister = false, // 👈 default false
}) {
  return (
    <div className="event-card glass animate">
      <img src={image} alt={title} className="event-image" />

      <div className="event-title">{title}</div>
      <div className="event-desc">{desc}</div>

      <div className={`event-status ${status.toLowerCase()}`}>
        {status}
      </div>

      {/* ✅ Register only when explicitly enabled */}
      {showRegister && (
        <Link
          to="/register-game"
          style={{ marginTop: "10px", display: "inline-block" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
            Register →
          </span>
        </Link>
      )}
    </div>
  );
}
