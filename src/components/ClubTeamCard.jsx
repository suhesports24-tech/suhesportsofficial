import "./components.css";

export default function ClubTeamCard({ teamName, game, members }) {
  return (
    <div className="team-box glass animate">
      <h3>{teamName}</h3>
      <div className="team-game">{game}</div>

      <div className="team-members">
        {members.map((m, index) => (
          <div key={index}>• {m}</div>
        ))}
      </div>
    </div>
  );
}
