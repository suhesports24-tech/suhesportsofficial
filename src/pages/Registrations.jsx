import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 GOOGLE FORM URLS */
const FORM_URLS = {
  BGMI: "https://docs.google.com/forms/d/e/XXXXXXXX/viewform",
  "Free Fire": "https://docs.google.com/forms/d/e/YYYYYYYY/viewform",
};

export default function Registrations() {
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    {
      name: "BGMI",
      sub: "Battlegrounds Mobile India",
      players: "Squad • 4–5 Players",
      status: "UPCOMING", // LIVE | UPCOMING | ENDED
      theme: "bgmi",
    },
    {
      name: "Free Fire",
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
          {games.map((game) => (
            <div
              key={game.name}
              className="reg-card glass animate"
              style={{
                cursor: game.status === "LIVE" ? "pointer" : "default",
              }}
              onClick={() =>
                game.status === "LIVE" && setActiveGame(game)
              }
            >
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
          ))}
        </div>
      </Section>

      <Footer />

      {/* 🔔 LIVE REGISTRATION POPUP */}
      {activeGame && (
        <div className="popup-overlay">
          <div className="popup glass animate">
            <h3 style={{ marginBottom: "10px" }}>
              {activeGame.name} Registration
            </h3>

            <p style={{ opacity: 0.85, marginBottom: "20px" }}>
              Registrations are live. Click below to open the form.
            </p>

            <Button
              onClick={() =>
                window.open(
                  FORM_URLS[activeGame.name],
                  "_blank"
                )
              }
            >
              Open Registration Form →
            </Button>

            <div style={{ marginTop: "16px" }}>
              <Button
                type="secondary"
                onClick={() => setActiveGame(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
