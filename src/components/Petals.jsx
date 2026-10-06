import React from "react";

const petalsData = [
  { left: "10.57%", size: "27px", duration: "26s", delay: "0.6s", char: "🌸" },
  { left: "26.41%", size: "30px", duration: "17s", delay: "5.3s", char: "🌸" },
  { left: "70.80%", size: "14px", duration: "15s", delay: "1.5s", char: "🌿" },
  { left: "82.52%", size: "31px", duration: "26s", delay: "1.4s", char: "🌸" },
  { left: "29.36%", size: "28px", duration: "21s", delay: "6.7s", char: "🌼" },
  { left: "90.15%", size: "18px", duration: "18s", delay: "8.0s", char: "🌿" },
  { left: "61.77%", size: "27px", duration: "28s", delay: "0.8s", char: "🌸" },
  { left: "97.45%", size: "35px", duration: "17s", delay: "3.8s", char: "🌸" },
  { left: "42.34%", size: "22px", duration: "26s", delay: "10.3s", char: "🌼" },
  { left: "19.70%", size: "15px", duration: "21s", delay: "4.2s", char: "🌸" }
];

export const Petals = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petalsData.map((item, index) => (
        <span
          key={index}
          className="absolute animate-float-petal"
          style={{
            left: item.left,
            top: "-10vh",
            fontSize: item.size,
            animationDuration: item.duration,
            animationDelay: item.delay,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};