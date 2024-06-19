import { selectCourse, unSelectCourse, fetchCourses, setCourses} from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE,  SET_COURSES } from './courseActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

destribe('Testing Action Creators', () => {
    it('test selectCourse Actions', () => {
        const action = selectCourse(1);
        const expectedResult = { type: SELECT_COURSE, index: 1 };
        expect(action).toEqaul(expectedResult);
    });

    it('test UnSelectCourse Action', () => {
        const action = unSelectCourse(1);
        const expectedResult = { type: UNSELECT_COURSE, index: 1 };
        expect(action).toEqaul(expectedResult);
    });
});

describe('courseActionCreators', () => {
    describe('fetchCourses', () => {
      it('should dispatch setCourses action when fetch is successful', () => {
        const expectedCourses = [
          { id: 1, name: 'Course 1' },
          { id: 2, name: 'Course 2' },
        ];
  
        fetch.mockResponseOnce(JSON.stringify(expectedCourses));
  
        const store = mockStore();
  
        return store.dispatch(fetchCourses()).then(() => {
          expect(store.getActions()).toEqual([
            { type: SET_COURSES, courses: expectedCourses },
          ]);
        });
      });
    });
  });