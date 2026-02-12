import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const groupA = [
    { name:"TITAN ESP", score:93 },
    { name:"Galaxy Racers", score:57 },
    { name:"Lungi Hunters", score:35},
    { name:"Team Neural strike", score:29},

  ];

  const groupB = [
    { name: "ZEDxESPORTS", score:68 },
    { name: "INDIA 🇮🇳", score:56 },
    { name: "CHAMPS", score:53 },
    { name: "Caution !!!", score:48 },

  ];

  const groupC = [
    { name:"Team EGO", score:60 },
    { name:"Team OBLYX ", score:52 },
    { name:"Team Matrix", score:51 },
    { name:"TOXIC", score:41 },
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥 Free Fire Day - 1 Standings">
        <div className="leaderboard-grid">
          <Leaderboard title="Group A" data={groupA} /> <br></br> <br></br>
          <Leaderboard title="Group B" data={groupB} /> <br></br> <br></br>
          <Leaderboard title="Group C" data={groupC} />
        </div>
      </Section>

      <Footer />
    </>
  );
}
