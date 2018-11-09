'use strict';

var owsCommon = require('@owstack/ows-common');
var error = owsCommon.errors;

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error at payment-protocol-lib: {0}'
};

module.exports = errors.extend(spec);
