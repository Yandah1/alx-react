import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from "./courseActionTypes";
import { connect } from 'react-redux';

export const selectCourse = (index) => {
    return{
        type: SELECT_COURSE,
        index
    };
}

export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    };
}

const mapDispatchToProps = dispatch => {
    return {
      boundSelectCourse: index => dispatch(selectCourse(index)),
      boundUnSelectCourse: index => dispatch(unSelectCourse(index)),
    };
  };
  
export default connect(null, mapDispatchToProps);

export const fetchCourses = () => {
    return (dispatch) => {
      fetch('courses.json')
        .then(response => response.json())
        .then(data => {
          dispatch(setCourses(data));
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
    };
  };
  
  export const setCourses = (courses) => {
    return {
      type: SET_COURSES,
      courses
    };
  };