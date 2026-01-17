import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ClubTeamCard from "../components/ClubTeamCard";
import Footer from "../components/Footer";

export default function ClubTeams() {
  return (
    <>
      <Navbar />

      <Section title="Teams Representing Our Club">
        <div className="teams-grid">
          <ClubTeamCard
            teamName="CLUB BGMI Squad"
            game="Battlegrounds Mobile India"
            members={[
                "FROM UPCOMING EVENT"
            ]}
          />

          <ClubTeamCard
            teamName="CLUB Valorant Team"
            game="Valorant"
            members={[
              "FROM UPCOMING EVENT"
            ]}
          />

          <ClubTeamCard
            teamName="CLUB Free Fire Squad"
            game="Free Fire"
            members={[
              "FROM UPCOMING EVENT"
            ]}
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}
