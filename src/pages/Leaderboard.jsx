import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  // 🔥 FREE FIRE DATA
  const freeFireData = [
    { name: "TITAN ESP", score: 136 },
    { name: "Caution!!", score: 130 },
    { name: "ZEDX", score: 109 },
    { name: "CHAMPS", score: 104 },
  ];

  // 🎮 BGMI DATA
  const bgmiData = [
   { name: "DMWU", score: 134 },
    { name: "VOID ACE", score: 106 },
    { name: "GENUINE ESPORTS", score: 95 },
    { name: "TR", score: 78 },
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥  Standings of Teams After INTRA ">

        <div className="leaderboard-grid">
         {/* BGMI TABLE */}
          <Leaderboard title="BGMI " data={bgmiData} /> <br></br><br></br>
          {/* FREE FIRE TABLE */}
          <Leaderboard title="Free Fire " data={freeFireData} /> 

        </div>

      </Section>

      <Footer />
    </>
  );
}