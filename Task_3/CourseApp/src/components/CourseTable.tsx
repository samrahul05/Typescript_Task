import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseTable.scss';

interface Course {
  image: string;
  name: string;
  lessons: number;
  startDate: string;
  lessonsCompleted: string;
  duration: string;
}

const CourseTable: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get('http://localhost:6060/courseData')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  return (
    <div className="course-table">
        <header className='header'>
            <h3>My Courses</h3>
            <h4>View All</h4>
        </header>
      
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lesson Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
          <tr key={index}>
             <td>
                <div className="info">
                  <img className="icon" src={course.image}/>
                  <div className="name">
                    <div>{course.name}</div>
                    <div className="lessons">{course.lessons} Lessons</div>
                  </div>
                </div>
              </td>
              <td>{course.startDate}</td>
              <td>{course.lessonsCompleted}</td>
              <td>{course.duration}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
