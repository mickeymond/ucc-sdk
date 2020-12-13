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

<a name="createNewReferralMember"></a>

## createNewReferralMember(newReferralMember)
Create A New Referral Member.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| newReferralMember | <code>object</code> | New Referral Member. |