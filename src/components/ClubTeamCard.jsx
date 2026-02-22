import "./components.css";

export default function ClubTeamCard({ teamName, game, members = [], logo }) {
  return (
    <div className="team-box">

      {/* Logo */}
      {logo && (
        <div className="team-logo-wrapper">
          <img src={logo} alt={teamName} className="team-logo" />
        </div>
      )}

      {/* Team Name */}
      <h3 className="team-title">{teamName}</h3>

      {/* Game Name */}
      <div className="team-game">{game}</div>

      {/* Members */}
      <div className="team-members">
        {members.map((m, index) => {
          const parts = m.split("|");
          const name = parts[0]?.trim();
          const role = parts[1]?.trim();

          return (
            <div key={index} className="member-row">
              <span className="member-name">{name}</span>
              {role && (
                <span
                  className={`member-role ${
                    role.includes("IGL") ? "captain" : ""
                  }`}
                >
                  {" "}— {role}
                </span>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}