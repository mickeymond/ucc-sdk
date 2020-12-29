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
   * @property {string} application - ucc application or external system.
   * @property {string} userId - ucc userId.
   */

  /**
   * New Referral Member Type.
   * @typedef {Object} NewReferralMember
   * @property {string} firstName - firstName.
   * @property {string} lastName - lastName.
   * @property {string} email - email.
   * @property {string} phone - phone.
   * @property {string} country - country.
   * @property {string} password - password.
   * @property {AssociatedAccount} associatedAccount - associatedAccount.
   * @property {string} referralCode - referralCode.
   * @property {string} referralProgramId - referralProgramId.
   */

  /**
   * Referral Member Summary Type.
   * @typedef {Object} MemberSummary
   * @property {string} userProfileId - userProfileId.
   * @property {string} auth0Id - auth0Id.
   * @property {string} memberId - memberId.
   * @property {string} referralLink - referralLink.
   */

  /**
   * Create A New Referral Member.
   * @function
   * @memberof rfbm
   * @param {NewReferralMember} newReferralMember - New Referral Member.
   * @returns {Promise<MemberSummary>} New Referral Result
   */
  async function createNewReferralMember(newReferralMember) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/rfbm-create-member';
    const response = await axios__default['default'].post(ENDPOINT, newReferralMember);
    return response.data;
  }

  const _createNewReferralMember = createNewReferralMember;

  /**
   * Payout Settings Type.
   * @typedef {Object} PayoutSettings
   * @property {string} blockchain - blockchain.
   * @property {string} address - address.
   */

  /**
   * Payout Settings Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - username.
   * @property {string} provider - provider.
   */

  /**
   * Referral Program Member Type.
   * @typedef {Object} ReferralProgramMember
   * @property {string} firstName - firstName.
   * @property {string} lastName - lastName.
   * @property {string} phone - phone.
   * @property {string} country - country.
   * @property {Array<PayoutSettings>} payoutSettings - payoutSettings.
   * @property {Array<SocialMediaProfiles>} socialMediaProfiles - socialMediaProfiles.
   * @property {string} email - email.
   */

  /**
   * Find Referral Program Member.
   * @function
   * @memberof rfbm
   * @param {string} programId - Referral Program Id.
   * @param {string} application - Application or External System.
   * @param {string} userId - Referral Program User Id.
   * @returns {Promise<ReferralProgramMember>} Get Referral Program Member Result
   */
  async function findReferralProgramMember(programId, application, userId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members/programs/${programId}?externalSystem=${application}&userId=${userId}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _findReferralProgramMember = findReferralProgramMember;

  /**
   * Confirm Referral.
   * @function
   * @memberof rfbm
   * @param {string} referralId - Referral Id.
   * @returns {Promise<any>} Confirm Referral Result
   */
  async function confirmReferral(referralId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/confirm`;
    const response = await axios__default['default'].patch(ENDPOINT);
    return response.data;
  }

  const _confirmReferral = confirmReferral;

  /**
   * Get Member Referral Statistics
   * @function
   * @memberof rfbm
   * @param {string} programId - Referral Program Id.
   * @param {string} memberId - Referral Program Member Id.
   * @returns {Promise<any>} Get Member Referral Statistics Result
   */
  async function getMemberReferralStatistics(programId, memberId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/programs/${programId}/members/${memberId}/statistics`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getMemberReferralStatistics = getMemberReferralStatistics;

  /**
   * Referral Program Type.
   * @typedef {Object} ReferralProgram
   * @property {string} title - referral program title
   * @property {string} description - referral program description
   */

  /**
   * Referral Member Type.
   * @typedef {Object} ReferralMember
   * @property {string} firstName - referral member firstName
   * @property {string} lastName - referral member lastName
   */

  /**
   * Referral Friend Type.
   * @typedef {Object} ReferralFriend
   * @property {string} firstName - referred friend firstName
   * @property {string} lastName - referred friend lastName
   */

  /**
   * Referral Type.
   * @typedef {Object} Referral
   * @property {ReferralProgram} program - referral program
   * @property {ReferralMember} member - referral member
   * @property {ReferralFriend} friend- referred friend
   */

  /**
   * Referral Details Type.
   * @typedef {Object} ReferralDetails
   * @property {string} message - message
   * @property {Referral} result - result
   */

  /**
   * Get Referral Details
   * @function
   * @memberof rfbm
   * @param {string} referralId - Referral Id.
   * @returns {Promise<ReferralDetails>} Get Referral Details Result
   */
  async function getReferralDetails(referralId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getReferralDetails = getReferralDetails;

  /**
   * Associate Friend.
   * @function
   * @memberof rfbm
   * @param {string} referralId - Referral Id.
   * @param {string} userId - User Id.
   * @returns {Promise<any>} Associate Friend Result
   */
  async function associateFriend(referralId, userId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/referrals/${referralId}/friends/${userId}`;
    const response = await axios__default['default'].post(ENDPOINT);
    return response.data;
  }

  const _associateFriend = associateFriend;

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

  const _submitEvent = submitEvent;

  /** @namespace */
  const rfbm = {
    createNewReferralMember: _createNewReferralMember,
    findReferralProgramMember: _findReferralProgramMember,
    confirmReferral: _confirmReferral,
    getMemberReferralStatistics: _getMemberReferralStatistics,
    getReferralDetails: _getReferralDetails,
    associateFriend: _associateFriend
  };

  exports.rfbm = rfbm;
  exports.submitEvent = _submitEvent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
