import { THEME } from "../styles/theme";

// A simple SVG scene renderer for life-skills illustrations.
// Each scene is an object: { bg, elements: [{ type, x, y, text?, size?, color?, ... }], highlights: [...] }
// Scenes are intentionally simple — emoji + shapes on a colored background.

export function SceneRenderer({ scene, size = 280 }) {
  if (!scene) return null;

  const bg = scene.bg || "#F5F5F5";

  return (
    <div style={{ display: "inline-block", borderRadius: 18, overflow: "hidden", boxShadow: THEME.shadows.icon }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <rect width={size} height={size} fill={bg} rx={0} />

        {scene.highlights && scene.highlights.map((h, i) => (
          <rect key={`h${i}`} x={h.x} y={h.y} width={h.w || 60} height={h.h || 60}
            rx={h.rx || 8} fill={h.color || "#FFEB3B55"} />
        ))}

        {scene.elements && scene.elements.map((el, i) => {
          if (el.type === "emoji") {
            return (
              <text key={i} x={el.x} y={el.y} textAnchor="middle" fontSize={el.size || 40}
                style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.1))" }}>
                {el.text}
              </text>
            );
          }
          if (el.type === "label") {
            return (
              <text key={i} x={el.x} y={el.y} textAnchor={el.anchor || "middle"}
                fontSize={el.size || 14} fontWeight={el.bold ? 700 : 400}
                fill={el.color || "#333"} fontFamily={THEME.fonts.heading}>
                {el.text}
              </text>
            );
          }
          if (el.type === "rect") {
            return (
              <rect key={i} x={el.x} y={el.y} width={el.w} height={el.h}
                rx={el.rx || 4} fill={el.color || "#DDD"} stroke={el.stroke || "none"} strokeWidth={el.strokeWidth || 0} />
            );
          }
          if (el.type === "circle") {
            return (
              <circle key={i} cx={el.x} cy={el.y} r={el.r || 20}
                fill={el.color || "#DDD"} stroke={el.stroke || "none"} strokeWidth={el.strokeWidth || 0} />
            );
          }
          if (el.type === "line") {
            return (
              <line key={i} x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
                stroke={el.color || "#999"} strokeWidth={el.strokeWidth || 2}
                strokeDasharray={el.dashed ? "6,4" : "none"} />
            );
          }
          if (el.type === "arrow") {
            return (
              <g key={i}>
                <defs>
                  <marker id={`arrow-${i}`} markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <path d="M0,0 L8,3 L0,6 Z" fill={el.color || "#555"} />
                  </marker>
                </defs>
                <line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2}
                  stroke={el.color || "#555"} strokeWidth={el.strokeWidth || 2}
                  markerEnd={`url(#arrow-${i})`} />
              </g>
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
}
