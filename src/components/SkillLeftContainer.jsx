import React from "react";
import "../componentscss/SkillLeftContainer.css";
import { Link } from "react-router-dom";
import dashboardIcon from "../assets/dashboard.svg";
import skilTestIcon from "../assets/skilltest.svg";
import internshipsIcon from "../assets/internships.svg";

const SkillLeftContainer = () => {
  return (
    <div className="skill-left-container">
      <Link className="dashboard-container">
        <img src={dashboardIcon} className="dashboard-icon"></img>
        <p>Dashboard</p>
      </Link>
      <Link className="skill-test-container active">
        <img src={skilTestIcon} className="skill-test-icon"></img>
        <p>Skill Test</p>
      </Link>
      <Link className="internships-container">
        <img src={internshipsIcon} className="internships-icon"></img>
        <p>Internships</p>
      </Link>
    </div>
  );
};

export default SkillLeftContainer;
