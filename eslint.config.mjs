import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import prettier from 'prettier';
import prettierTs from 'eslint-config-prettier';
import googleLint from 'eslint-config-google';

export default [
  {
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
        prettier: prettier
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  googleLint,
  prettierTs,
];
