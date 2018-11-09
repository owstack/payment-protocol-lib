Payment Protocol Lib
=======

[![NPM Package](https://img.shields.io/npm/v/payment-protocol-lib.svg?style=flat-square)](https://www.npmjs.org/package/payment-protocol-lib)
[![Build Status](https://img.shields.io/travis/owstack/payment-protocol-lib.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/payment-protocol-lib)
[![Coverage Status](https://img.shields.io/coveralls/owstack/payment-protocol-lib.svg?style=flat-square)](https://coveralls.io/r/owstack/payment-protocol-lib)

A module that implements [Payment Protocol](https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install payment-protocol-lib
```

```sh
bower install payment-protocol-lib
```

The following code verifies a payment request:

```javascript
var PaymentProtocol = require('@owstack/payment-protocol-lib');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/btc-lib/blob/master/CONTRIBUTING.md) on the main btc-lib repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/payment-protocol-lib/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.
