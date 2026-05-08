const items = [
  "Cloud Collaboration",
  "Data Networks",
  "IT Support & Monitoring",
  "Hardware & Software",
  "Backup & Restore",
  "Web Design",
];

const track = items.map((item) => `${item}  ·  `).join("") + items.map((item) => `${item}  ·  `).join("");

export default function Ticker() {
  return (
    <div className="bg-navy border-y border-beige/10 py-4 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap">
        <span className="text-beige/40 text-[10px] tracking-[0.35em] uppercase shrink-0">
          {track}
        </span>
      </div>
    </div>
  );
}
