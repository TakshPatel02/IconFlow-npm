import React, { useEffect, useState } from "react";
import "./styles.css";

const ANIMATION_TYPES = ["shake", "spin", "bounce", "swing", "pulse", "heartbeat"];
const TRIGGERS = ["hover", "click", "mount", "loop"];

const AnimatedIcon = ({
  icon: Icon,
  animation,
  trigger,
  size = 24,
  color = "currentColor",
  speed = 1,
  strokeWidth = 2,
  className = "",
}) => {
  const animationType = ANIMATION_TYPES.includes(animation) ? animation : "shake";
  const triggerType = TRIGGERS.includes(trigger) ? trigger : "hover";

  const [isTriggered, setIsTriggered] = useState(
    triggerType === "mount" || triggerType === "loop"
  );

  useEffect(() => {
    if (triggerType === "mount") {
      setIsTriggered(true);
    }
  }, [triggerType]);

  const handlers = {
    hover: {
      onMouseEnter: () => setIsTriggered(true),
      onMouseLeave: () => setIsTriggered(false),
    },
    click: { onClick: () => setIsTriggered((prev) => !prev) },
    mount: {},
    loop: {},
  };

  // BUG FIX: store pre-computed duration so CSS just uses it directly
  // speed=1 → 1s, speed=2 → 0.5s (faster), speed=0.5 → 2s (slower)
  const durations = {
    shake:     `${0.5 / speed}s`,
    spin:      `${1   / speed}s`,
    bounce:    `${0.6 / speed}s`,
    swing:     `${0.8 / speed}s`,
    pulse:     `${1   / speed}s`,
    heartbeat: `${0.8 / speed}s`,
  };

  return (
    <span
      className={`iconflow-wrapper iconflow-${animationType} ${isTriggered ? "iconflow-active" : ""} ${className}`.trim()}
      style={{ "--iconflow-duration": durations[animationType] }}
      {...handlers[triggerType]}
    >
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </span>
  );
};

export default AnimatedIcon;