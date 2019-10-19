import dispatcher from '../dispatcher';
import * as CourseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function saveCourse(course) {
    return CourseApi.saveCourse(course).then(savedCourse => {
      // Hey dispatcher, go tell all the stores that a course was just created.
      dispatcher.dispatch({
        actionType: course.id
          ? actionTypes.UPDATE_COURSE
          : actionTypes.CREATE_COURSE,
        course: savedCourse
      });
    });
}
  
export function loadCourses() {
    return CourseApi.getCourses().then(courses => {
        dispatcher.dispatch({
        actionType: actionTypes.LOAD_COURSES,
        courses: courses
        });
    });
}
  
export function deleteCourse(id) {
    return CourseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
        actionType: actionTypes.DELETE_COURSE,
        id: id
        });
    });
}