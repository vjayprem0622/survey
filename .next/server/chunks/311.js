"use strict";
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 6489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/himachal_logoo.ed7ce3ac.svg","height":272,"width":383});

/***/ }),

/***/ 7242:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
// material-ui



// ==============================|| AUTH BLUR BACK SVG ||============================== //
const AuthBackground = ()=>{
    const theme = useTheme();
    return /*#__PURE__*/ _jsx(Box, {
        sx: {
            position: "absolute",
            filter: "blur(18px)",
            zIndex: -1,
            bottom: 0
        },
        children: /*#__PURE__*/ _jsxs("svg", {
            width: "100%",
            height: "calc(100vh - 175px)",
            viewBox: "0 0 405 809",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",
                    fill: theme.palette.primary.light
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",
                    fill: theme.palette.success.light,
                    opacity: "0.6"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",
                    fill: theme.palette.error.lighter,
                    opacity: "1"
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AuthBackground)));


/***/ }),

/***/ 2894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(662);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fr": () => (/* binding */ saveToken),
/* harmony export */   "LP": () => (/* binding */ getToken),
/* harmony export */   "gy": () => (/* binding */ removeToken)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// Save the token in localStorage
const saveToken = (token)=>{
    console.log(token, "save token");
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("authToken", token, {
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
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("authToken");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;