import React, { useEffect, useState } from "react";
import "./styles.css";

const ANIMATION_TYPES = [
  "shake",
  "spin",
  "bounce",
  "swing",
  "pulse",
  "heartbeat",
];
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
  const animationType = ANIMATION_TYPES.includes(animation)
    ? animation
    : "shake";
  const triggerType = TRIGGERS.includes(trigger) ? trigger : "hover";
  const [isTriggered, setIsTriggered] = useState(
    triggerType === "mount" || triggerType === "loop",
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

  return (
    <span
      className={`iconflow-wrapper iconflow-${animationType} ${isTriggered ? "iconflow-active" : ""} ${className}`.trim()}
      style={{ "--iconflow-speed": speed }}
      {...handlers[triggerType]}
    >
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </span>
  );
};

export default AnimatedIcon;
