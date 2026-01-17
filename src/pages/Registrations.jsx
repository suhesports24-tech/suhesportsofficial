import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../components/components.css";

export default function Registrations() {
  const games = [
    {
      name: "BGMI",
      route: "/register/bgmi",
      sub: "Battlegrounds Mobile India",
      players: "Squad • 4–5 Players",
      status: "UPCOMING", // LIVE | UPCOMING | ENDED
      theme: "bgmi",
    },
    {
      name: "Free Fire",
      route: "/register/freefire",
      sub: "Free Fire Battle India",
      players: "Squad • 4–5 Players",
      status: "UPCOMING",
      theme: "valorant",
    },

  ];

  return (
    <>
      <Navbar />

      <Section title="Game Registrations">
        <div className="reg-grid">
          {games.map((game) => {
            const Card = (
              <div className="reg-card glass animate">
                {/* STATUS BADGE */}
                <div className={`status-badge ${game.status.toLowerCase()}`}>
                  {game.status}
                </div>

                <div className={`reg-title ${game.theme}`}>
                  {game.name}
                </div>

                <div className="reg-sub">{game.sub}</div>

                <div className="reg-meta">
                  <div className="reg-players">{game.players}</div>
                  <div className="reg-cta">
                    {game.status === "LIVE" && "Register →"}
                    {game.status === "UPCOMING" && "Coming Soon"}
                    {game.status === "ENDED" && "Ended"}
                  </div>
                </div>
              </div>
            );

            // ✅ ONLY LIVE IS CLICKABLE
            if (game.status === "LIVE") {
              return (
                <Link
                  key={game.name}
                  to={game.route}
                  style={{ textDecoration: "none" }}
                >
                  {Card}
                </Link>
              );
            }

            // ❌ NOT CLICKABLE (BUT SAME LOOK)
            return <div key={game.name}>{Card}</div>;
          })}
        </div>
      </Section>

      <Footer />
    </>
  );
}
