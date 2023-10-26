import React, { useEffect, useState } from "react";
import "../componentscss/SkillRightContainer.css";
import QuestionAnalysis from "./QuestionAnalysis";

const SkillRightContainer = ({score}) => {
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);
  const [width4, setWidth4] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      // Use setTimeout to update the widths with a delay
      for (let i = 0; i < 80; i++) {
        setTimeout(() => {
          setWidth1((prevWidth) => prevWidth + 0.5);
        }, i * 3.5); // Adjust the delay as needed
      }
      for (let i = 0; i < 60; i++) {
        setTimeout(() => {
          setWidth2((prevWidth) => prevWidth + 0.5);
        }, i * 3.5); // Adjust the delay as needed
      }
      for (let i = 0; i < 24; i++) {
        setTimeout(() => {
          setWidth3((prevWidth) => prevWidth + 0.5);
        }, i * 3.5); // Adjust the delay as needed
      }
      for (let i = 0; i < 96; i++) {
        setTimeout(() => {
          setWidth4((prevWidth) => prevWidth + 0.5);
        }, i * 3.5); // Adjust the delay as needed
      }
    };

    updateWidths();
  }, []);

  return (
    <div className="skill-right-container">
      <div className="syllabus-container">
        <h3 className="syllabus-container-title">Syllabus wise Analysis</h3>
        <div className="syllabus-items">
          <div className="syllabus-item">
            <p>HTML Tools, Forms, History</p>
            <div className="syllabus-progress-container">
              <div
                className="progress"
                style={{ backgroundColor: "rgba(67, 138, 246, .1)" }}
              >
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "#438af6", width: `${width1}%` }}
                ></div>
              </div>
              <h5>{Math.round(width1)}%</h5>
            </div>
          </div>
          <div className="syllabus-item">
            <p>Tags & References in HTML</p>
            <div className="syllabus-progress-container">
              <div
                className="progress"
                style={{ backgroundColor: "rgba(255, 145, 66, .1)" }}
              >
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "#FF9142", width: `${width2}%` }}
                ></div>
              </div>
              <h5>{Math.round(width2)}%</h5>
            </div>
          </div>
          <div className="syllabus-item">
            <p>Tables & CSS Basics</p>
            <div className="syllabus-progress-container">
              <div
                className="progress"
                style={{ backgroundColor: "rgba(251, 94, 94, .1)" }}
              >
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "#FB5E5E", width: `${width3}%` }}
                ></div>
              </div>
              <h5>{Math.round(width3)}%</h5>
            </div>
          </div>
          <div className="syllabus-item">
            <p>Tables & CSS Basics</p>
            <div className="syllabus-progress-container">
              <div
                className="progress"
                style={{ backgroundColor: "rgba(46, 201, 113, .1)" }}
              >
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "#2EC971", width: `${width4}%` }}
                ></div>
              </div>
              <h5>{Math.round(width4)}%</h5>
            </div>
          </div>
        </div>
      </div>
      <QuestionAnalysis score={score}/>
    </div>
  );
};

export default SkillRightContainer;
