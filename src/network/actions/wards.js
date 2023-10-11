// actions/someActions.js
import axios from '../api';

import { WARD_SUCCESS, WARD_FALIURE } from '../action_types';
// Action Creators
export const fetchWardSuccess = (data) => ({
    type: WARD_SUCCESS,
    payload: data,
});

export const fetchWardFailure = (error) => ({
    type: WARD_FALIURE,
    payload: error,
});

// Async Action to Fetch Data
export const onWardList = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`getWards?municipalId=${id}`, {});
            console.log(response, "dashboard response")
            dispatch(fetchWardSuccess(response.data));
        } catch (error) {
            dispatch(fetchWardFailure(error));
        }
    };
};



