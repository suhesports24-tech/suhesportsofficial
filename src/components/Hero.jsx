import "./components.css";
import Button from "./Button";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content animate">
        {/* LEFT */}
        <div>
          <h1>
            Build. Compete. <br />
            <span>Dominate.</span>
          </h1>

          <p>
            Welcome to the official esports club. Join tournaments, improve
            skills, and grow with a competitive gaming community.
          </p>

          <div className="hero-buttons">
            <Link to="/join" style={{ textDecoration: "none" }}>
              <Button>Join the Club</Button>
            </Link>

            <Link to="/events" style={{ textDecoration: "none" }}>
              <Button type="secondary">View Events</Button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <Card className="hero-card">
          <h3>🔥 Next Big Event</h3>
          <p style={{ margin: "12px 0", opacity: 0.8 }}>
            SUH E-Sports Champaionship Season-1 – Squad Knockouts
          </p>

          <Link to="/registrations" style={{ textDecoration: "none" }}>
            <Button>Registrations Open Soon...</Button>
          </Link>
        </Card>
      </div>
    </section>
  );
}
