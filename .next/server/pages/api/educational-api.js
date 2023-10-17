"use strict";
(() => {
var exports = {};
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 7491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const educational_qualification = await fetch("http://himstaging1.hp.gov.in/urban-dept/getQualifications");
    const educational_qualification_data = await educational_qualification.json();
    console.log(educational_qualification_data, "ASdfqwkdolal");
    const data = {
        educations: educational_qualification_data.data.filter((item)=>item.educationQualificationEnglish !== "-")
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
var __webpack_exports__ = (__webpack_exec__(7491));
module.exports = __webpack_exports__;

})();