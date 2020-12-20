(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uccSdk = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  // Declare Constants
  const UCC_API = 'https://api.unchainedcarrot.com/v1';

  /**
   * Create A New Referral Member.
   * @function
   * @param {object} newReferralMember - New Referral Member.
   */
  function createNewReferralMember(newReferralMember) {
    return axios__default['default'].post(UCC_API + '/rfbm/members', newReferralMember);
  }

  exports.createNewReferralMember = createNewReferralMember;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
