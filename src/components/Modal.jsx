import React, { useState } from "react";
import "../componentscss/Modal.css";
import htmlIcon from "../assets/html.svg";
import rightArrowIcon from "../assets/right-arrow.svg";

const Modal = ({
  modal,
  setModal,
  rank,
  setRank,
  percentile,
  setPercentile,
  score,
  setScore,
}) => {
  return (
    <div className="modal">
      <div className={modal ? "confirm show" : "confirm"}>
        <div className="modal-header">
          <h3>Update Scores</h3>
          <img src={htmlIcon} alt="html-icon" />
        </div>
        <div className="input-container">
          <div className="input-items">
            <div className="input-item-left">
              <div className="count-box">1</div>
              <p>
                Update your <span>rank</span>
              </p>
            </div>
            <div className="input-item-right">
              <input
                type="number"
                name=""
                id=""
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>
          </div>
          <div className="input-items">
            <div className="input-item-left">
              <div className="count-box">2</div>
              <p>
                Update your <span>percentile</span>
              </p>
            </div>
            <div className="input-item-right">
              <input
                type="number"
                name=""
                id=""
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
              />
            </div>
          </div>
          <div className="input-items">
            <div className="input-item-left">
              <div className="count-box">3</div>
              <p>
                Update your <span>current score (out of 15)</span>
              </p>
            </div>
            <div className="input-item-right">
              <input
                type="number"
                name=""
                id=""
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={() => setModal(false)}>
            Cancel
          </button>
          <button className="save-btn" onClick={() => setModal(false)}>
            Save <img src={rightArrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="overlay" onClick={() => setModal(false)} />
    </div>
  );
};

export default Modal;
