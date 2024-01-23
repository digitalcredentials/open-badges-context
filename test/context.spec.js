/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const ctx = require('..');

describe('Open Badges Context', () => {
  it('constants', async () => {
    expect(ctx.CONTEXT_URL_V3).to.exist;
    expect(ctx.CONTEXT_URL_V3_BETA).to.exist;
    expect(ctx.CONTEXT_URL_V3_0_0).to.exist;
    expect(ctx.CONTEXT_URL_V3_0_1).to.exist;
    expect(ctx.CONTEXT_URL_V3_0_2).to.exist;
    expect(ctx.CONTEXT_URL_V3_0_3).to.exist;
    expect(ctx.CONTEXT_URL_V3_EXTENSIONS).to.exist;
  });

  it('contexts', async () => {
    expect(ctx.contexts.get(ctx.CONTEXT_URL_V3)).to.have.property('@context');
  });
});
