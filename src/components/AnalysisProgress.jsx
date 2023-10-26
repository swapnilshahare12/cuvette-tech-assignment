import React, { useState, useEffect } from "react";

function AnalysisProgress({ point }) {
  const [progress, setProgress] = useState(0);
  const desiredPoint = point; // Set your desired point here

  useEffect(() => {
    // const totalTime = 1500; // Total animation time (milliseconds)
    const totalTime = desiredPoint > 50 ? 5000 : 2000;
    const targetDashoffset = (1 - desiredPoint / 100) * 439.82; // Calculate the dash offset based on the desired point
    let isAnimating = true;

    const animate = (timestamp) => {
      if (!isAnimating) return;

      const deltaTime = timestamp - startTime;
      const dashoffset = (deltaTime / totalTime) * 439.82;

      if (dashoffset >= targetDashoffset) {
        setProgress(desiredPoint);
        isAnimating = false; // Stop the animation after reaching the desired point
        return;
      }

      setProgress((dashoffset / targetDashoffset) * desiredPoint);
      requestAnimationFrame(animate);
    };

    let startTime = null;
    const animationFrame = requestAnimationFrame((timestamp) => {
      if (!startTime) startTime = timestamp;
      animate(timestamp);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [desiredPoint]);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        margin: "0 auto",
      }}
    >
      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="transparent"
          strokeWidth="20"
          stroke="#EDF4FF"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="transparent"
          strokeWidth="20"
          stroke={progress === 100 ? "#52C41A" : "#438AF6"}
          strokeDasharray="439.82"
          strokeDashoffset={439.82 - (progress / 100) * 439.82}
          transform="rotate(-90 80 80)"
        />
      </svg>

      <div
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "35px",
            color: "#333",
            position: "absolute",
            top: "55px",
            left: "55px",
          }}
        >
          {/* {`${Math.round(progress)}%`} */}
          🎯
        </div>
      </div>
    </div>
  );
}

export default AnalysisProgress;
