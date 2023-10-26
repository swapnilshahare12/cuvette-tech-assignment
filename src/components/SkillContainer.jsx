import React, { useState } from "react";
import "../componentscss/SkillConatiner.css";
import SkillLeftContainer from "./SkillLeftContainer";
import SkillMiddleContainer from "./SkillMiddleContainer";
import SkillRightContainer from "./SkillRightContainer";

const SkillContainer = () => {
  const [score, setScore] = useState(7);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  return (
    <section className="skill-container">
      <SkillLeftContainer />
      <SkillMiddleContainer
        score={score}
        setScore={setScore}
        rank={rank}
        setRank={setRank}
        percentile={percentile}
        setPercentile={setPercentile}
      />
      <SkillRightContainer score={score} />
    </section>
  );
};

export default SkillContainer;
