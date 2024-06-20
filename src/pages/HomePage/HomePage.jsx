import React, { useState } from "react";
import './Homepage.css';
import { Link } from "react-router-dom";


export const HomePage = () => {
  
    return (
        <div className="homepage-container">
        <div className="header">
        <div className="text-wrapper">
        <h1>Administrator</h1>
        </div>
        </div>
        <div className="content">
        <p>
        As the administrator of a music school, I will need to be able to
        create courses, view enrolments and review analytics for the entire
        school. I should also be able to see a cumulative view of all students
        in the school regardless of the course. Only I should be able to access
        this data through a username and password.
        </p>
        </div>

        <Link to='/login' className="login-link">Login</Link>
        <div className="author">
            <div>Author : Glenn Fernandes</div>
            <div>Last Update : 22-08-2023</div>
        </div>
        </div>
    );
};

export default HomePage;
