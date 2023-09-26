// actions/someActions.js
import axios from '../api';

import { FAMILIES_LIST_SUCCESS, FAMILIES_LIST_FALIURE } from '../action_types';
// Action Creators
export const fetchFamiliesListSuccess = (data) => ({
    type: FAMILIES_LIST_SUCCESS,
    payload: data,
});

export const fetchFamiliesListFailure = (error) => ({
    type: FAMILIES_LIST_FALIURE,
    payload: error,
});

// Async Action to Fetch Data
export const onFamiliesList = (pageNo, wardId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`familyList?page=${pageNo}&size=10&wardId=${wardId}`, {});
            console.log(response, "dashboard response")
            dispatch(fetchFamiliesListSuccess(response.data));
        } catch (error) {
            dispatch(fetchFamiliesListFailure(error));
        }
    };
};



