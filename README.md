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
<dt><a href="#createNewReferralMember">createNewReferralMember(newReferralMember)</a></dt>
<dd><p>Create A New Referral Member.</p>
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
</dl>

<a name="createNewReferralMember"></a>

## createNewReferralMember(newReferralMember)
Create A New Referral Member.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| newReferralMember | [<code>NewReferralMember</code>](#NewReferralMember) | New Referral Member. |

<a name="AssociatedAccount"></a>

## AssociatedAccount : <code>Object</code>
Associated Account Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| application | <code>string</code> | Indicates whether the application component is present. |
| userId | <code>string</code> | Indicates whether the userId component is present. |

<a name="NewReferralMember"></a>

## NewReferralMember : <code>Object</code>
New Referral Member Type.

**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstName | <code>string</code> | Indicates whether the firstName component is present. |
| lastName | <code>string</code> | Indicates whether the lastName component is present. |
| email | <code>string</code> | Indicates whether the email component is present. |
| phone | <code>string</code> | Indicates whether the phone component is present. |
| country | <code>string</code> | Indicates whether the country component is present. |
| password | <code>string</code> | Indicates whether the password component is present. |
| associatedAccount | [<code>AssociatedAccount</code>](#AssociatedAccount) | Indicates whether the associatedAccount component is present. |
| referralCode | <code>string</code> | Indicates whether the referralCode component is present. |
| referralProgramId | <code>string</code> | Indicates whether the referralProgramId component is present. |