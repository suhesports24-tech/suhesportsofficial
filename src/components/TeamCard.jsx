import "./components.css";

export default function TeamCard({ name, role, image }) {
  return (
    <div className="card glass team-card animate">
      <div className="team-avatar">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span>{name.charAt(0)}</span>
        )}
      </div>

      <div className="team-name">{name}</div>
      <div className="team-role">{role}</div>
    </div>
  );
}
