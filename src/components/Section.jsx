import "./components.css";

export default function Section({ title, children }) {
  return (
    <section className="section animate">
      <h2>
        <span>#</span> {title}
      </h2>
      {children}
    </section>
  );
}
