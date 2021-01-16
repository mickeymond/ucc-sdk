import axios from 'axios';

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
  const response = await axios.post(ENDPOINT, newUserProfile);
  return response.data;
}

export const _create = create;