(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uccSdk = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

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
   * Get Member By User Id.
   * @function
   * @memberof rfbm
   * @param {string} programId - Referral Program Id.
   * @param {string} userId - auth0 ID.
   * @returns {Promise<ReferralProgramMemberResult>} Get Member By User Id Result
   */
  async function getMemberByUserId(programId, userId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members?filter={"$or":[{"auth0.smsId":"${userId}"},{"auth0.emailId":"${userId}"}]}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getMemberByUserId = getMemberByUserId;

  /**
   * Get Member By Associated Account
   * @function
   * @memberof rfbm
   * @param {string} externalSystem - External System.
   * @param {string} externalUserId - External User Id.
   * @param {string} programId - Referral Program Id.
   * @returns {Promise<ReferralProgramMemberResult>} Get Member By Associated Account Result
   */
  async function getMemberByAssociatedAccount(externalSystem, externalUserId, programId) {
    const filter = {
      "associatedAccounts.application": externalSystem,
      "associatedAccounts.userId": externalUserId,
    };
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/users?filter=${JSON.stringify(filter)}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getMemberByAssociatedAccount = getMemberByAssociatedAccount;

  /**
   * Get Member By Friend.
   * @function
   * @memberof rfbm
   * @param {string} userId - user objectId.
   * @returns {Promise<ReferralProgramMemberResult>} Get Member By Friend Result
   */
  async function getMemberByFriend(userId) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/rfbm/members?filter={"$or":[{"auth0.smsId":"${userId}"},{"auth0.emailId":"${userId}"}]}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getMemberByFriend = getMemberByFriend;

  /**
   * Get User By Associated Account
   * @function
   * @memberof user
   * @param {string} externalSystem - External System.
   * @param {string} externalUserId - External User Id.
   * @returns {Promise<UserProfileResult>} Get User By Associated Account Result
   */
  async function getUserByAssociatedAccount(externalSystem, externalUserId) {
    const filter = {
      "associatedAccounts.application": externalSystem,
      "associatedAccounts.userId": externalUserId,
    };
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/users?filter=${JSON.stringify(filter)}`;
    const response = await axios__default['default'].get(ENDPOINT);
    return response.data;
  }

  const _getUserByAssociatedAccount = getUserByAssociatedAccount;

  /**
   * Create A New User Profile.
   * @function
   * @memberof user
   * @param {NewUserProfile} newUserProfile - New User Profile.
   * @returns {Promise<UserProfileResult>} New User Profile Result
   */
  async function create(newUserProfile) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-create-user-profile';
    const response = await axios__default['default'].post(ENDPOINT, newUserProfile);
    return response.data;
  }

  const _create = create;

  /**
   * Send UCC Web Tracking Event.
   * @function
   * @memberof track
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

  /**
   * Invoke Webhook
   * @function
   * @memberof track
   * @param {string} webhookUrl - webhookUrl
   * @param {object} data - data
   * @returns {Promise<any>} Web Tracking Response
   */
  async function invokeWebhook(webhookUrl, data) {
    const response = await axios__default['default'].post(webhookUrl, data);
    return response.data;
  }

  const _invokeWebhook = invokeWebhook;

  /** SDK METHODS TYPES */

  /** @namespace */
  const rfbm = {
    createNewReferralMember: _createNewReferralMember,
    findReferralProgramMember: _findReferralProgramMember,
    confirmReferral: _confirmReferral,
    getMemberReferralStatistics: _getMemberReferralStatistics,
    getReferralDetails: _getReferralDetails,
    associateFriend: _associateFriend,
    getMemberByUserId: _getMemberByUserId,
    getMemberByAssociatedAccount: _getMemberByAssociatedAccount,
    getMemberByFriend: _getMemberByFriend
  };

  /** @namespace */
  const user = {
    getUserByAssociatedAccount: _getUserByAssociatedAccount,
    create: _create
  };

  /** @namespace */
  const track = {
    submitEvent: _submitEvent,
    invokeWebhook: _invokeWebhook
  };

  exports.rfbm = rfbm;
  exports.track = track;
  exports.user = user;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
