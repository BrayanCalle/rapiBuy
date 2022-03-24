module.exports = {
  plugins: ['unused-imports', 'import'],
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 0,
    'no-console': 1,
    'no-nested-ternary': 0,
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'import/no-unresolved': 0,
    'object-curly-newline': 'off',
    'func-names': ['error', 'always', { generators: 'as-needed' }],
    'import/no-useless-path-segments': 1,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 0,
    'implicit-arrow-linebreak': 0,
    'import/newline-after-import': 1,
    'import/no-named-as-default-member': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'no-shadow': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        depth: 3,
      },
    ],
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/export': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: true,
    document: true,
    navigator: true,
    localStorage: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: 1,
    jest: true,
  },
  settings: {
    'import/extensions': 0,
    'import/parser': 'babel-eslint',
    'import/resolve': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      moduleDirectory: ['node_modules', 'src'],
    },
  },
};
