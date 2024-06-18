import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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