import { THEME } from "../styles/theme";

export function LessonNav({ navItems, currentPage, onSelectPage }) {
  return (
    <div style={{ display: "flex", gap: 4, padding: "6px 10px", overflowX: "auto", justifyContent: "center", flexWrap: "wrap" }}>
      {navItems.map(item => (
        <button key={item.id} onClick={() => onSelectPage(item.id)} style={{
          fontFamily: THEME.fonts.heading, fontSize: 14, fontWeight: 600,
          padding: "7px 12px", borderRadius: THEME.radii.tag, border: "none", cursor: "pointer",
          background: currentPage === item.id ? THEME.colors.text : "white",
          color: currentPage === item.id ? "white" : "#AAA",
          boxShadow: currentPage === item.id ? THEME.shadows.cardHover : "0 1px 3px rgba(0,0,0,0.06)",
          transition: "all 0.2s ease", whiteSpace: "nowrap",
        }}>{item.emoji} {item.label}</button>
      ))}
    </div>
  );
}
