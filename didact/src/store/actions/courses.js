import axiosWithAuth from '../../utils/axiosWithAuth';

export const COURSE_DATA_START = 'COURSE_DATA_START';
export const COURSE_DATA_SUCCESS = 'COURSE_DATA_SUCCESS';
export const COURSE_DATA_FAILURE = 'COURSE_DATA_FAILURE';
export const SINGLE_COURSE_DATA_START = 'SINGLE_COURSE_DATA_START';
export const SINGLE_COURSE_DATA_SUCCESS = 'SINGLE_COURSE_DATA_SUCCESS';
export const SINGLE_COURSE_DATA_FAILURE = 'SINGLE_COURSE_DATA_FAILURE';
export const ADD_COURSE_DATA_START = 'ADD_COURSE_DATA_START';
export const ADD_COURSE_DATA_SUCCESS = 'ADD_COURSE_DATA_SUCCESS';
export const ADD_COURSE_DATA_FAILURE = 'ADD_COURSE_DATA_FAILURE';
export const EDIT_COURSE_DATA_START = 'EDIT_COURSE_DATA_START';
export const EDIT_COURSE_DATA_SUCCESS = 'EDIT_COURSE_DATA_SUCCESS';
export const EDIT_COURSE_DATA_FAILURE = 'EDIT_COURSE_DATA_FAILURE';
export const DELETE_COURSE_DATA_START = 'DELETE_COURSE_DATA_START';
export const DELETE_COURSE_DATA_SUCCESS = 'DELETE_COURSE_DATA_SUCCESS';
export const DELETE_COURSE_DATA_FAILURE = 'DELETE_COURSE_DATA_FAILURE';

export const ADD_TAG_TO_COURSE_START = "ADD_TAG_TO_COURSE_START"
export const ADD_TAG_TO_COURSE_SUCCESS = "ADD_TAG_TO_COURSE_SUCCESS"
export const ADD_TAG_TO_COURSE_FAIL = "ADD_TAG_TO_COURSE_FAIL"
export const ADD_SECTION_START = "ADD_SECTION_START"
export const ADD_SECTION_SUCCESS = "ADD_SECTION_SUCCESS"
export const ADD_SECTION_FAIL = "ADD_SECTION_FAIL"
export const UPDATE_SECTION_START = "UPDATE_SECTION_START"
export const UPDATE_SECTION_SUCCESS = "UPDATE_SECTION_SUCCESS"
export const UPDATE_SECTION_FAIL = "UPDATE_SECTION_FAIL"

const baseURL = 'https://didactlms-staging.herokuapp.com/api/courses/'

export const courseEndPoint =() => dispatch => {
    dispatch({type: COURSE_DATA_START})
    axiosWithAuth()
    .get(`https://didactlms-staging.herokuapp.com/api/courses`)
    .then(res => {
        // console.log('all courses api response: ', res)
        dispatch({type: COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: COURSE_DATA_FAILURE, payload: err})
    })
}

export const getCourseById =(id) => dispatch => {
    dispatch({type: SINGLE_COURSE_DATA_START})
    axiosWithAuth()
    .get(`https://didactlms-staging.herokuapp.com/api/courses/${id}`)
    .then(res => {
        // console.log('single course api response: ', res)
        dispatch({type: SINGLE_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SINGLE_COURSE_DATA_FAILURE, payload: err})
    })
}

export const addCourse =(values) => dispatch => {
    dispatch({type: ADD_COURSE_DATA_START})
    axiosWithAuth()
    .post(`https://didactlms-staging.herokuapp.com/api/courses/`, values)
    .then(res => {
        // console.log('add course api response: ', res)
        dispatch({type: ADD_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: ADD_COURSE_DATA_FAILURE, payload: err})
    })
}

export const editCourse =(id, values) => dispatch => {
    dispatch({type: EDIT_COURSE_DATA_START})
    axiosWithAuth()
    .put(`https://didactlms-staging.herokuapp.com/api/courses/${id}`, values)
    .then(res => {
        // console.log('edit course api response: ', res)
        dispatch({type: EDIT_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: EDIT_COURSE_DATA_FAILURE, payload: err})
    })
}

export const deleteCourse =(id) => dispatch => {
    dispatch({type: DELETE_COURSE_DATA_START})
    axiosWithAuth()
    .delete(`https://didactlms-staging.herokuapp.com/api/courses/${id}`)
    .then(res => {
        // console.log('edit course api response: ', res)
        dispatch({type: DELETE_COURSE_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: DELETE_COURSE_DATA_FAILURE, payload: err})
    })
}

export const addTagToCourse = (id, tag) => dispatch =>
{
    dispatch({ type: ADD_TAG_TO_COURSE_START })
    axiosWithAuth()
    .post(`${baseURL}${id}/tags`, tag)
    .then(res => 
        {
            console.log('res from add tag to course', res)
            dispatch({ type: ADD_TAG_TO_COURSE_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: ADD_TAG_TO_COURSE_FAIL, payload: err })
    })
}

export const addSectionToCourse = (id, sectionObj) => dispatch =>
{
    dispatch({ type: ADD_SECTION_START })
    axiosWithAuth()
    .post(`${baseURL}${id}/sections`, sectionObj)
    .then(res => 
        {
            console.log('res from add section to course', res)
            dispatch({ type: ADD_SECTION_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: ADD_SECTION_FAIL, payload: err })
    })
}

export const updateSection = (id, changes) => dispatch =>
{
    dispatch({ type: UPDATE_SECTION_START })
    axiosWithAuth()
    .put(`${baseURL}${id}/sections`, changes)
    .then(res => 
        {
            console.log('res from add section to course', res)
            dispatch({ type: UPDATE_SECTION_SUCCESS })
        })
    .catch(err => {
        dispatch({ type: UPDATE_SECTION_FAIL, payload: err })
    })
}