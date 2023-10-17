"use strict";
(() => {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 3128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const occupation = await fetch("http://himstaging1.hp.gov.in/urban-dept/getOccupations");
    const occupation_data = await occupation.json();
    console.log(occupation_data, "ASdfqwkdolal");
    const data = {
        occupations: occupation_data.data.filter((item)=>item.professionName !== "-")
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
var __webpack_exports__ = (__webpack_exec__(3128));
module.exports = __webpack_exports__;

})();