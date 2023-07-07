# Stencil Prerender Test App

This is a simple monorepo setup to test Stencil SSG (prerendering). The repo consists of two packages:

1. `packages/stencil-library`: A Stencil component library
2. `packages/server-app`: A Node app that consumes the Stencil hydrate script to serve static HTML

## How To Use

1. From project root, run `npx lerna bootstrap` to install dependencies for all packages
2. From project root, run `cd packages/stencil-library && npm run build` to create the hydrate script
3. From project root, run `cd packages/server-app && npm start` to spin-up the Node server on port `8888`

The Node app uses the `renderToString()` method from the [Stencil Hydrate App](https://stenciljs.com/docs/hydrate-app#rendertostring) to
easily convert an HTML string to valid HTML. The transformed HTML is then written to the server response.

To change what is rendered, you can modify the call to `renderToString()` in `packages/server-app/srs/index.ts` with whatever HTML you want. All
web components defined in `packages/stencil-library` are available to use in the HTML string. If you modify the Stencil library, you will
need to rebuild the library package (`cd packages/stencil-library && npm run build`). The packages are symbolically linked via Lerna, so you
do not need to install an updated build of the Stencil library.
