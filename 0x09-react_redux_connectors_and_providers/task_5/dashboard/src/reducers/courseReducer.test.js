import courseReducer from '../reducers/courseReducer';
import * as actions from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
    it('handles FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: actions.FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: 'ES6', credit: 60 },
                { id: 2, name: 'Webpack', credit: 20 },
                { id: 3, name: 'React', credit: 40 }
            ]
        };

        const expected = fromJS({
            1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
            2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            3: { id: 3, name: 'React', credit: 40, isSelected: false }
        });

        const state = courseReducer(undefined, action);
        expect(state).toEqual(expected);
    });

    it('handles SELECT_COURSE', () => {
        const initialState = fromJS({
            1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
            2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
            3: { id: 3, name: 'React', credit: 40, isSelected: false }
        });

        const action = {
            type: actions.SELECT_COURSE,
            index: 2
        };

        const expected = initialState.setIn([2, 'isSelected'], true);

        const state = courseReducer(initialState, action);
        expect(state).toEqual(expected);
    });

    it('handles UNSELECT_COURSE', () => {
        const initialState = fromJS({
            1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
            2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
            3: { id: 3, name: 'React', credit: 40, isSelected: false }
        });

        const action = {
            type: actions.UNSELECT_COURSE,
            index: 2
        };

        const expected = initialState.setIn([2, 'isSelected'], false);

        const state = courseReducer(initialState, action);
        expect(state).toEqual(expected);
    });
});
