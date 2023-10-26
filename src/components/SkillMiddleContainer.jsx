import React, { useState } from "react";
import "../componentscss/SkillMiddleContainer.css";
import htmlIcon from "../assets/html.svg";
import Comparison from "./Comparison";
import Modal from "./Modal";
const SkillMiddleContainer = ({
  rank,
  setRank,
  percentile,
  setPercentile,
  score,
  setScore,
}) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="skill-middle-container">
      <p className="skill-test-text">Skill Test</p>
      <div className="language-container">
        <div className="language-container-inner">
          <img src={htmlIcon} alt="" />
          <span>
            <h3>Hypertext Markup Language</h3>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </span>
        </div>
        <input
          type="submit"
          className="update-btn"
          value="Update"
          onClick={() => setModal(true)}
        />
      </div>
      <div className="statistics-container">
        <h3>Quick Statistics</h3>
        <div className="statistics-items">
          <div className="statistic-item">
            <div className="statistics-icon-container">🏆</div>
            <div className="statistics-count-container">
              <h3>{rank}</h3>
              <p>YOUR RANK</p>
            </div>
          </div>
          <div className="statistic-item">
            <div className="statistics-icon-container">📋</div>
            <div className="statistics-count-container">
              <h3>{percentile}%</h3>
              <p>PERCENTILE</p>
            </div>
          </div>
          <div className="statistic-item">
            <div className="statistics-icon-container">✅</div>
            <div className="statistics-count-container">
              <h3>{score > 9 ? `${score}` : `0${score}`} / 15</h3>
              <p>CORRECT ANSWERS</p>
            </div>
          </div>
        </div>
      </div>
      <Comparison percentile={percentile} />
      <Modal
        modal={modal}
        setModal={setModal}
        rank={rank}
        setRank={setRank}
        percentile={percentile}
        setPercentile={setPercentile}
        score={score}
        setScore={setScore}
      />
      <div className="overlay"></div>
    </div>
  );
};

export default SkillMiddleContainer;
