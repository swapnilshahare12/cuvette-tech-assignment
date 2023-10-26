import React from "react";
import "../componentscss/QuestionAnalysis.css";
import AnalysisProgress from "./AnalysisProgress";

const QuestionAnalysis = ({score}) => {
  return (
    <div className="question-analysis-container">
      <div className="question-analysis-header">
        <h3>Question Analysis</h3>
        <p>{score > 9 ? `${score}` : `0${score}`} / 15</p>
      </div>
      <p>
        <span>You scored 7 question correct out of 15.</span> However it still
        needs some improvements
      </p>
      {/* if user solves 7 questions out of 15 then it would be 46.66% */}
      <AnalysisProgress point={46.66} />
    </div>
  );
};

export default QuestionAnalysis;
