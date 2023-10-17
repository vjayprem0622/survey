"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 4915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports fetchReligionSuccess, fetchReligionFailure, onReligionList */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchReligionSuccess = (data)=>({
        type: RELIGION_SUCCESS,
        payload: data
    });
const fetchReligionFailure = (error)=>({
        type: RELIGION_FALIURE,
        payload: error
    });
// Async Action to Fetch Data
const onReligionList = ()=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`/getReligions`, {});
            console.log(response, "dashboard response");
            dispatch(fetchReligionSuccess(response.data));
        } catch (error) {
            dispatch(fetchReligionFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _network_actions_religion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4915);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_actions_religion__WEBPACK_IMPORTED_MODULE_0__]);
_network_actions_religion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { useDispatch } from "react-redux"


async function handler(req, res) {
    // var dispatch = useDispatch();
    // const rootDispatch = initializeStore.dispatch;
    // Dispatch the action
    // rootDispatch(onReligionList());
    res.status(200).json({
        name: "John Doe"
    });
// try {
//   // dispatch(onReligionList())
// } catch (error) {
//   res.status(500).json(error.message)
// }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5435:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./src/network/action_types/index.js
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const DASHBOARD_FAILURE = "DASHBOARD_FAILURE";
const DASHBOARD_SUCCESS = "DASHBOARD_SUCCESS";
const RATION_SUCCESS = "RATION_SUCCESS";
const RATION_FALIURE = "RATION_FALIURE";
const GENDER_SUCCESS = "GENDER_SUCCESS";
const GENDER_FALIURE = "GENDER_FALIURE";
const ECONOMIC_CATEGORIES_SUCCESS = "ECONOMIC_CATEGORIES_SUCCESS";
const ECONOMIC_CATEGORIES_FALIURE = "ECONOMIC_CATEGORIES_FALIURE";
const RESIDENTIAL_SUCCESS = "RESIDENTIAL_SUCCESS";
const RESIDENTIAL_FALIURE = "RESIDENTIAL_FALIURE";
const RELATION_SUCCESS = "RELATION_SUCCESS";
const RELATION_FALIURE = "RELATION_FALIURE";
const QUALIFICATION_SUCCESS = "QUALIFICATION_SUCCESS";
const QUALIFICATION_FALIURE = "QUALIFICATION_FALIURE";
const OCCUPATION_SUCCESS = "OCCUPATION_SUCCESS";
const OCCUPATION_FALIURE = "OCCUPATION_FALIURE";
const SET_VALUE = "SET_VALUE";
const SET_VALUE_ERROR = "SET_VALUE_ERROR";
const RELIGION_SUCCESS = "RELIGION_SUCCESS";
const RELIGION_FALIURE = "RELIGION_FALIURE";
const SOCIAL_CAT_SUCCESS = "SOCIAL_CAT_SUCCESS";
const SOCIAL_CAT_FALIURE = "SOCIAL_CAT_FALIURE";
const DISTRICT_SUCCESS = "DISTRICT_SUCCESS";
const DISTRICT_FALIURE = "DISTRICT_FALIURE";
const MUNICIPALITY_SUCCESS = "MUNICIPALITY_SUCCESS";
const MUNICIPALITY_FALIURE = "MUNICIPALITY_FALIURE";
const WARD_SUCCESS = "WARD_SUCCESS";
const WARD_FALIURE = "WARD_FALIURE";
const FAMILY_DETAIL_SUCCESS = "FAMILY_DETAIL_SUCCESS";
const FAMILY_DETAIL_FALIURE = "FAMILY_DETAIL_FALIURE";
const FAMILIES_LIST_SUCCESS = "FAMILIES_LIST_SUCCESS";
const FAMILIES_LIST_FALIURE = "FAMILIES_LIST_FALIURE";
const FAMILIES_DETAIL_SUCCESS = "FAMILIES_DETAIL_SUCCESS";
const FAMILIES_DETAIL_FALIURE = "FAMILIES_DETAIL_FALIURE";

;// CONCATENATED MODULE: ./src/network/reducers/login.js
// reducers/someReducer.js

const initialState = {
    data: [],
    error: null
};
const login = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_login = (login);

;// CONCATENATED MODULE: ./src/network/reducers/dashboard.js
// reducers/someReducer.js

const dashboard_initialState = {
    data: [],
    error: null
};
const dashboard = (state = dashboard_initialState, action)=>{
    switch(action.type){
        case DASHBOARD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case DASHBOARD_FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_dashboard = (dashboard);

;// CONCATENATED MODULE: ./src/network/reducers/rationDetails.js
// reducers/someReducer.js

const rationDetails_initialState = {
    data: [],
    error: null
};
const rationDetails = (state = rationDetails_initialState, action)=>{
    switch(action.type){
        case RATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case RATION_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_rationDetails = (rationDetails);

;// CONCATENATED MODULE: ./src/network/reducers/gender.js
// reducers/someReducer.js

const gender_initialState = {
    data: [],
    error: null
};
const gender = (state = gender_initialState, action)=>{
    switch(action.type){
        case GENDER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case GENDER_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_gender = (gender);

;// CONCATENATED MODULE: ./src/network/reducers/economicCategories.js
// reducers/someReducer.js

const economicCategories_initialState = {
    data: [],
    error: null
};
const economicCategories = (state = economicCategories_initialState, action)=>{
    switch(action.type){
        case ECONOMIC_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case ECONOMIC_CATEGORIES_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_economicCategories = (economicCategories);

;// CONCATENATED MODULE: ./src/network/reducers/resident.js
// reducers/someReducer.js

const resident_initialState = {
    data: [],
    error: null
};
const residentList = (state = resident_initialState, action)=>{
    switch(action.type){
        case RESIDENTIAL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case RESIDENTIAL_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const resident = (residentList);

;// CONCATENATED MODULE: ./src/network/reducers/relations.js
// reducers/someReducer.js

const relations_initialState = {
    data: [],
    error: null
};
const relations = (state = relations_initialState, action)=>{
    switch(action.type){
        case RELATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case RELATION_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_relations = (relations);

;// CONCATENATED MODULE: ./src/network/reducers/qualifications.js
// reducers/someReducer.js

const qualifications_initialState = {
    data: [],
    error: null
};
const qualifications = (state = qualifications_initialState, action)=>{
    switch(action.type){
        case QUALIFICATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case QUALIFICATION_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_qualifications = (qualifications);

;// CONCATENATED MODULE: ./src/network/reducers/occupations.js
// reducers/someReducer.js

const occupations_initialState = {
    data: [],
    error: null
};
const occupations = (state = occupations_initialState, action)=>{
    switch(action.type){
        case OCCUPATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case OCCUPATION_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_occupations = (occupations);

;// CONCATENATED MODULE: ./src/network/reducers/formData.js
// src/reducers/yourReducer.js

const formData_initialState = {
    value: null
};
const formData = (state = formData_initialState, action)=>{
    switch(action.type){
        case SET_VALUE:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_formData = (formData);

;// CONCATENATED MODULE: ./src/network/reducers/religion.js
// reducers/someReducer.js

const religion_initialState = {
    data: [],
    error: null
};
const religion = (state = religion_initialState, action)=>{
    switch(action.type){
        case RELIGION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case RELIGION_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_religion = (religion);

;// CONCATENATED MODULE: ./src/network/reducers/SocialCategories.js
// reducers/someReducer.js

const SocialCategories_initialState = {
    data: [],
    error: null
};
const social_categories = (state = SocialCategories_initialState, action)=>{
    switch(action.type){
        case SOCIAL_CAT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case SOCIAL_CAT_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const SocialCategories = (social_categories);

;// CONCATENATED MODULE: ./src/network/reducers/district.js
// reducers/someReducer.js

const district_initialState = {
    data: [],
    error: null
};
const district_reducer = (state = district_initialState, action)=>{
    switch(action.type){
        case DISTRICT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case DISTRICT_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const district = (district_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/municipality.js
// reducers/someReducer.js

const municipality_initialState = {
    data: [],
    error: null
};
const municipality_reducer = (state = municipality_initialState, action)=>{
    switch(action.type){
        case MUNICIPALITY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case MUNICIPALITY_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const municipality = (municipality_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/ward.js
// reducers/someReducer.js

const ward_initialState = {
    data: [],
    error: null
};
const ward_reducer = (state = ward_initialState, action)=>{
    switch(action.type){
        case WARD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case WARD_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const ward = (ward_reducer);

;// CONCATENATED MODULE: ./src/network/reducers/familyDetail.js
// src/reducers/yourReducer.js

const familyDetail_initialState = {
    value: null
};
const familyDetail = (state = familyDetail_initialState, action)=>{
    switch(action.type){
        case FAMILY_DETAIL_SUCCESS:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_familyDetail = (familyDetail);

;// CONCATENATED MODULE: ./src/network/reducers/familiesList.js
// reducers/someReducer.js

const familiesList_initialState = {
    data: [],
    error: null
};
const familiesList = (state = familiesList_initialState, action)=>{
    switch(action.type){
        case FAMILIES_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FAMILIES_LIST_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_familiesList = (familiesList);

;// CONCATENATED MODULE: ./src/network/reducers/familiesDetailApi.js
// reducers/someReducer.js

const familiesDetailApi_initialState = {
    data: [],
    error: null
};
const familiesDetail = (state = familiesDetailApi_initialState, action)=>{
    switch(action.type){
        case FAMILIES_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FAMILIES_DETAIL_FALIURE:
            return {
                ...state,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};
/* harmony default export */ const familiesDetailApi = (familiesDetail);

;// CONCATENATED MODULE: ./src/network/reducers/index.js
// reducers/index.js



















const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    login: reducers_login,
    dashboard: reducers_dashboard,
    rationDetails: reducers_rationDetails,
    gender: reducers_gender,
    economicCategories: reducers_economicCategories,
    residentList: resident,
    relations: reducers_relations,
    qualifications: reducers_qualifications,
    occupations: reducers_occupations,
    formData: reducers_formData,
    religion: reducers_religion,
    social_categories: SocialCategories,
    district_reducer: district,
    municipality_reducer: municipality,
    ward_reducer: ward,
    familyDetail: reducers_familyDetail,
    familiesList: reducers_familiesList,
    familiesDetailApi: familiesDetailApi
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: ./src/store.js
// store.js

 // Use Redux Thunk for async actions

 // Create a rootReducer
const middleware = [
    (external_redux_thunk_default())
];
const store_initialState = {};
const store = (0,external_redux_namespaceObject.createStore)(reducers, store_initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
/* harmony default export */ const src_store = ((/* unused pure expression or super */ null && (store)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [512], () => (__webpack_exec__(9342)));
module.exports = __webpack_exports__;

})();