// actions/someActions.js
import axios from '../api';

import { QUALIFICATION_SUCCESS, QUALIFICATION_FALIURE } from '../action_types';
// Action Creators
export const fetchQualificationSuccess = (data) => ({
    type: QUALIFICATION_SUCCESS,
    payload: data,
});

export const fetchQualificationFailure = (error) => ({
    type: QUALIFICATION_FALIURE,
    payload: error,
});

// Async Action to Fetch Data
export const onQualificationsList = (wardNo) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/getQualifications`, {});
            console.log(response, "dashboard response")
            dispatch(fetchQualificationSuccess(response.data));
        } catch (error) {
            dispatch(fetchQualificationFailure(error));
        }
    };
};



