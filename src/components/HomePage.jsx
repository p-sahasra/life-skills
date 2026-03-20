import { THEME } from "../styles/theme";

export function HomePage({ level, lessons, progress, onSelectLesson }) {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px" }}>
      <div style={{
        textAlign: "center", padding: "36px 20px 28px",
        background: `linear-gradient(135deg, ${level.color}11, ${level.color}08)`,
        borderRadius: THEME.radii.hero, marginBottom: 20,
      }}>
        <div style={{ fontSize: 64, marginBottom: 10 }}>{level.emoji}</div>
        <div style={{ fontFamily: THEME.fonts.heading, fontSize: 15, color: level.color, opacity: 0.7, marginBottom: 2 }}>Level {level.id}</div>
        <h2 style={{ fontFamily: THEME.fonts.heading, fontSize: 28, fontWeight: 700, color: THEME.colors.text, margin: "0 0 8px" }}>
          {level.title}
        </h2>
        <p style={{ fontFamily: THEME.fonts.body, fontSize: 19, color: THEME.colors.textMuted, lineHeight: 1.5, margin: "0 0 12px" }}>
          {level.subtitle}
        </p>
        <div style={{
          fontFamily: THEME.fonts.body, fontSize: 16, color: THEME.colors.textLight,
          background: "#F5F5F5", borderRadius: 14, padding: "10px 18px", display: "inline-block",
        }}>
          Each lesson: <strong>See It</strong> → <strong>Spot It</strong> → <strong>Do It</strong> → <strong>Practice</strong>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {lessons.map((lesson, i) => {
          const done = progress[`lesson${lesson.id}`];
          return (
            <div key={lesson.id} onClick={() => onSelectLesson(`lesson${lesson.id}`)} style={{
              display: "flex", alignItems: "center", gap: 14,
              background: "white", borderRadius: 20, padding: "16px 20px",
              boxShadow: THEME.shadows.card, cursor: "pointer",
              border: `2px solid ${done ? THEME.colors.success + "33" : lesson.color + "22"}`,
              animation: "fadeSlideUp 0.4s ease-out both", animationDelay: `${i * 0.05}s`,
            }}>
              <div style={{
                fontSize: 30, minWidth: 52, height: 52,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: done ? THEME.colors.successLight : lesson.colorLight, borderRadius: THEME.radii.icon,
              }}>{done ? "✅" : lesson.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: THEME.fonts.heading, fontSize: 19, fontWeight: 600, color: THEME.colors.text }}>
                  <span style={{ color: lesson.color, opacity: 0.5 }}>{lesson.id}.</span> {lesson.title}
                </div>
                <div style={{ fontFamily: THEME.fonts.body, fontSize: 15, color: THEME.colors.textLight }}>
                  {lesson.subtitle}
                </div>
              </div>
              <div style={{ fontSize: 20, color: "#CCC" }}>→</div>
            </div>
          );
        })}
      </div>

      <div style={{
        background: "#F0FFFE", borderRadius: 22, padding: "20px 24px",
        border: "2px solid #4ECDC433",
      }}>
        <div style={{ fontFamily: THEME.fonts.heading, fontSize: 20, fontWeight: 700, color: "#4ECDC4", marginBottom: 10 }}>
          🛒 What You Need
        </div>
        {[
          { label: "NOTHING", item: "Most lessons need zero supplies — just you!", color: THEME.colors.success },
          { label: "SOMETIMES", item: "Simple stuff from home — tape, scissors, string, coins", color: THEME.colors.warning },
          { label: "HELPFUL", item: "A grown-up nearby for the first try", color: "#2196F3" },
          { label: "FUN EXTRA", item: "A notebook to draw what you learned", color: "#AB47BC" },
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
            <span style={{
              fontFamily: THEME.fonts.heading, fontSize: 12, fontWeight: 700, color: row.color,
              background: row.color + "15", padding: "3px 10px", borderRadius: 8, minWidth: 80, textAlign: "center",
            }}>{row.label}</span>
            <span style={{ fontFamily: THEME.fonts.body, fontSize: 17, color: "#555" }}>{row.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
