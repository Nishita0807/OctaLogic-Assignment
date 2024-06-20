import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    instructor: '',
    instrument: '',
    dayOfWeek: '',
    price: '',
    numOfStudents: 'column',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNavigation = () => {
    navigate('/course');
  };

  const handleAddCourse = () => {
    const newCourse = {
      id: Date.now(),
      ...courseData,
      price: `$${courseData.price}`, // Add dollar sign before storing to local storage

      status: 'Active',
    };
  
    dispatch({ type: 'ADD_COURSE', payload: newCourse });
  
    // Save to local storage if token is present
    const token = localStorage.getItem('token');
    if (token) {
      let storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
      storedCourses.push(newCourse);
      localStorage.setItem('courses', JSON.stringify(storedCourses));
    }
  
    alert('New Course Added successfully');
    navigate('/course');
  
    setCourseData({
      name: '',
      description: '',
      instructor: '',
      instrument: '',
      dayOfWeek: '',
      price: '',
      numOfStudents: 'column',
    });
  };
  

  return (
    <div className="frame">
      <div className="text-wrapper">Add Course</div>
      <div className="div">
        <input
          className="outline-input"
          type="text"
          name="name"
          placeholder="Course Name"
          value={courseData.name}
          onChange={handleInputChange}
        />

        <input
          className="outline-input"
          type="text"
          name="description"
          placeholder="Description"
          value={courseData.description}
          onChange={handleInputChange}
        />

        <input
          className="outline-input"
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={courseData.instructor}
          onChange={handleInputChange}
        />

        <select
          className="outline-input"
          name="instrument"
          value={courseData.instrument}
          onChange={handleInputChange}
        >
          <option value="" disabled>Instrument</option>
          <option value="guitar">Guitar</option>
          <option value="piano">Piano</option>
          <option value="sitar">Sitar</option>
          <option value="flute">Flute</option>
        </select>

        <select
          className="outline-input"
          name="dayOfWeek"
          value={courseData.dayOfWeek}
          onChange={handleInputChange}
        >
          <option value="" disabled>Day of the week</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <input
          className="outline-input"
          type="number"
          name="price"
          placeholder="Price"
          value={courseData.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="div-2">
        <div className="div-wrapper">
          <button onClick={handleNavigation} className="text-wrapper-42">
            Cancel
          </button>
        </div>
        <div className="div-wrapper-2">
          <button className="text-wrapper-42" onClick={handleAddCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
