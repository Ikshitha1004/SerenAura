import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detects the React version
      }
    },
    rules: {
      // Add your custom rules or overrides here
    },
    plugins: [pluginReact],
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended
    ]
  }
];
