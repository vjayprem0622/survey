// actions/someActions.js
import axios from '../api';

import { GENDER_SUCCESS, GENDER_FALIURE } from '../action_types';
// Action Creators
export const fetchGenderSuccess = (data) => ({
    type: GENDER_SUCCESS,
    payload: data,
});

export const fetchGenderFailure = (error) => ({
    type: GENDER_FALIURE,
    payload: error,
});

// Async Action to Fetch Data
export const onGenderList = (wardNo) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/getGender`, {});
            console.log(response, "dashboard response")
            dispatch(fetchGenderSuccess(response.data));
        } catch (error) {
            dispatch(fetchGenderFailure(error));
        }
    };
};



