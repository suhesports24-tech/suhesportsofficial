import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 GOOGLE FORM LINK (VIEWFORM, NOT EMBED) */
const JOIN_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPoYi1ACNYxZxzqfaipu_-8cwECSRDGZ-kvrbFf1rf8rKcXQ/viewform";

export default function Join() {
  return (
    <>
      <Navbar />

      <Section title="Join Our Club">
        <div className="form-card glass animate" style={{ textAlign: "center" }}>
          <p style={{ opacity: 0.85, marginBottom: "20px" }}>
            Please click the button below to open the official Join Form.
            <br />
            (Form opens in a new tab)
          </p>

          <Button
            className="form-submit"
            onClick={() => window.open(JOIN_FORM_URL, "_blank")}
          >
            Open Join Application Form →
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}
