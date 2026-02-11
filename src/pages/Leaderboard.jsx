import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const groupA = [
    { name: "", score: 0 },
    { name: "", score: 0 },
    { name: "", score: 0},
  ];

  const groupB = [
    { name: "", score: 0 },
    { name: "", score: 0 },
    { name: "", score: 0 },
  ];

  const groupC = [
    { name: "", score: 0 },
    { name: "", score: 0 },
    { name: "", score: 0 },
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
