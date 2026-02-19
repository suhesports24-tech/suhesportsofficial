import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function LeaderboardPage() {

  const grouptotal = [
    { name:"DMWU", score:80},
    { name:"VOID ACE", score:73},
    { name:"GENUINE ESPORTS", score:65},
    { name:"TR", score:50},
    { name:"GODLIKE", score:47},
    { name:"PAY", score:46},
    { name:"ZENLOCK", score:21},
    { name:"MGJ", score:17},
    { name:"BLOOD STRIKERS", score:14},
    { name:"SOUL", score:11},
    { name:"THE OG'S", score:5},
    { name:"DUM", score:2},
  ];

  return (
    <>
      <Navbar />

      <Section title="🔥 BGMI Day 2  Standings ">
        <div className="leaderboard-grid">
          <Leaderboard title="Group Table" data={grouptotal} /> 
        </div>
      </Section>

      <Footer />
    </>
  );
}
