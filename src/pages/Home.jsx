import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";

/* TEMP IMAGES (replace later) */
import bgmiImg from "../assets/events/bgmi.jpg";
import freeImg from "../assets/events/free.jpg";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ✅ PAGE CONTENT WRAPPER */}
      <div className="page-content">
        

        <Hero />

        <Section title="Upcoming Events">
          <div className="grid">
            <Card>
              <h3>BGMI Tournament</h3>
              <p style={{ margin: "12px 0", opacity: 0.8 }}>
                Register now and compete with the best.
              </p>
              <Button>Registrations Open Soon...</Button>
            </Card>

            <Card>
              <h3>Free Fire Clash</h3>
              <p style={{ margin: "12px 0", opacity: 0.8 }}>
                Squad-based knockout event.
              </p>
              <Button>Registrations Open Soon...</Button>
            </Card>
          </div>
        </Section>
      </div>

      <Footer />
    </>
  );
}
