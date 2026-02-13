import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const groupA = [
    { name:"TITAN ESP", score:215 },
    { name:"Galaxy Racers", score:189 },
    { name:"Team Neural strike", score:127},
    { name:"SOUL BREAKERS", score:107},

  ];

  const groupB = [
    { name: "Caution !!!", score:167},
    { name: "ZEDxESPORTS", score:152},
    { name: "CHAMPS", score:147},
    { name: "Hellfire", score:126},

  ];

  const groupC = [
    { name:"Team EGO", score:184},
    { name:"Jai Bhavani Team", score:173},
    { name:"TOXIC", score:156},
    { name:"Team OBLYX ", score:138},
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥 Free Fire Final Day  Standings & Selected To Lan Finals">
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
