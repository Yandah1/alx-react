import { courseReducer, initialCourseState} from './courseReducer';
import { notificationReducer, initialNotificationState } from './notificationReducer';
import { uiReducer, initialUiState } from './uiReducer';
import notificationReducer from './notificationReducer'

export const initialState = {
  courses: initialCourseState,
  notifications: initialNotificationState,
  ui: initialUiState,
};

export const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
};