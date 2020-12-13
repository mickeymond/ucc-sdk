var uccSdk;uccSdk =
(self["webpackChunkuccSdk"] = self["webpackChunkuccSdk"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewReferralMember": () => /* binding */ createNewReferralMember
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


// Declare Constants
const UCC_API = 'https://api.unchainedcarrot.com/v1'

/**
 * Create A New Referral Member.
 * @function
 * @param {object} newReferralMember - New Referral Member.
 */
const createNewReferralMember = (newReferralMember) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(UCC_API + '/rfbm/members');
}

/***/ }),

/***/ "axios":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"axios","commonjs2":"axios","amd":"axios","root":"axios"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = undefined;

/***/ })

},
0,[["./src/main.js","runtime~main"]]]);
//# sourceMappingURL=main.js.map