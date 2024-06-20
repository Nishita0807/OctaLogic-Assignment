
import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../Account";
import home from '../../assets/home.svg'
import course from '../../assets/courses.svg'
import logo from '../../assets/logo.svg'
import "./style.css";

export const StudentNavigation = () => {
  
  return (
    <div className="student-navigation">
<Link to="/">      <img className="logo" alt="Logo" src={logo} />
</Link>
      <div className="modules">
      <Link className="frame-2" to="/overview">
      <div className="div">
          <img className="img" alt="Mdi view dashboard" src={home} />
          <div className="text-wrapper-2">Home</div>
        </div>
      </Link>
        
        <Link className="frame-2" to="/course">
          <img className="img" alt="Ic outline queue" src={course} />
          <div className="text-wrapper-3">Courses</div>
        </Link>
      </div>
      <Account className="account-instance" />
    </div>
  );
};
