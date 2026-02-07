import "./components.css";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="section animate">
      <h2>
        <span>#</span> {title}
      </h2>

      {subtitle && (
        <p className="section-note">{subtitle}</p>
      )}

      {children}
    </section>
  );
}
