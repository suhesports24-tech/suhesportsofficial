import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const grouptotal = [
    { name:"GENUINE ESPORTS", score:38 },
    { name:"DMWU", score:38},
    { name:"VOID ACE", score:32},
    { name:"PAY", score:30},
    { name:"TR", score:22},
    { name:"MGJ", score:14},
    { name:"BLOOD STRIKERS", score:13},
    { name:"GODLIKE", score:12},
    { name:"ZENLOCK", score:12},
    { name:"SOUL", score:11},
    { name:"THE OG'S", score:2},
    { name:"DUM", score:2},
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥 BGMI Day 1  Standings ">
        <div className="leaderboard-grid">
          <Leaderboard title="Group Table" data={grouptotal} /> 
        </div>
      </Section>

      <Footer />
    </>
  );
}
