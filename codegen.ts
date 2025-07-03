import type {CodegenConfig} from '@graphql-codegen/cli';
import {preset, pluckConfig} from '@shopify/hydrogen-codegen';

export default {
  overwrite: true,
  pluckConfig,
  generates: {
    'storefrontapi.generated.d.ts': {
      preset,
      schema: 'node_modules/@shopify/hydrogen/dist/storefront.schema.json',
      documents: [
        './*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        '!./app/graphql/customer-account/*.{ts,tsx,js,jsx}',
      ],
    },
    'customeraccountapi.generated.d.ts': {
      preset,
      schema: 'node_modules/@shopify/hydrogen/dist/customer-account.schema.json',
      documents: ['./app/graphql/customer-account/*.{ts,tsx,js,jsx}'],
    },
  },
} as CodegenConfig;