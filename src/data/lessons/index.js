import level0 from "./level0-fix-it";
import level1 from "./level1-outdoor";
import level2 from "./level2-bike";
import level3 from "./level3-kitchen";
import level4 from "./level4-street-smart";
import level4Clock from "./level4-clock";
import level5 from "./level5-emergency";

export const LESSONS_BY_LEVEL = {
  0: level0,
  1: level1,
  2: level2,
  3: level3,
  4: [...level4, ...level4Clock],
  5: level5,
};
