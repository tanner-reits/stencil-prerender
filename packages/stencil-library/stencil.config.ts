import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  autoprefixCss: true,
};
