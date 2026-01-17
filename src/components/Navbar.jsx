import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Scroll blur / shadow effect
  useEffect(() => {
    const nav = document.querySelector(".navbar");

    const onScroll = () => {
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav-wrapper">
      <nav className="navbar glass animate">
        {/* LOGO */}
        <div className="nav-logo">
          <div className="logo-circle">
            <img
              src={logo}
              alt="SUH E-Sports Logo"
              className="logo-img"
            />
          </div>
          <span className="logo-text">SUH E-Sports</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links desktop">
          <Link to="/">Home</Link>
          <Link to="/registrations">Registrations</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/events">Events</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/join">Join Club</Link>
          <Link to="/club-teams">Teams</Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu glass ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/registrations" onClick={() => setOpen(false)}>Registrations</Link>
        <Link to="/team" onClick={() => setOpen(false)}>Our Team</Link>
        <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link to="/leaderboard" onClick={() => setOpen(false)}>Leaderboard</Link>
        <Link to="/join" onClick={() => setOpen(false)}>Join Club</Link>
        <Link to="/club-teams" onClick={() => setOpen(false)}>Teams</Link>
      </div>
    </div>
  );
}
