import { _createNewReferralMember } from './create-new-referral-member';
import { _findReferralProgramMember } from './find-referral-member';
import { _confirmReferral } from './confirm-referral';
import { _getMemberReferralStatistics } from './get-member-referral-statistics';
import { _getReferralDetails } from './get-referral-details';

/** @namespace */
export const rfbm = {
  createNewReferralMember: _createNewReferralMember,
  findReferralProgramMember: _findReferralProgramMember,
  confirmReferral: _confirmReferral,
  getMemberReferralStatistics: _getMemberReferralStatistics,
  getReferralDetails: _getReferralDetails
}

// Global Exports
export { _submitEvent as submitEvent } from './ucc-web-tracker';