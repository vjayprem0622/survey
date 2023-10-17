"use strict";
(() => {
var exports = {};
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 6256:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _network_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _network_api__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _network_api__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
    const { ward_id , token  } = req.query;
    console.log(ward_id, "ASdfkwleoiqjaslkjfeqdioasjlk");
    let dashboard_data = {};
    let familiesList_data = {};
    let error = "";
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://himstaging1.hp.gov.in/urban-dept/survey/report/count?wardId=${ward_id}`, {});
        console.log(response, "dashboard response");
        dashboard_data = response.data;
        const familiesList = await fetch(`http://himstaging1.hp.gov.in/urban-dept/familyList?page=0&size=10&wardId=${ward_id}`);
        familiesList_data = await familiesList.json();
        console.log(dashboard_data, "asdkjada");
    } catch (error1) {
        console.log(error1, "dashboard response");
        error1 = error1;
    }
    console.log(dashboard_data, "ASdfqwkdolal");
    const data = {
        dashboard_data: dashboard_data,
        families_data: familiesList_data,
        ward_id: ward_id,
        error: error
    };
    res.status(200).json(data);
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
var __webpack_exports__ = __webpack_require__.X(0, [512], () => (__webpack_exec__(6256)));
module.exports = __webpack_exports__;

})();