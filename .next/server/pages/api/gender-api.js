"use strict";
(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const gender = await fetch("http://himstaging1.hp.gov.in/urban-dept/getGender");
    const gender_data = await gender.json();
    console.log(gender_data, "ASdfqwkdolal");
    const data = {
        gender: gender_data.data.filter((item)=>item.genderName !== "-")
    };
    res.status(200).json(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(989));
module.exports = __webpack_exports__;

})();