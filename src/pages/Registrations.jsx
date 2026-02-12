import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 GOOGLE FORM URLS */
const FORM_URLS = {
  BGMI: "https://docs.google.com/forms/d/e/1FAIpQLSfiE_Us8UPOk-fXI8jtEPCmMSm5pj-5lCeHHWnk7yfpsF1j2Q/viewform?usp=dialog",
  "Free Fire":
    "https://docs.google.com/forms/d/e/1FAIpQLSeN7VD2SzpBjHeFBwrY7fE0TLOCK-8tnap3zsEn4hDXJrFV6g/viewform?usp=header",
  Minecraft: "https://docs.google.com/forms/d/e/ZZZZZZZZ/viewform",
};

/* 📊 GOOGLE SHEET API */
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
      status: "LIVE",
      theme: "bgmi",
    },
    {
      name: "Free Fire",
      sub: "Free Fire Battle India",
      players: "Squad • 4–5 Players",
      status: "ENDED",
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

  /* ✅ SUBMIT */
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

    const formUrl = FORM_URLS[activeGame.name];
    window.location.href = formUrl;

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
        {/* ✅ CONTACT LINE (THIS IS THE FIX) */}
        <p className="section-note">
          If you face any issues, contact{" "}
          <a href="tel:6302898098" className="contact-link">
            6302898098
          </a>{" "}
          – Rithvik Nag (Technical Head)
        </p>

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
