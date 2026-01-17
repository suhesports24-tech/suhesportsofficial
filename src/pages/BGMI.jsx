import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Button from "../components/Button";
import "../components/components.css";

/* 🔗 BGMI BACKEND URL */
const BGMI_API_URL =
  "https://script.google.com/macros/s/AKfycbyTDhijbPI03fvfCgxnGbClMzLv-9Y5D7T3_HOijBstlyeqZz-TU7uf5x1rPBaq_z94/exec";

export default function BGMI() {
  const [popup, setPopup] = useState("");

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

  /* INPUT HANDLER */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        alert("File must be under 2MB");
        return;
      }
      setForm({ ...form, [name]: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* FORM VALIDATION */
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

  /* FILE → BASE64 */
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const [, data] = reader.result.split(",");
        resolve({
          name: file.name,
          type: file.type,
          data,
        });
      };
      reader.onerror = reject;
    });

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopup("loading");

    try {
      const payload = {
        teamName: form.teamName,
        leaderName: form.leaderName, // ✅ FIX
        whatsapp: form.whatsapp,

        players: [
          {
            ign: form.leaderIGN,
            idCard: await toBase64(form.leaderID),
          },
          {
            ign: form.member2IGN,
            idCard: await toBase64(form.member2ID),
          },
          {
            ign: form.member3IGN,
            idCard: await toBase64(form.member3ID),
          },
          {
            ign: form.member4IGN,
            idCard: await toBase64(form.member4ID),
          },
          ...(form.member5IGN
            ? [
                {
                  ign: form.member5IGN,
                  idCard: await toBase64(form.member5ID),
                },
              ]
            : []),
        ],
      };

      await fetch(BGMI_API_URL, {
        method: "POST",
        mode: "no-cors", // ✅ keep for stability
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setPopup("success");
    } catch (err) {
      alert("Submission failed");
      setPopup("");
    }
  };

  return (
    <>
      <Navbar />

      <Section title="BGMI Squad Registration">
        <form className="form-card glass animate" onSubmit={handleSubmit}>
          <Input label="Team Name" name="teamName" onChange={handleChange} />
          <Input label="Leader Name" name="leaderName" onChange={handleChange} />
          <Input
            label="Leader BGMI ID / IGN"
            name="leaderIGN"
            onChange={handleChange}
          />

          <File
            label="Leader ID Card (Max 2MB)"
            name="leaderID"
            file={form.leaderID}
            onChange={handleChange}
          />

          <Member
            label="Member 2 BGMI ID / IGN"
            ign="member2IGN"
            id="member2ID"
            file={form.member2ID}
            onChange={handleChange}
          />

          <Member
            label="Member 3 BGMI ID / IGN"
            ign="member3IGN"
            id="member3ID"
            file={form.member3ID}
            onChange={handleChange}
          />

          <Member
            label="Member 4 BGMI ID / IGN"
            ign="member4IGN"
            id="member4ID"
            file={form.member4ID}
            onChange={handleChange}
          />

          <Member
            label="Member 5 BGMI ID / IGN (Optional)"
            ign="member5IGN"
            id="member5ID"
            file={form.member5ID}
            onChange={handleChange}
            optional
          />

          <Input
            label="WhatsApp Number"
            name="whatsapp"
            onChange={handleChange}
          />

          <Button disabled={!isFormValid}>
            Submit Registration
          </Button>
        </form>
      </Section>

      <Footer />

      {popup === "loading" && <Popup text="Submitting…" />}
      {popup === "success" && (
        <Popup text="✅ BGMI Registration Successful" />
      )}
    </>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

const Input = ({ label, name, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input name={name} onChange={onChange} required />
  </div>
);

const File = ({ label, name, onChange, file, required = true }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="file-upload">
      <label className="file-btn">
        Upload
        <input
          type="file"
          name={name}
          hidden
          accept="image/*,.pdf"
          onChange={onChange}
          required={required}
        />
      </label>
      <span className="file-name">
        {file ? file.name : "Selected: none"}
      </span>
    </div>
  </div>
);

const Member = ({ label, ign, id, file, onChange, optional }) => (
  <>
    <div className="form-group">
      <label>{label}</label>
      <input
        name={ign}
        onChange={onChange}
        required={!optional}
      />
    </div>

    <File
      label="ID Card (Max 2MB)"
      name={id}
      file={file}
      onChange={onChange}
      required={!optional}
    />
  </>
);

const Popup = ({ text }) => (
  <div className="popup-overlay">
    <div className="popup glass">{text}</div>
  </div>
);
