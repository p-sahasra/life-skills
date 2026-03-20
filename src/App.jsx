import { useState, useEffect, useRef } from "react";
import { THEME } from "./styles/theme";
import { GLOBAL_CSS } from "./styles/animations";
import { useProgress } from "./hooks/useProgress";
import { LEVELS } from "./data/levels";
import { LESSONS_BY_LEVEL } from "./data/lessons";
import { LevelSwitcher } from "./components/LevelSwitcher";
import { LessonNav } from "./components/LessonNav";
import { HomePage } from "./components/HomePage";
import { LessonPage } from "./components/LessonPage";

const ALL_LESSONS = Object.values(LESSONS_BY_LEVEL).flat();

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [progress, setProgress] = useProgress();
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const level = LEVELS.find((l) => l.id === currentLevel) || LEVELS[0];
  const levelLessons = LESSONS_BY_LEVEL[currentLevel] || [];
  const completedCount = levelLessons.filter((l) => progress[`lesson${l.id}`]).length;
  const navItems = [
    { id: "home", label: "Home", emoji: "🏠" },
    ...levelLessons.map((l) => ({ id: `lesson${l.id}`, label: `L${l.id}`, emoji: l.emoji })),
  ];

  return (
    <div style={{ minHeight: "100vh", background: THEME.colors.bg, fontFamily: THEME.fonts.body, paddingBottom: 80 }}>
      <link href={THEME.fonts.url} rel="stylesheet" />
      <style>{GLOBAL_CSS}</style>
      <div ref={topRef} />

      <div style={{ textAlign: "center", padding: "22px 20px 10px" }}>
        <h1 style={{ fontFamily: THEME.fonts.heading, fontSize: 34, fontWeight: 700, color: THEME.colors.text }}>
          🛠️ Life Skills Adventure
        </h1>
        {completedCount > 0 && (
          <div style={{ fontFamily: THEME.fonts.heading, fontSize: 16, color: THEME.colors.success, marginTop: 3 }}>
            ✅ {completedCount}/{levelLessons.length} lessons done
          </div>
        )}

        <LevelSwitcher
          levels={LEVELS}
          currentLevel={currentLevel}
          onSelectLevel={(id) => { setCurrentLevel(id); setCurrentPage("home"); }}
        />
      </div>

      <LessonNav navItems={navItems} currentPage={currentPage} onSelectPage={setCurrentPage} />

      <div style={{ animation: "fadeIn 0.3s ease", marginTop: 14 }}>
        {currentPage === "home" && (
          <HomePage
            level={level}
            lessons={levelLessons}
            progress={progress}
            onSelectLesson={setCurrentPage}
          />
        )}

        {ALL_LESSONS.map((l) =>
          currentPage === `lesson${l.id}` ? (
            <LessonPage
              key={l.id}
              lesson={l}
              progress={progress}
              setProgress={setProgress}
              totalLessons={ALL_LESSONS.length}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
