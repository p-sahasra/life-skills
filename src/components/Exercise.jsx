import { useState } from "react";
import { THEME } from "../styles/theme";
import { SceneRenderer } from "./SceneRenderer";

export function Exercise({ ex, lessonColor }) {
  const [showAnswer, setShowAnswer] = useState({});
  const toggleAnswer = (i) => setShowAnswer(p => ({ ...p, [i]: !p[i] }));

  return (
    <div style={{
      background: THEME.colors.cardBg, borderRadius: THEME.radii.card, padding: "24px 24px 20px",
      boxShadow: THEME.shadows.card, borderLeft: `5px solid ${lessonColor}`, marginBottom: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          fontSize: 30, minWidth: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center",
          background: lessonColor + "15", borderRadius: THEME.radii.icon,
        }}>{ex.icon}</div>
        <div>
          <div style={{ fontFamily: THEME.fonts.heading, fontSize: 22, fontWeight: 700, color: THEME.colors.text }}>{ex.name}</div>
          <div style={{ fontFamily: THEME.fonts.body, fontSize: 17, color: THEME.colors.textMuted }}>{ex.goal}</div>
        </div>
      </div>

      {ex.howTo && (
        <div style={{ marginBottom: 16 }}>
          {ex.howTo.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "5px 0" }}>
              <div style={{ fontFamily: THEME.fonts.heading, fontSize: 15, fontWeight: 700, color: lessonColor, minWidth: 26, textAlign: "right" }}>{i + 1}.</div>
              <div style={{ fontFamily: THEME.fonts.body, fontSize: 17, color: "#444", lineHeight: 1.55 }}>{step}</div>
            </div>
          ))}
        </div>
      )}

      {ex.scene && (
        <div style={{ textAlign: "center", margin: "16px 0" }}>
          <SceneRenderer scene={ex.scene} size={280} />
        </div>
      )}

      {ex.positions && ex.positions.map((pos, i) => (
        <div key={i} style={{ background: "#FAFAFA", borderRadius: 16, padding: 16, marginBottom: 12 }}>
          <div style={{ fontFamily: THEME.fonts.heading, fontSize: 17, fontWeight: 600, color: "#555", marginBottom: 10 }}>{pos.label}</div>
          {pos.scene && (
            <div style={{ textAlign: "center", marginBottom: 10 }}>
              <SceneRenderer scene={pos.scene} size={240} />
            </div>
          )}
          <div
            onClick={() => toggleAnswer(i)}
            style={{
              fontFamily: THEME.fonts.body, fontSize: 16, color: "#555", lineHeight: 1.5,
              background: lessonColor + "10", borderRadius: 12, padding: "12px 16px", marginTop: 10,
              position: "relative", cursor: "pointer", userSelect: showAnswer[i] ? "auto" : "none",
              filter: showAnswer[i] ? "none" : "blur(6px)",
              WebkitFilter: showAnswer[i] ? "none" : "blur(6px)",
              transition: "filter 0.3s ease",
            }}
          >
            {pos.answer}
            {!showAnswer[i] && (
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: 12, background: "rgba(255,255,255,0.1)",
              }}>
                <span style={{
                  fontFamily: THEME.fonts.heading, fontSize: 15, fontWeight: 600, color: lessonColor,
                  background: "white", padding: "8px 20px", borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)", filter: "none", WebkitFilter: "none",
                }}>Tap to See Answer</span>
              </div>
            )}
          </div>
        </div>
      ))}

      {ex.successTarget && (
        <div style={{ background: THEME.colors.successLight, borderRadius: 14, padding: "12px 16px", marginTop: 12, border: `2px dashed ${THEME.colors.success}44` }}>
          <span style={{ fontFamily: THEME.fonts.heading, fontSize: 16, fontWeight: 700, color: "#43A047" }}>🎯 Goal: </span>
          <span style={{ fontFamily: THEME.fonts.body, fontSize: 17, color: "#444" }}>{ex.successTarget}</span>
        </div>
      )}

      {ex.parentNote && (
        <div style={{ background: THEME.colors.warningLight, borderRadius: 14, padding: "12px 16px", marginTop: 8, border: `2px dashed ${THEME.colors.warning}33` }}>
          <span style={{ fontFamily: THEME.fonts.heading, fontSize: 16, fontWeight: 700, color: THEME.colors.warning }}>👨‍👧 Parent Note: </span>
          <span style={{ fontFamily: THEME.fonts.body, fontSize: 16, color: THEME.colors.textMuted }}>{ex.parentNote}</span>
        </div>
      )}
    </div>
  );
}
