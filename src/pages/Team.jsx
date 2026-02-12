import Navbar from "../components/Navbar";
import Section from "../components/Section";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";
import rithvik from "../assets/team/rithvik.jpeg";
import vishal from "../assets/team/vishal.jpeg"
import Shreyas from "../assets/team/Shreyas.jpeg"
import jaddu from "../assets/team/jaddu.jpeg"
import noxs from "../assets/team/noxs.jpeg"
import prassana from "../assets/team/prasaana.jpeg"
import vasi from "../assets/team/vasii.jpeg"
import harsha from "../assets/team/harsha.jpeg"
import saketh from "../assets/team/saketh.jpeg"
import Jashwanth from "../assets/team/jash.jpeg"
import chaii from "../assets/team/chaii.jpeg"

export default function Team() {
  return (
    <>
      <Navbar />
      <Section title="Our Team">
        <div className="team-grid">
          <TeamCard name="Sai Prasanna" role="President"image={prassana} />
          <TeamCard name="Vasista Sravan" role="Vice President" image={vasi} />
          <TeamCard name="Harsha Vardhan" role="Secretary"image={harsha} />
          <TeamCard name="Rithvik Nag" role="Technical Head"image={rithvik}  />
          <TeamCard name="Sai Jashwanth" role="Treasurer"image={Jashwanth} />
          <TeamCard name="Pranav" role="Gaming Lead" />
          <TeamCard name="Vishal" role="BGMI Lead"image={vishal} />
          <TeamCard name="Saketh" role="FREE FIRE Lead"image={saketh} />
          <TeamCard name="Rohith" role="Social Media Head"image={jaddu} />
          <TeamCard name="Harshith " role="Opertion Head"image={noxs} />
          <TeamCard name="Shreyas" role="Organizing Head"image={Shreyas} />
          <TeamCard name="Chaitanya" role="Documentation Head" image={chaii}/>
          <TeamCard name="Abhi Sathwik" role="Photography Head" />
        </div>
      </Section>
      <Footer />

    </>
  );
}
