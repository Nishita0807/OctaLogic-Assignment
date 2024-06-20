import React, { useEffect } from 'react';
import { Frame } from "../../components/Frame";
import user from '../../assets/user.svg'
import { StudentNavigation } from "../../components/StudentNavigation";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import data from '../../../data.json';

export const Adminstrator = () => {
  const navigate = useNavigate();
  const [overviewData, setOverviewData] = React.useState({
    totalCourses: 0,
    totalAmountEarned: "$0",
    bestPerformingCourse: "",
    worstPerformingCourse: "",
  });
  const [latestEnrollments, setLatestEnrollments] = React.useState([]);
  const [bestStudents, setBestStudents] = React.useState([]);
  useEffect(() => {
    
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, []);
  useEffect(() => {
    setOverviewData({
      totalCourses: data.overview.totalCourses,
      totalAmountEarned: data.overview.totalAmountEarned,
      bestPerformingCourse: data.overview.bestPerformingCourse,
      worstPerformingCourse: data.overview.worstPerformingCourse,
    });
  
    // Fetch latest enrollments data
    setLatestEnrollments(data.latestEnrollments);
  
    // Fetch best students data
    setBestStudents(data.bestStudents);
  }, []);
  return (
    <div className="adminstrator">
      <StudentNavigation />
      <div className="frame-4">
        <div className="div-wrapper">
          <div className="overview">Overview</div>
        </div>
        <div className="div-6">
          <Frame className="frame-20" icBaselinePeople={user} />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text={overviewData.totalCourses}
            text1="total number of courses"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text={overviewData.totalAmountEarned}
            text1="total amount earned"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text={overviewData.bestPerformingCourse}
            text1="best performing course"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text={overviewData.worstPerformingCourse}
            text1="worst performing course"
          />
        </div>
        <div className="frame-5">
          <div className="div-6">
            <div className="text-wrapper-6">LATEST ENROLMENTS</div>
            <div className="text-wrapper-7">View All Courses</div>
          </div>
          <div className="table">
            <div className="table-2">
              <div className="header">
                <div className="text-wrapper-8">Enr. No</div>
                <div className="text-wrapper-8">S. Name</div>
                <div className="text-wrapper-8">C. Name</div>
                <div className="text-wrapper-8">Fees</div>
                <div className="text-wrapper-8">Enr. Date</div>
              </div>
              <div className="body">
              {latestEnrollments.map((enrollment) => (
        <div className="row" key={enrollment.enrollmentNumber}>
          <div className="text-wrapper-9">{enrollment.enrollmentNumber}</div>
          <div className="text-wrapper-9">{enrollment.studentName}</div>
          <div className="text-wrapper-9">{enrollment.courseName}</div>
          <div className="text-wrapper-9">{enrollment.fees}</div>
          <div className="text-wrapper-9">{enrollment.enrollmentDate}</div>
        </div>
      ))}
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
              
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="div-6">
            <div className="text-wrapper-6">BEST STUDENTS</div>
            <div className="text-wrapper-7">View All Students</div>
          </div>
          <div className="table">
            <div className="table-2">
              <div className="header">
                <div className="text-wrapper-8">Reg. No</div>
                <div className="text-wrapper-8">F. Name</div>
                <div className="text-wrapper-8">L. Name</div>
                <div className="text-wrapper-8">Course #</div>
                <div className="text-wrapper-8">Total Fees</div>
                <div className="text-wrapper-8">Reg. Date</div>
              </div>
              <div className="body">
              {bestStudents.map((student, index) => (
          <div className="row" key={index}>
            <div className="text-wrapper-9">{student.registrationNumber}</div>
            <div className="text-wrapper-9">{student.firstName}</div>
            <div className="text-wrapper-9">{student.lastName}</div>
            <div className="text-wrapper-9">{student.courseNumber}</div>
            <div className="text-wrapper-9">{student.totalFees}</div>
            <div className="text-wrapper-9">{student.registrationDate}</div>
          </div>
          
        ))}
                <div className="row">
                <div className="text-wrapper-9">column</div>

                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>

                </div>
                <div className="row">
                <div className="text-wrapper-9">column</div>

                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                <div className="text-wrapper-9">column</div>

                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
