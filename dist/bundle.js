(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.uccSdk = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  /**
   * AssociatedAccount Type.
   * @typedef {Object} AssociatedAccount
   * @property {string} application - ucc application or external system.
   * @property {string} userId - ucc application or external system userId.
   */

  /**
   * NewReferralMember Type.
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
   * MemberSummary Type.
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
   * ReferralProgram Type.
   * @typedef {Object} ReferralProgram
   * @property {string} title - referral program title
   * @property {string} description - referral program description
   */

  /**
   * ReferralMember Type.
   * @typedef {Object} ReferralMember
   * @property {string} firstName - referral member firstName
   * @property {string} lastName - referral member lastName
   */

  /**
   * ReferralFriend Type.
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
   * ReferralDetails Type.
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
   * PayoutSettings Type.
   * @typedef {Object} PayoutSettings
   * @property {string} blockchain - blockchain.
   * @property {string} address - address.
   */

  /**
   * SocialMediaProfiles Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - username.
   * @property {string} provider - provider.
   */

  /**
   * ReferralProgramMember Type.
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
   * ReferralProgramMember Type.
   * @typedef {Object} ReferralProgramMemberResult
   * @property {ReferralProgramMember} result - referral member.
   */

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
   * PayoutSettings Type.
   * @typedef {Object} PayoutSettings
   * @property {string} blockchain - blockchain.
   * @property {string} address - address.
   */

  /**
   * SocialMediaProfiles Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - username.
   * @property {string} provider - provider.
   */

  /**
   * ReferralProgramMember Type.
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
   * ReferralProgramMember Type.
   * @typedef {Object} ReferralProgramMemberResult
   * @property {ReferralProgramMember} result - referral member.
   */

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
   * PayoutSettings Type.
   * @typedef {Object} PayoutSettings
   * @property {string} blockchain - blockchain.
   * @property {string} address - address.
   */

  /**
   * SocialMediaProfiles Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - username.
   * @property {string} provider - provider.
   */

  /**
   * ReferralProgramMember Type.
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
   * ReferralProgramMember Type.
   * @typedef {Object} ReferralProgramMemberResult
   * @property {ReferralProgramMember} result - referral member.
   */

  /**
   * Get Member By Friend.
   * @function
   * @memberof rfbm
   * @param {string} userId - user objectId.
   * @param {string} programId - Referral Program Id.
   * @returns {Promise<ReferralProgramMemberResult>} Get Member By Friend Result
   */
  async function getMemberByFriend(userId, programId) {
    const referralResponse = await axios__default['default'].get(`https://api.unchainedcarrot.com/v1/rfbm/referrals?filter={"friend":"${userId}","program":"${programId}"}`);
    const response = await axios__default['default'].get(`https://api.unchainedcarrot.com/v1/rfbm/members/${referralResponse.data.referrals[0].member}`);
    return response.data;
  }

  const _getMemberByFriend = getMemberByFriend;

  /**
   * SocialMediaProfiles Type.
   * @typedef {Object} SocialMediaProfiles
   * @property {string} username - username.
   * @property {string} provider - provider.
   */

  /**
   * PhoneInfo Type.
   * @typedef {Object} PhoneInfo
   * @property {string} _id - _id
   * @property {string} brand - brand
   * @property {string} deviceId - deviceId
   * @property {string} deviceLocale - deviceLocale
   * @property {string} timeZone - timeZone
   * @property {string} timeStamp - timeStamp
   * @property {boolean} isTablet - isTablet
   */

  /**
   * BrowserInfo Type.
   * @typedef {Object} BrowserInfo
   * @property {string} _id - _id
   * @property {string} timeStamp - timeStamp
   * @property {string} userAgent - userAgent
   */

  /**
   * PersonalData Type.
   * @typedef {Object} PersonalData
   * @property {string} firstName - firstName
   * @property {string} lastName - lastName
   * @property {string} gender - gender
   * @property {string} yearOfBirth - yearOfBirth
   * @property {string} countryOfResidence - countryOfResidence
   * @property {string} nationality - nationality
   * @property {Array<SocialMediaProfiles>} socialMedia - socialMedia
   */

  /**
   * UserProfile Type.
   * @typedef {Object} UserProfile
   * @property {string} _id - _id
   * @property {string} blockchainAddress - blockchainAddress
   * @property {PersonalData} personalData - personalData
   * @property {Array<PhoneInfo>} phoneInfo - phoneInfo
   * @property {Array<BrowserInfo>} browserInfo - browserInfo
   */

  /**
   * UserProfileResult Type.
   * @typedef {Object} UserProfileResult
   * @property {number} count - count
   * @property {Array<UserProfile>} result - result
   */

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
   * NewStoreCard Type.
   * @typedef {Object} NewStoreCard
   * @property {string} walletProvider - walletProvider.
   * @property {string} templateId - templateId.
   * @property {string} customerId - customerId.
   * @property {string} userId - userId.
   */

  /**
   * NewStoreCard Result Type.
   * @typedef {Object} NewStoreCardResult
   * @property {string} passTypeIdentifier - passTypeIdentifier.
   * @property {string} serialNumber - serialNumber.
   * @property {string} description - description.
   */

  /**
   * Create Store Card.
   * @function
   * @memberof user
   * @param {NewStoreCard} newStoreCard - New Store Card
   * @returns {Promise<NewStoreCardResult>} New Store Card Result
   */
  async function createStoreCard(newStoreCard) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/apple-wallet-create-card';
    const response = await axios__default['default'].post(ENDPOINT, newStoreCard);
    return response.data;
  }

  const _createStoreCard = createStoreCard;

  /**
   * NewUserProfile Type.
   * @typedef {Object} NewUserProfile
   * @property {string} firstName - firstName.
   * @property {string} lastName - lastName.
   * @property {string} email - email.
   * @property {string} phone - phone.
   * @property {string} country - country.
   * @property {string} password - password.
   * @property {AssociatedAccount} associatedAccount - associatedAccount.
   */

  /**
   * NewUserProfileResult Type.
   * @typedef {Object} NewUserProfileResult
   * @property {string} userProfileId - userProfileId.
   * @property {string} auth0Id - auth0Id.
   */

  /**
   * Create A New User Profile.
   * @function
   * @memberof user
   * @param {NewUserProfile} newUserProfile - New User Profile.
   * @returns {Promise<NewUserProfileResult>} New User Profile Result
   */
  async function create(newUserProfile) {
    const ENDPOINT = 'https://pmxfwkh2ka.execute-api.eu-central-1.amazonaws.com/default/ucc-create-user-profile';
    const response = await axios__default['default'].post(ENDPOINT, newUserProfile);
    return response.data;
  }

  const _create = create;

  /**
   * NewEngagement Type.
   * @typedef {Object} NewEngagement
   * @property {string} customerId - customerId.
   * @property {string} firstTimeOn - firstTimeOn.
   */

  /**
   * Add A New Engagement.
   * @function
   * @memberof user
   * @param {string} userId - User ObjectID
   * @param {NewEngagement} newEngagement - New Engagement.
   * @returns {Promise<any>} New Engagement Result
   */
  async function engagedWith(userId, newEngagement) {
    const ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements`;
    const response = await axios__default['default'].post(ENDPOINT, newEngagement);
    return response.data;
  }

  const _engagedWith = engagedWith;

  /**
   * NewOptIn Type.
   * @typedef {Object} NewOptIn
   * @property {string} productOrService - productOrService.
   * @property {string} optedInOn - optedInOn.
   * @property {string} optedInIpAddress - optedInIpAddress.
   * @property {string} optedInUserAgent - optedInUserAgent.
   * @property {string} optedInFormUrl - optedInFormUrl.
   */

  /**
   * Add A New Opt In.
   * @function
   * @memberof user
   * @param {string} userId - User ObjectID
   * @param {string} customerId - Customer ObjectID
   * @param {NewOptIn} newOptIn - New Opt In.
   * @returns {Promise<any>} New Opt In Result
   */
  async function optIn(userId, customerId, newOptIn) {
    const DELETE_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-outs/${newOptIn.productOrService}`;
    const POST_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-ins`;
    await axios__default['default'].delete(DELETE_ENDPOINT);
    const response = await axios__default['default'].post(POST_ENDPOINT, newOptIn);
    return response.data;
  }

  const _optIn = optIn;

  /**
   * NewOptOut Type.
   * @typedef {Object} NewOptOut
   * @property {string} productOrService - productOrService.
   * @property {string} optedOutOn - optedOutOn.
   * @property {string} optedOutIpAddress - optedOutIpAddress.
   */

  /**
   * Add A New Opt In.
   * @function
   * @memberof user
   * @param {string} userId - User ObjectID
   * @param {string} customerId - Customer ObjectID
   * @param {NewOptOut} newOptOut - New Opt In.
   * @returns {Promise<any>} New Opt In Result
   */
  async function optOut(userId, customerId, newOptOut) {
    const DELETE_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-ins/${newOptOut.productOrService}`;
    const POST_ENDPOINT = `https://api.unchainedcarrot.com/v1/users/${userId}/engagements/${customerId}/opt-outs`;
    await axios__default['default'].delete(DELETE_ENDPOINT);
    const response = await axios__default['default'].post(POST_ENDPOINT, newOptOut);
    return response.data;
  }

  const _optOut = optOut;

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

  /** SDK METHODS */

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
    createStoreCard: _createStoreCard,
    create: _create,
    engagedWith: _engagedWith,
    optIn: _optIn,
    optOut: _optOut
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
