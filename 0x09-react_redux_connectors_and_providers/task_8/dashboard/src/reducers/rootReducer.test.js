import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should have the initial state', () => {
    const initialState = {
      courses: {},
      notifications: {},
      ui: {}
    };
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});