import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

export default function FreeFire() {
  const [popup, setPopup] = useState("");
  const [submittedTeams, setSubmittedTeams] = useState([]);

  const [form, setForm] = useState({
    teamName: "",
    leaderName: "",
    leaderIGN: "",
    leaderID: null,

    member2IGN: "",
    member2ID: null,
    member3IGN: "",
    member3ID: null,
    member4IGN: "",
    member4ID: null,
    member5IGN: "",
    member5ID: null,

    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (files[0] && files[0].size > 2 * 1024 * 1024) {
        alert("File must be under 2MB");
        return;
      }
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isFormValid =
    form.teamName &&
    form.leaderName &&
    form.leaderIGN &&
    form.leaderID &&
    form.member2IGN &&
    form.member2ID &&
    form.member3IGN &&
    form.member3ID &&
    form.member4IGN &&
    form.member4ID &&
    form.whatsapp;

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamKey = form.teamName.toLowerCase();
    if (submittedTeams.includes(teamKey)) {
      alert("Team name already registered");
      return;
    }
    setPopup("loading");
    setTimeout(() => {
      setSubmittedTeams([...submittedTeams, teamKey]);
      setPopup("success");
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <Section title="Free Fire Squad Registration">
        <form className="form-card glass animate" onSubmit={handleSubmit}>
          <Input label="Team Name" name="teamName" onChange={handleChange} />
          <Input label="Leader Name" name="leaderName" onChange={handleChange} />
          <Input label="Leader Free Fire ID / IGN" name="leaderIGN" onChange={handleChange} />
          <File label="Leader ID Card (Max 2MB)" name="leaderID" onChange={handleChange} />

          <Member label="Member 2 Free Fire ID / IGN" ign="member2IGN" id="member2ID" onChange={handleChange} />
          <Member label="Member 3 Free Fire ID / IGN" ign="member3IGN" id="member3ID" onChange={handleChange} />
          <Member label="Member 4 Free Fire ID / IGN" ign="member4IGN" id="member4ID" onChange={handleChange} />
          <Member label="Member 5 Free Fire ID / IGN (Optional)" ign="member5IGN" id="member5ID" onChange={handleChange} />

          <Input label="WhatsApp Number" name="whatsapp" onChange={handleChange} />

          <Button disabled={!isFormValid}>Submit Registration</Button>
        </form>
      </Section>

      <Footer />

      {popup === "loading" && <Popup text="Submitting…" />}
      {popup === "success" && <Popup text="✅ Free Fire Registration Successful" />}
    </>
  );
}

/* REUSE COMPONENTS */
const Input = ({ label, name, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input name={name} onChange={onChange} required />
  </div>
);

const File = ({ label, name, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="file-upload">
      <label className="file-btn">
        Upload
        <input type="file" hidden name={name} accept="image/*,.pdf" onChange={onChange} required />
      </label>
      <span className="file-name">Selected: none</span>
    </div>
  </div>
);

const Member = ({ label, ign, id, onChange }) => (
  <>
    <Input label={label} name={ign} onChange={onChange} />
    <File label="ID Card (Max 2MB)" name={id} onChange={onChange} />
  </>
);

const Popup = ({ text }) => (
  <div className="popup-overlay">
    <div className="popup glass">{text}</div>
  </div>
);
