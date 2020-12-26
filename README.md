# UCC SDK

Installation
------------

For Browser

```
<script src="https://unpkg.com/axios"></script>
<script src="https://unpkg.com/ucc-sdk"></script>

// Access All Methods on the Global uccSdk
uccSdk.any();
```

For Node or Webpack

```
npm install ucc-sdk
yarn add ucc-sdk

const uccSdk = require('ucc-sdk');
import * as uccSdk from 'ucc-sdk';

// Access All Methods on the Global uccSdk
uccSdk.any();
```

Usage
-----

## Functions

<dl>
<dt><a href="#confirmReferral">confirmReferral(referralId)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Confirm Referral.</p>
</dd>
<dt><a href="#createNewReferralMember">createNewReferralMember(newReferralMember)</a> ⇒ <code><a href="#MemberSummary">Promise.&lt;MemberSummary&gt;</a></code></dt>
<dd><p>Create A New Referral Member.</p>
</dd>
<dt><a href="#findReferralProgramMember">findReferralProgramMember(programId, application, userId)</a> ⇒ <code>Promise.&lt;(ReferralProgramMember|undefined)&gt;</code></dt>
<dd><p>Find Referral Program Member.</p>
</dd>
<dt><a href="#getMemberReferralStatistics">getMemberReferralStatistics(programId, memberId)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Get Member Referral Statistics</p>
</dd>
<dt><a href="#submitEvent">submitEvent(customerId, projectId, event, data, user)</a> ⇒ <code>Promise.&lt;any&gt;</code></dt>
<dd><p>Send UCC Web Tracking Event.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AssociatedAccount">AssociatedAccount</a> : <code>Object</code></dt>
<dd><p>Associated Account Type.</p>
</dd>
<dt><a href="#NewReferralMember">NewReferralMember</a> : <code>Object</code></dt>
<dd><p>New Referral Member Type.</p>
</dd>
<dt><a href="#MemberSummary">MemberSummary</a> : <code>Object</code></dt>
<dd><p>Referral Member Summary Type.</p>
</dd>
<dt><a href="#PayoutSettings">PayoutSettings</a> : <code>Object</code></dt>
<dd><p>Payout Settings Type.</p>
</dd>
<dt><a href="#SocialMediaProfiles">SocialMediaProfiles</a> : <code>Object</code></dt>
<dd><p>Payout Settings Type.</p>
</dd>
<dt><a href="#ReferralProgramMember">ReferralProgramMember</a> : <code>Object</code></dt>
<dd><p>Referral Member Type.</p>
</dd>
</dl>

<a name="confirmReferral"></a>

## confirmReferral(referralId) ⇒ <code>Promise.&lt;any&gt;</code>
Confirm Referral.

**Kind**: global function
**Returns**: <code>Promise.&lt;any&gt;</code> - Confirm Referral Result

| Param | Type | Description |
| --- | --- | --- |
| referralId | <code>string</code> | Referral Id. |

<a name="createNewReferralMember"></a>

## createNewReferralMember(newReferralMember) ⇒ [<code>Promise.&lt;MemberSummary&gt;</code>](#MemberSummary)
Create A New Referral Member.

**Kind**: global function
**Returns**: [<code>Promise.&lt;MemberSummary&gt;</code>](#MemberSummary) - New Referral Result

| Param | Type | Description |
| --- | --- | --- |
| newReferralMember | [<code>NewReferralMember</code>](#NewReferralMember) | New Referral Member. |

<a name="findReferralProgramMember"></a>

## findReferralProgramMember(programId, application, userId) ⇒ <code>Promise.&lt;(ReferralProgramMember\|undefined)&gt;</code>
Find Referral Program Member.

**Kind**: global function
**Returns**: <code>Promise.&lt;(ReferralProgramMember\|undefined)&gt;</code> - Get Referral Program Member Result

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | Referral Program Id. |
| application | <code>string</code> | Application or External System. |
| userId | <code>string</code> | Referral Program User Id. |

<a name="getMemberReferralStatistics"></a>

## getMemberReferralStatistics(programId, memberId) ⇒ <code>Promise.&lt;any&gt;</code>
Get Member Referral Statistics

**Kind**: global function
**Returns**: <code>Promise.&lt;any&gt;</code> - Get Member Referral Statistics Result

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | Referral Program Id. |
| memberId | <code>string</code> | Referral Program Member Id. |

<a name="submitEvent"></a>

## submitEvent(customerId, projectId, event, data, user) ⇒ <code>Promise.&lt;any&gt;</code>
Send UCC Web Tracking Event.

**Kind**: global function
**Returns**: <code>Promise.&lt;any&gt;</code> - Web Tracking Response

| Param | Type | Description |
| --- | --- | --- |
| customerId | <code>string</code> | UCC Customer ID. |
| projectId | <code>string</code> | UCC Project/Source ID. |
| event | <code>string</code> | Event Name - Find out from Project Manager. |
| data | <code>object</code> | Event Data - Find out from Project Manager. |
| user | <code>object</code> | User Data If Applicable. |

<a name="AssociatedAccount"></a>

## AssociatedAccount : <code>Object</code>
Associated Account Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| application | <code>string</code> | ucc application or external system. |
| userId | <code>string</code> | ucc userId. |

<a name="NewReferralMember"></a>

## NewReferralMember : <code>Object</code>
New Referral Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | firstName. |
| lastName | <code>string</code> | lastName. |
| email | <code>string</code> | email. |
| phone | <code>string</code> | phone. |
| country | <code>string</code> | country. |
| password | <code>string</code> | password. |
| associatedAccount | [<code>AssociatedAccount</code>](#AssociatedAccount) | associatedAccount. |
| referralCode | <code>string</code> | referralCode. |
| referralProgramId | <code>string</code> | referralProgramId. |

<a name="MemberSummary"></a>

## MemberSummary : <code>Object</code>
Referral Member Summary Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userProfileId | <code>string</code> | userProfileId. |
| auth0Id | <code>string</code> | auth0Id. |
| memberId | <code>string</code> | memberId. |
| referralLink | <code>string</code> | referralLink. |

<a name="PayoutSettings"></a>

## PayoutSettings : <code>Object</code>
Payout Settings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| blockchain | <code>string</code> | blockchain. |
| address | <code>string</code> | address. |

<a name="SocialMediaProfiles"></a>

## SocialMediaProfiles : <code>Object</code>
Payout Settings Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | username. |
| provider | <code>string</code> | provider. |

<a name="ReferralProgramMember"></a>

## ReferralProgramMember : <code>Object</code>
Referral Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | firstName. |
| lastName | <code>string</code> | lastName. |
| phone | <code>string</code> | phone. |
| country | <code>string</code> | country. |
| payoutSettings | [<code>Array.&lt;PayoutSettings&gt;</code>](#PayoutSettings) | payoutSettings. |
| socialMediaProfiles | [<code>Array.&lt;SocialMediaProfiles&gt;</code>](#SocialMediaProfiles) | socialMediaProfiles. |
| email | <code>string</code> | email. |