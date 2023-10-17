"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 2512:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _utils_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// utils/axios.js


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://himstaging1.hp.gov.in/urban-dept"
});
const tokenData = (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .LP)();
axiosInstance.interceptors.request.use((config)=>{
    // Get the JWT token from your NextAuth.js session
    // try {
    //   if (JSON.parse(tokenData)) {
    //     const { userName, ulb, token, wardName, districtName } = JSON.parse(tokenData) || {};
    //     if (token) {
    //       console.log(token, "sjkadhiqwoals")
    //       config.headers.Authorization = `Bearer ${token}`
    //     }
    //   }
    // }
    // catch (err) {
    //   console.log(err)
    // }
    return config;
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (axiosInstance)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LP": () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony exports saveToken, removeToken */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// Save the token in localStorage
const saveToken = (token)=>{
    console.log(token, "save token");
    Cookies.set("authToken", token, {
        expires: 1
    }); // expires in 1 days
// Cookies.set('authToken', token, { expires: 1 }); // Set the token to expire in 7 days, adjust as needed
};
// Retrieve the token from localStorage
const getToken = ()=>{
    return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("authToken");
};
// Remove the token from localStorage
const removeToken = ()=>{
    Cookies.remove("authToken");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;