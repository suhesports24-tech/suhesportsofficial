import Navbar from "../components/Navbar";
import Section from "../components/Section";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

/* DEFAULT IMAGES (REPLACE FILES LATER) */
import ongoingImg from "../assets/events/ongoing.jpg";
import upcomingImg from "../assets/events/upcoming.jpg";
import pastImg from "../assets/events/past.jpg";
import up from "../assets/events/up.jpeg";
import bgmi from "../assets/events/bgmi.jpg";
import free from "../assets/events/free.jpg";




export default function Events() {
  return (
    <>
      <Navbar />

      {/* ONGOING EVENTS */}

      {/* UPCOMING EVENTS */}
      <Section title="Upcoming Events">
        <div className="events-grid">
          <EventCard
            image={up}
            title="BGMI & FREE FIRE Tournments"
            desc="Inter & Intra Champions."
            status="UPCOMING"
          />
        </div>
      </Section>

      {/* PAST EVENTS */}
      <Section title="Past Events">
        <div className="events-grid">
          <EventCard
            image={bgmi}
            title="BGMI Lane"
            desc="Our Flagship Event-BGMI Championship Batteled!"
            status="COMPLETED IN August 2025"
          />
          <EventCard
            image={free}
            title="Free Fire Lane"
            desc="In Collabration With SNIST E-Sports Club"
            status= "COMPLETED IN September 2025"
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}
