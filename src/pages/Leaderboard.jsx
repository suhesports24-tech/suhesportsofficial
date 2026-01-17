import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {
  const leaderboardData = [
    { name: "", score: 0 },
    { name: "", score: 0 },
    { name: "", score: 0},
    { name: "", score: 0 },
    { name: "", score: 0 },
    { name: "", score: 0 },
  ];

  return (
    <>
      <Navbar />

      <Section title="Leaderboard">
        <Leaderboard data={leaderboardData} />
      </Section>

      <Footer />
    </>
  );
}
