import { THEME } from "../styles/theme";
import { Exercise } from "./Exercise";

export function LessonPage({ lesson, progress, setProgress, totalLessons }) {
  const key = `lesson${lesson.id}`;
  const done = progress[key] || false;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 40px" }}>
      <div style={{
        textAlign: "center", padding: "28px 20px 20px",
        background: `linear-gradient(135deg, ${lesson.color}15, ${lesson.color}05)`,
        borderRadius: THEME.radii.hero, marginBottom: 20, position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: 100, opacity: 0.06 }}>{lesson.emoji}</div>
        <div style={{ fontSize: 50, marginBottom: 6 }}>{lesson.emoji}</div>
        <div style={{ fontFamily: THEME.fonts.heading, fontSize: 16, color: lesson.color, opacity: 0.6 }}>Lesson {lesson.id} of {totalLessons}</div>
        <h2 style={{ fontFamily: THEME.fonts.heading, fontSize: 32, fontWeight: 700, color: lesson.color, margin: "2px 0 6px" }}>{lesson.title}</h2>
        <p style={{ fontFamily: THEME.fonts.body, fontSize: 19, color: THEME.colors.textMuted, margin: 0 }}>{lesson.subtitle}</p>
      </div>

      <div style={{ background: lesson.color + "12", borderRadius: 20, padding: "18px 22px", marginBottom: 14, border: `2px solid ${lesson.color}33` }}>
        <div style={{ fontFamily: THEME.fonts.heading, fontSize: 18, fontWeight: 700, color: lesson.color, marginBottom: 6 }}>🎯 What You Will Learn</div>
        <div style={{ fontFamily: THEME.fonts.body, fontSize: 18, color: "#444", lineHeight: 1.5 }}>{lesson.objective}</div>
      </div>

      <div style={{ background: THEME.colors.successLight, borderRadius: 20, padding: "18px 22px", marginBottom: 22, border: `2px solid ${THEME.colors.success}33` }}>
        <div style={{ fontFamily: THEME.fonts.heading, fontSize: 18, fontWeight: 700, color: "#43A047", marginBottom: 6 }}>✅ You Did It When...</div>
        <div style={{ fontFamily: THEME.fonts.body, fontSize: 18, color: "#444", lineHeight: 1.5 }}>{lesson.readyWhen}</div>
      </div>

      <h3 style={{ fontFamily: THEME.fonts.heading, fontSize: 24, fontWeight: 700, color: THEME.colors.text, marginBottom: 14 }}>Exercises</h3>
      {lesson.exercises.map((ex, i) => <Exercise key={i} ex={ex} lessonColor={lesson.color} />)}

      {lesson.dailyPractice && (
        <div style={{ background: "linear-gradient(135deg, #F5F5F5, #FAFAFA)", borderRadius: THEME.radii.card, padding: "22px 24px", marginTop: 20, border: "2px solid #E0E0E0" }}>
          <div style={{ fontFamily: THEME.fonts.heading, fontSize: 21, fontWeight: 700, color: THEME.colors.text, marginBottom: 12 }}>📋 {lesson.dailyPractice.title}</div>
          {lesson.dailyPractice.steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0" }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, border: "2px solid #CCC",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: "#CCC", fontFamily: THEME.fonts.heading, fontWeight: 700, flexShrink: 0, marginTop: 2,
              }}>{i + 1}</div>
              <div style={{ fontFamily: THEME.fonts.body, fontSize: 17, color: "#555", lineHeight: 1.5 }}>{step}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 28 }}>
        <button onClick={() => setProgress({ ...progress, [key]: !done })} style={{
          fontFamily: THEME.fonts.heading, fontSize: 20, fontWeight: 700,
          padding: "14px 36px", borderRadius: THEME.radii.button, border: "none", cursor: "pointer",
          background: done ? THEME.colors.success : lesson.color, color: "white",
          boxShadow: `${THEME.shadows.button} ${(done ? THEME.colors.success : lesson.color)}33`,
        }}>{done ? "✅ Lesson Done!" : "Mark as Done ✓"}</button>
      </div>
    </div>
  );
}
