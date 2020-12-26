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
   * Referral Member Summary Type.
   * @typedef {Object} MemberSummary
   * @property {string} userProfileId - Indicates whether the userProfileId component is present.
   * @property {string} auth0Id - Indicates whether the auth0Id component is present.
   * @property {string} memberId - Indicates whether the memberId component is present.
   * @property {string} referralLink - Indicates whether the referralLink component is present.
   */

  /**
   * Create A New Referral Member.
   * @function
   * @param {NewReferralMember} newReferralMember - New Referral Member.
   * @returns {Promise<MemberSummary>} New Referral Result
   */
  async function createNewReferralMember(newReferralMember) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/rfbm-create-member';
    const response = await axios__default['default'].post(ENDPOINT, newReferralMember);
    return response.data;
  }

  /**
   * Send UCC Web Tracking Event.
   * @function
   * @param {string} customerId - UCC Customer ID.
   * @param {string} projectId - UCC Project/Source ID.
   * @param {string} event - Event Name - Find out from Project Manager.
   * @param {object} data - Event Data - Find out from Project Manager.
   * @param {object} user - User Data If Applicable.
   * @returns {Promise<any>} Web Tracking Response
   */
  async function submitEvent(customerId, projectId, event, data, user = {}) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-web-tracker';
    // Get Browser Context
    const context = {};
    const url = new URL(window.location.href);
    url.searchParams.forEach((value, key) => {
      context[key] = value;
    });
    // Prepare Request Body
    const body = {
      customerId: customerId,
      projectId: projectId,
      event: event,
      type: 'track',
      context: context,
      properties: data,
      user: user
    };
    const response = await axios__default['default'].post(ENDPOINT, body);
    return response.data;
  }

  /**
   * Payout Settings Type.
   * @typedef {Object} PayoutSettings
   * @property {string} blockchain - Indicates whether the blockchain component is present.
   * @property {string} address - Indicates whether the address component is present.
   */

  /**
   * Payout Settings Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - Indicates whether the username component is present.
   * @property {string} provider - Indicates whether the provider component is present.
   */

  /**
   * Referral Member Type.
   * @typedef {Object} ReferralProgramMember
   * @property {string} firstName - Indicates whether the firstName component is present.
   * @property {string} lastName - Indicates whether the lastName component is present.
   * @property {string} phone - Indicates whether the phone component is present.
   * @property {string} country - Indicates whether the country component is present.
   * @property {Array<PayoutSettings>} payoutSettings - Indicates whether the payoutSettings component is present.
   * @property {Array<SocialMediaProfiles>} socialMediaProfiles - Indicates whether the socialMediaProfiles component is present.
   * @property {string} email - Indicates whether the email component is present.
   */

  /**
   * Find Referral Program Member.
   * @function
   * @param {string} programId - Referral Program Id.
   * @param {string} application - Application / External System.
   * @param {string} userId - Referral Program User Id.
   * @returns {Promise<ReferralProgramMember | undefined>} Get Referral Program Member Result
   */
  async function findReferralProgramMember(programId, application, userId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members/programs/${programId}?externalSystem=${application}&userId=${userId}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  /**
   * Confirm Referral.
   * @function
   * @param {string} referralId - Referral Id.
   * @returns {Promise<any>} Confirm Referral Result
   */
  async function confirmReferral(referralId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/confirm`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  exports.confirmReferral = confirmReferral;
  exports.createNewReferralMember = createNewReferralMember;
  exports.findReferralProgramMember = findReferralProgramMember;
  exports.submitEvent = submitEvent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
