(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uccSdk = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  /**
   * Associated Account Type.
   * @typedef {Object} AssociatedAccount
   * @property {string} application - Indicates whether the application component is present.
   * @property {string} userId - Indicates whether the userId component is present.
   */

  /**
   * New Referral Member Type.
   * @typedef {Object} NewReferralMember
   * @property {string} firstName - Indicates whether the firstName component is present.
   * @property {string} lastName - Indicates whether the lastName component is present.
   * @property {string} email - Indicates whether the email component is present.
   * @property {string} phone - Indicates whether the phone component is present.
   * @property {string} country - Indicates whether the country component is present.
   * @property {string} password - Indicates whether the password component is present.
   * @property {AssociatedAccount} associatedAccount - Indicates whether the associatedAccount component is present.
   * @property {string} referralCode - Indicates whether the referralCode component is present.
   * @property {string} referralProgramId - Indicates whether the referralProgramId component is present.
   */

  /**
   * Create A New Referral Member.
   * @function
   * @param {NewReferralMember} newReferralMember - New Referral Member.
   */
  function createNewReferralMember(newReferralMember) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/rfbm-create-member';
    return axios__default['default'].post(ENDPOINT, newReferralMember);
  }

  exports.createNewReferralMember = createNewReferralMember;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
