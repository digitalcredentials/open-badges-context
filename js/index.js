/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL_V3} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL_V3, context);

module.exports = {
  constants,
  contexts,
  CONTEXT_URL_V3,
  CONTEXT_V3: context
};
