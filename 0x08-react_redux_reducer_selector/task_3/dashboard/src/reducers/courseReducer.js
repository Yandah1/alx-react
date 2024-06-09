import * as actions from '../actions/courseActionTypes';

const defaultState = [];

export default courseReducer = (state = defaultState, action={type: null}) => {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({ ...course, isSelected: false}));
        
        case actions.SELECT_COURSE:
            return state.map((course) => course.id == action.index ? { ...course, isSelected: false} : {...course});    
        
        case actions.UNSELECT_COURSE:
            return state.map((course) => course.id == action.index ? {...course, isSelected: false} : {...course});          
        
        default:
            return state;
    }
};