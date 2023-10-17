"use strict";
(() => {
var exports = {};
exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const relation = await fetch("http://himstaging1.hp.gov.in/urban-dept/getRelations");
    const relation_data = await relation.json();
    console.log(relation_data, "ASdfqwkdolal");
    const data = {
        relations: relation_data.data.filter((item)=>item.relationNameEnglish !== "-")
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
var __webpack_exports__ = (__webpack_exec__(5621));
module.exports = __webpack_exports__;

})();