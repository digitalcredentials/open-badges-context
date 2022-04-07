# OpenBadges v3 Context _(@digitalcredentials/open-badges-context)_

[![Node.js CI](https://github.com/digitalcredentials/open-badges-context/workflows/Node.js%20CI/badge.svg)](https://github.com/digitalcredentials/open-badges-context/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/open-badges-context.svg)](https://npm.im/@digitalcredentials/open-badges-context)

> NPM package for the OBv3 (Open Badges version 3) JSON-LD context.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Developing](#developing)
- [License](#license)

## Background

For use with JSON-LD document loaders (such as [`jsonld-document-loader`](https://github.com/digitalbazaar/jsonld-document-loader)).

## Install

Requires Node.js 14+

To install via NPM:

```
npm install @digitalcredentials/open-badges-context
```

## Usage

```js
import obCtx from '@digitalcredentials/open-badges-context';
// or
const obCtx = require('@digitalcredentials/open-badges-context');
const {contexts, constants} = obCtx;

obCtx.CONTEXT_URL_V3
// 'https://w3id.org/openbadges/v3'

// get context data for a specific context
obCtx.CONTEXT_V3
// full context object
```

This package can be used with bundlers, such as [webpack](https://webpack.js.org/), 
in browser applications.

### API

The library exports the following properties:
- `CONTEXT_URL_V3` and `CONTEXT_V3` (it's recommended that context repositories only export one context).
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL_V3` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.

## Developing

To manage the context, edit the [`js/context.js`](js/context.js) file.

## License

* [MIT License](./LICENSE)
