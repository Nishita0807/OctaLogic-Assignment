
import log from '../../assets/logout.svg'
import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

export const Account = ({ className }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className={`account ${className}`}>
      <button onClick={handleLogout} className="frame">
        <img className="mdi-logout" alt="Mdi logout" src={log} />
        <div className="text-wrapper">Logout</div>
      </button>
    </div>
  );
};
