// components/CourseList.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
