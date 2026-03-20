import { THEME } from "../styles/theme";

export function LevelSwitcher({ levels, currentLevel, onSelectLevel }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 10, flexWrap: "wrap" }}>
      {levels.map(lv => (
        <button key={lv.id} onClick={() => onSelectLevel(lv.id)} style={{
          fontFamily: THEME.fonts.heading, fontSize: 14, fontWeight: 600,
          padding: "6px 16px", borderRadius: 20, border: "2px solid",
          borderColor: currentLevel === lv.id ? lv.color : "#E0E0E0",
          background: currentLevel === lv.id ? lv.color + "18" : "white",
          color: currentLevel === lv.id ? lv.color : THEME.colors.textLight,
          cursor: "pointer", transition: "all 0.2s ease",
        }}>{lv.emoji} {lv.title}</button>
      ))}
    </div>
  );
}
