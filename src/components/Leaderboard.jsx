import "./components.css";

export default function Leaderboard({ title, data }) {
  return (
    <div className="leaderboard glass animate">
      {/* ✅ Dynamic Group Title */}
      <div className="lb-title">🏆 {title}</div>

      <div className="lb-row header">
        <div>Rank</div>
        <div>Team Name</div>
        <div>Score</div>
      </div>

      {data.map((player, index) => (
        <div
          key={player.name}
          className={`lb-row ${index < 4 ? "top" : ""}`}
        >
          <div className="lb-rank">#{index + 1}</div>
          <div className="lb-name">{player.name}</div>
          <div className="lb-score">{player.score}</div>
        </div>
      ))}
    </div>
  );
}
