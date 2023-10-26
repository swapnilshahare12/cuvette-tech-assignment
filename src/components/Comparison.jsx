import React from "react";
import "../componentscss/Comparison.css";
import ComparisonGraph from "./ComparisonGraph";

const Comparison = ({percentile}) => {
  return (
    <div className="comparison">
      <h3>Comparison</h3>
      <div className="comparison-graph-desc">
        <p>
          <span>You scored {percentile}% percentile</span> which is lower than the <br />{" "}
          average percentile 72% of all the engineers who took this assessment
        </p>
        <div className="graph-icon">📈</div>
      </div>
      <div>
        <ComparisonGraph />
      </div>
    </div>
  );
};

export default Comparison;
