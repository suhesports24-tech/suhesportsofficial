import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 GOOGLE FORM ACTION URL */
const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScPoYi1ACNYxZxzqfaipu_-8cwECSRDGZ-kvrbFf1rf8rKcXQ/formResponse";

export default function Join() {
  return (
    <>
      <Navbar />

      <Section title="Join Our Club">
        <form
          className="form-card glass animate"
          action={FORM_ACTION_URL}
          method="POST"
          encType="multipart/form-data"
          target="_self"
        >
          {/* FULL NAME */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="entry.1111111111" /* 🔴 REPLACE */
              required
            />
          </div>

          {/* URN */}
          <div className="form-group">
            <label>URN</label>
            <input
              name="entry.2222222222" /* 🔴 REPLACE */
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="entry.3333333333" /* 🔴 REPLACE */
              required
            />
          </div>

          {/* MOBILE */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="entry.4444444444" /* 🔴 REPLACE */
              required
            />
          </div>

          {/* YEAR */}
          <div className="form-group">
            <label>Year</label>
            <select
              name="entry.5555555555" /* 🔴 REPLACE */
              required
            >
              <option value="">-- Select Year --</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          {/* BRANCH */}
          <div className="form-group">
            <label>Branch</label>
            <select
              name="entry.6666666666" /* 🔴 REPLACE */
              required
            >
              <option value="">-- Select Branch --</option>
              <option>CSE</option>
              <option>CSE (AI & ML)</option>
              <option>CSE (DS)</option>
              <option>CSE (Cyber)</option>
              <option>CSE (SAP)</option>
            </select>
          </div>

          {/* ROLE */}
          <div className="form-group">
            <label>Preferred Role</label>
            <select
              name="entry.7777777777" /* 🔴 REPLACE */
              required
            >
              <option value="">-- Select Role --</option>
              <option>Content Creator</option>
              <option>Business Affairs & Strategist</option>
              <option>Editing</option>
              <option>Technical Team</option>
              <option>Photography / Videography</option>
            </select>
          </div>

          {/* ID CARD */}
          <div className="form-group">
            <label>Upload ID Card (Max 2MB)</label>
            <div className="file-upload">
              <label className="file-btn">
                Upload ID Card
                <input
                  type="file"
                  name="entry.8888888888" /* 🔴 REPLACE */
                  accept="image/*,.pdf"
                  required
                />
              </label>
            </div>
          </div>

          <Button className="form-submit">
            Submit Application
          </Button>
        </form>
      </Section>

      <Footer />
    </>
  );
}
