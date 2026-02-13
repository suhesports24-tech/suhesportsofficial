import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const groupA = [
    { name:"TITAN ESP", score:156 },
    { name:"Galaxy Racers", score:118 },
    { name:"Team Neural strike", score:78},
    { name:"SOUL BREAKERS", score:64},

  ];

  const groupB = [
    { name: "ZEDxESPORTS", score:152 },
    { name: "CHAMPS", score:112 },
    { name: "Caution !!!", score:105 },
    { name: "Hellfire", score:78 },

  ];

  const groupC = [
    { name:"Team EGO", score:127},
    { name:"Jai Bhavani Team", score:106},
    { name:"Team OBLYX ", score:99},
    { name:"Black Bulls", score:95},
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥 Free Fire Day - 2 Standings">
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
