import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PAGES */
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import ClubTeams from "./pages/ClubTeams";
import LeaderboardPage from "./pages/Leaderboard";
import Join from "./pages/Join";
import Registrations from "./pages/Registrations";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/club-teams" element={<ClubTeams />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/registrations" element={<Registrations />} />
        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <div style={{ padding: "120px", textAlign: "center" }}>
              <h2 style={{ color: "#ff9f1c" }}>404 – Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
