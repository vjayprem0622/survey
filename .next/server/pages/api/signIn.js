"use strict";
(() => {
var exports = {};
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 8349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports fetchLoginSuccess, fetchLoginFailure, onLogin */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// actions/someActions.js


// Action Creators
const fetchLoginSuccess = (data)=>({
        type: LOGIN_SUCCESS,
        payload: data
    });
const fetchLoginFailure = (error)=>({
        type: LOGIN_FAILURE,
        payload: error
    });
// Async Action to Fetch Data
const onLogin = (username, password)=>{
    return async (dispatch)=>{
        try {
            console.log("jsoasd");
            const response = await axios.post("/login", {
                username: username,
                password: password
            });
            dispatch(fetchLoginSuccess(response.data));
        } catch (error) {
            dispatch(fetchLoginFailure(error));
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _network_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2512);
/* harmony import */ var _network_actions_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8349);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_network_api__WEBPACK_IMPORTED_MODULE_0__, _network_actions_login__WEBPACK_IMPORTED_MODULE_1__]);
([_network_api__WEBPACK_IMPORTED_MODULE_0__, _network_actions_login__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// export default async function handler(req, res) {
//     try {
//         // Make an API request here and retrieve the data
//         const param1 = 'value1';
//         const param2 = 'value2';
//         console.log(param1, param2, "sdajndiwqdnjkad")
//         axiosInstance.post("/api/fetchData?param1=${param1}&param2=${param2}")
//             .then((response) => console.log(response))
//             .catch((error) => console.log(error));
//         // res.status(200).json({ data });
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// }


async function handler(req, res) {
    try {
        console.log("asnkjdasjdkqwd");
        // const data = useDispatch(onLogin()); // Call your Axios API function
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [512], () => (__webpack_exec__(5978)));
module.exports = __webpack_exports__;

})();