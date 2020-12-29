import axios from 'axios';

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
 * SocialMedia Type.
 * @typedef {Object} SocialMedia
 * @property {string} _id - _id
 * @property {string} username - username
 * @property {string} provider - provider
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
 * @property {Array<SocialMedia>} socialMedia - socialMedia
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
  }
  const ENDPOINT = `https://api.unchainedcarrot.com/v1/users?filter=${JSON.stringify(filter)}`;
  const response = await axios.get(ENDPOINT);
  return response.data;
}

export const _getUserByAssociatedAccount = getUserByAssociatedAccount;