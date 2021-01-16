/**
 * AssociatedAccount Type.
 * @typedef {Object} AssociatedAccount
 * @property {string} application - ucc application or external system.
 * @property {string} userId - ucc userId.
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
 * UserProfileResult Type.
 * @typedef {Object} UserProfileResult
 * @property {string} userProfileId - userProfileId.
 * @property {string} auth0Id - auth0Id.
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