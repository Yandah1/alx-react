import * as actions from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const defaultState = Map();

export default courseReducer = (state = defaultState, action = { type: null }) => {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS: {
            const normalizedData = coursesNormalizer(action.data);
            const courses = Map(normalizedData.entities.courses).map(course => ({ ...course, isSelected: false }));
            return state.merge(courses);
        }
        
        case actions.SELECT_COURSE:
            return state.update(action.index, course => ({ ...course, isSelected: true }));
        
        case actions.UNSELECT_COURSE:
            return state.update(action.index, course => ({ ...course, isSelected: false }));
        
        default:
            return state;
    }
};
