import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
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