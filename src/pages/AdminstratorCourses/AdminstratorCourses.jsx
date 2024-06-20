import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import search from '../../assets/search.svg';
import plus from '../../assets/plus.svg';
import more from '../../assets/more.svg';
import { StudentNavigation } from '../../components/StudentNavigation';
import { useNavigate } from 'react-router-dom';
import './style.css';
import data from '../../../data.json'; // Import data from data.json

export const AdminstratorCourses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const reduxCourses = useSelector((state) => state.courses); // Courses from Redux store
  const [localCourses, setLocalCourses] = useState([]); // Local state for courses
  const [showDropdown, setShowDropdown] = useState(null); // Track which dropdown is open
  const [showEditDropdown, setShowEditDropdown] = useState(null); // Track which edit dropdown is open

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  
    // Fetch courses from local storage
    fetchCourses();
  }, []);
  
  const fetchCourses = () => {
    let localCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setLocalCourses(localCourses);
  };
  
  // Combine courses from Redux store, data.json, and local state
  const combinedCourses = [...reduxCourses, ...data.courses, ...localCourses];
  
  // Deduplicate courses based on unique course IDs
  const allCourses = Array.from(new Map(combinedCourses.map(course => [course.id, course])).values());
  
  // Filter courses based on search query
  const filteredCourses = allCourses.filter((course) =>
    Object.values(course)
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  

  const handleChange = () => {
    navigate('/add');
  };

  const handleActionClick = (courseId) => {
    setShowDropdown(showDropdown === courseId ? null : courseId);
    setShowEditDropdown(null); // Close edit dropdown if another action dropdown is opened
  };

  const handleEdit = (courseId) => {
    setShowEditDropdown(showEditDropdown === courseId ? null : courseId);
  };

  const handleUnarchive = (courseId) => {
    const updatedCourses = localCourses.map(course =>
      course.id === courseId ? { ...course, status: 'Unarchived' } : course
    );
    setLocalCourses(updatedCourses);
    updateLocalStorage(updatedCourses);
    setShowDropdown(null);
    setShowEditDropdown(null);
  };
  
  const handleClose = (courseId) => {
    const updatedCourses = localCourses.map(course =>
      course.id === courseId ? { ...course, status: 'Closed' } : course
    );
    setLocalCourses(updatedCourses);
    updateLocalStorage(updatedCourses);
    setShowDropdown(null);
    setShowEditDropdown(null);
  };
  
  const handleArchive = (courseId) => {
    const updatedCourses = localCourses.map(course =>
      course.id === courseId ? { ...course, status: 'Archived' } : course
    );
    setLocalCourses(updatedCourses);
    updateLocalStorage(updatedCourses);
    setShowDropdown(null);
    setShowEditDropdown(null);
  };
  
  const updateLocalStorage = (updatedCourses) => {
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };
  
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return { backgroundColor: 'rgba(207, 249, 223, 1)', width: '66px', height: '32px', padding: '4px 8px 4px 8px', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" };
      case 'Closed':
        return { backgroundColor: 'rgba(254, 192, 202, 1)', width: '66px', height: '32px', padding: '4px 8px 4px 8px', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" };
      case 'Archived':
        return { backgroundColor: 'rgba(229, 231, 235, 1)', width: '66px', height: '32px', padding: '4px 8px 4px 8px', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" };
      case 'Unarchived':
        return { backgroundColor: 'rgba(229, 231, 235, 1)', width: '66px', height: '32px', padding: '4px 8px 4px 8px', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" };
      default:
        return {};
    }
  };

  return (
    <div className="adminstrator-courses">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <button onClick={handleChange} className="extended-FAB">
            <div className="state-layer">
              <img alt="Mdi plus" src={plus} />
              <div className="label-text">Add Course</div>
            </div>
          </button>
          <div className="frame-3">
            <StudentNavigation />
            <div className="body">
              <div className="frame-4">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Courses</div>
                </div>
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="course-list">COURSE LIST</div>
                    <div className="outline-input">
                      <img className="mdi-magnify" alt="Mdi magnify" src={search} />
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-2">
                      <header className="header">
                        <div className="div-2">
                          <div className="text-wrapper-6">Name</div>
                          <div className="text-wrapper-6">Description</div>
                          <div className="text-wrapper-6">Instructor</div>
                          <div className="text-wrapper-6">Instrument</div>
                          <div className="text-wrapper-6">Day of Week</div>
                          <div className="text-wrapper-6">No. of Students</div>
                          <div className="text-wrapper-6">Price</div>
                          <div className="text-wrapper-6">Status</div>
                        </div>
                        <div className="text-wrapper-7">Actions</div>
                      </header>
                      <div className="body-2">
                        {filteredCourses.map((course) => (
                          <div className="row" key={course.id}>
                            <div className="div-2">
                              <div className="text-wrapper-6">{course.name}</div>
                              <div className="text-wrapper-6">{course.description}</div>
                              <div className="text-wrapper-6">{course.instructor}</div>
                              <div className="text-wrapper-6">{course.instrument}</div>
                              <div className="text-wrapper-6">{course.dayOfWeek}</div>
                              <div className="text-wrapper-6">{course.numOfStudents}</div>
                              <div className="text-wrapper-6">{course.price}</div>
                              <div className="chip-wrapper" style={getStatusStyle(course.status)}>
                                <div className="text-wrapper-8">{course.status}</div>
                              </div>
                            </div>
                            <div className="action">
                              <img
                                className="mdi-dots-vertical"
                                alt="Mdi dots vertical"
                                src={more}
                                onClick={() => handleActionClick(course.id)}
                              />
                              {showDropdown === course.id && (
                                <div className="dropdown-menu">
                                  <div onClick={() => handleEdit(course.id)}>Edit Course</div>
                                  <div onClick={() => handleClose(course.id)}>Close Course</div>
                                  <div onClick={() => handleArchive(course.id)}>Archive Course</div>
                                  
                                </div>
                                
                              )}
                              {showEditDropdown === course.id && (
                                    <div className="edit-dropdown-menu">
                                      <div onClick={() => handleUnarchive(course.id)}>Unarchive Course</div>
                                    </div>
                                  )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
