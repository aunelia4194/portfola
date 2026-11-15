"use client";

import { useThemeMode } from "@/src/hooks/useThemeMode";
import Wukong from "../svg/toggle/Wukong";
import MoonRabbit from "../svg/toggle/MoonRabbit";
import ToggleClouds from "../svg/toggle/ToggleClouds";
import ToggleStars from "../svg/toggle/ToggleStars";

export default function ThemeToggle() {
  const { isDark, toggleTheme, shouldRender, ariaLabel, titleText } = useThemeMode();

  if (!shouldRender) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={ariaLabel}
      title={titleText}
      className="toggle"
    >
      <span className="toggle__content">
        {/* Arrière-plan jour */}
        <ToggleClouds variant="back" />

        {/* Wukong sur son nuage */}
        <span aria-hidden={true} className="wukong__container">
          <span className="wukong-flyer">
            <Wukong />
          </span>
        </span>

        <ToggleClouds variant="front" />

        {/* Curseur soleil et lune */}
        <span className="toggle__indicator-wrapper">
          <span className="toggle__indicator">
            <span className="toggle__star">
              <span className="sun">
                <span className="moon">
                  <span className="moon__crater" />
                  <span className="moon__crater" />
                  <span className="moon__crater" />

                  <span className="moon-rabbit">
                    <MoonRabbit />
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>

        {/* Arrière-plan nuit */}
        <ToggleStars />
      </span>
    </button>
  );
}
