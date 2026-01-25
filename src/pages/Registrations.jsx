import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 GOOGLE FORM URLS */
const FORM_URLS = {
  BGMI: "https://docs.google.com/forms/d/e/1FAIpQLScPoYi1ACNYxZxzqfaipu_-8cwECSRDGZ-kvrbFf1rf8rKcXQ/viewform",
  "Free Fire": "https://docs.google.com/forms/d/e/YYYYYYYY/viewform",
  Minecraft: "https://docs.google.com/forms/d/e/ZZZZZZZZ/viewform",
};

/* 📊 GOOGLE SHEET API (Apps Script Web App URL) */
const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbwOzbQoeHmalMmYUVmp_upOtk4VC4qnWBcExL1ZQfczVkgUtW52kI90PsCQNioye6e_/exec";

export default function Registrations() {
  const [activeGame, setActiveGame] = useState(null);

  const [teamForm, setTeamForm] = useState({
    teamName: "",
    leaderName: "",
    phone: "",
    participants: "",
  });

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
      theme: "freefire",
    },
    {
      name: "Minecraft",
      sub: "Minecraft Battle",
      players: "Squad • 4–5 Players",
      status: "UPCOMING",
      theme: "minecraft",
    },
  ];

  /* 🔄 HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setTeamForm({
      ...teamForm,
      [e.target.name]: e.target.value,
    });
  };

  /* ✅ SUBMIT → REDIRECT → SAVE IN BACKGROUND */
  const handleSubmit = () => {
    if (
      !teamForm.teamName ||
      !teamForm.leaderName ||
      !teamForm.phone ||
      !teamForm.participants
    ) {
      alert("Please fill all fields");
      return;
    }

    // ✅ 1. REDIRECT IMMEDIATELY (BROWSER ALLOWS THIS)
    const formUrl = FORM_URLS[activeGame.name];
    window.location.href = formUrl;

    // ✅ 2. SAVE TO GOOGLE SHEET IN BACKGROUND (NO AWAIT)
    fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({
        game: activeGame.name,
        teamName: teamForm.teamName,
        leaderName: teamForm.leaderName,
        phone: teamForm.phone,
        participants: teamForm.participants,
      }),
    }).catch((err) => {
      console.error("Google Sheet save failed:", err);
    });
  };

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

      {/* 🔔 REGISTRATION POPUP */}
      {activeGame && (
        <div className="popup-overlay">
          <div className="popup glass animate">
            <h3>{activeGame.name} Registration</h3>

            <form className="team-form">
              <input
                type="text"
                name="teamName"
                placeholder="Team Name"
                value={teamForm.teamName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="leaderName"
                placeholder="Team Leader Name"
                value={teamForm.leaderName}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Team Leader Phone Number"
                value={teamForm.phone}
                onChange={handleChange}
              />

              <input
                type="number"
                name="participants"
                placeholder="Number of Participants"
                value={teamForm.participants}
                onChange={handleChange}
              />

              <Button type="button" onClick={handleSubmit}>
                Continue to Registration →
              </Button>
            </form>

            <div className="popup-close">
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
