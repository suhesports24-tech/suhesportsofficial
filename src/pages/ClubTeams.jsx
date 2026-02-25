import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ClubTeamCard from "../components/ClubTeamCard";
import Footer from "../components/Footer";

// BGMI Logos
import bgmi1 from "../assets/bgmi1.jpeg";
import bgmi2 from "../assets/bgmi2.jpeg";
import bgmi3 from "../assets/bgmi3.jpeg";
import bgmi4 from "../assets/bgmi4.jpeg";

// Free Fire Logos
import ff1 from "../assets/ff1.jpeg";
import ff2 from "../assets/ff2.jpeg";
import ff3 from "../assets/ff3.jpeg";
import ff4 from "../assets/ff4.jpeg";

export default function ClubTeams() {
  return (
    <>
      <Navbar />

      {/* ================= BGMI SECTION ================= */}
      <Section title="BGMI Teams Representing Our Club">
        <div className="teams-grid">

          <ClubTeamCard
            teamName="DMWU"
            game="Battlegrounds Mobile India"
            logo={bgmi1}
            members={[
              "Likesh | IGL",
              "Shanks | Entry Fragger",
              "Vrishabh | Support Player",
              "Harsha | Assaulter + Free Man",
              "Vashisht | Support Player"
            ]}
          />

          <ClubTeamCard
            teamName="VOID ACE"
            game="Battlegrounds Mobile India"
            logo={bgmi2}
            members={[
              "Tanishq | IGL",
              "Cherry | Fragger",
              "Adam | Scout",
              "2018 Player | Support",
              "Oraf | Support"
            ]}
          />

          <ClubTeamCard
            teamName="GENUINE ESPORTS"
            game="Battlegrounds Mobile India"
            logo={bgmi3}
            members={[
              "GnxTakashik | IGL",
              "GnxLuffy | Assaulter",
              "GnxEshwar | Entry Fragger",
              "GnxAryan | Assaulter",
              "GnxLucky | Support",
              "GodlSalvator | Support"
            ]}
          />

          <ClubTeamCard
            teamName="TETHER ROGUE"
            game="Battlegrounds Mobile India"
            logo={bgmi4}
            members={[
              "Zenith | IGL",
              "Slammer | Supporter",
              "Akash | Entry Fragger",
              "Death Strox | Free Man"
            ]}
          />

        </div>
      </Section>

      {/* ================= FREE FIRE SECTION ================= */}
      <Section title="Free Fire Teams Representing Our Club">
        <div className="teams-grid">

          <ClubTeamCard
            teamName="TITAN ESP"
            game="Free Fire"
            logo={ff1}
            members={[
              "Bunny Avp | Primary Rusher (IGL)",
              "Op Nobita | Secondary Rusher",
              "Vilohit | Assaulter",
              "Gt Akash 06 | Supporter"
            ]}
          />

          <ClubTeamCard
            teamName="CAUTION!!"
            game="Free Fire"
            logo={ff2}
            members={[
              "Rnc Vishnu | Primary Rusher (IGL)",
              "Akrevanth | Secondary Rusher",
              "Ag Rocklee | Assaulter",
              "Sen Varshith | Sniper",
              "Nithin FF | Sub"
            ]}
          />

          <ClubTeamCard
            teamName="ZEDX"
            game="Free Fire"
            logo={ff3}
            members={[
              "Zx Reddy | Secondary (IGL)",
              "Harsha FF | Primary",
              "God Itachi | Sniper",
              "Asish | Supporter"
            ]}
          />

          <ClubTeamCard
            teamName="CHAMPS"
            game="Free Fire"
            logo={ff4}
            members={[
              "Champ | Primary Rusher (IGL)",
              "Prime | Secondary Rusher",
              "Pranay | Scout",
              "Chandu 18 | Supporter"
            ]}
          />

        </div>
      </Section>

      <Footer />
    </>
  );
}