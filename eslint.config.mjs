import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    parser: '@typescript-eslint/parser',
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
      // Next.js 기본 제공 규칙 커스터마이징
      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'error',

      // React 관련 규칙
      'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요 없음
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'react/require-default-props': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-dange': 'off', // dangerouslySetInnerHTML 옵션 에러

      // TypeScript 관련 규칙
      '@typescript-eslint/explicit-function-return-type': 'off',
      // "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      '@typescript-eslint/no-unused-vars': 'off', // 사용하지 않는 변수 정의 허용,
      '@typescript-eslint/no-explicit-any': 0,

      // Prettier 규칙
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // 작은 따옴표 사용
          semi: true, // 세미콜론 사용
          trailingComma: 'es5', // ES5에서 허용된 곳에만 후행 콤마 사용
          printWidth: 80, // 최대 줄 길이
          tabWidth: 2, // 탭 너비
        },
      ],

      // dependencies 규칙
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.{js,jsx,ts,tsx}',
            '**/*.spec.{js,jsx,ts,tsx}',
            '**/test/**', // 테스트 폴더에 있는 모든 파일에 대해 규칙 비활성화
            '**/tests/**',
            '**/jest.setup.{js,ts,mjs}',
            '**/eslint.config.{js,ts,mjs}', // eslint 설정 파일 허용
            '**/mocks/**', // msw 파일 허용
          ],
        },
      ],

      // 기타 규칙
      'no-console': 'warn', // console.log 사용을 경고로 설정
      eqeqeq: 'error', // 엄격한 비교 사용
      curly: 'error', // 제어 문에 중괄호 사용
      'no-bitwise': 'off', // 비트 연산 허용
      'no-plusplus': 'off', // 증감 연산자 허용
    },
    // FSD 계층별 import 제한
    overrides: [
      {
        files: ['src/shared/**/*.{ts,tsx,js,jsx}'],
        excludedFiles: ['src/shared/libs/**', '@Src/shared/libs/**'], // 이 파일은 제외
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: [
                {
                  group: [
                    '@Src/app/**',
                    '@Src/pages/**',
                    '@Src/widgets/**',
                    '@Src/features/**',
                    '@Src/entities/**',
                    '../app/**',
                    '../pages/**',
                    '../widgets/**',
                    '../features/**',
                    '../entities/**',
                  ],
                  message:
                    '🚫 shared 레이어에서는 app/pages/widgets/features/entities 를 import 할 수 없습니다.',
                },
              ],
            },
          ],
        },
      },
      {
        files: ['src/entities/**/*.{ts,tsx,js,jsx}'],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: [
                {
                  group: [
                    '@Src/app/**',
                    '@Src/pages/**',
                    '@Src/widgets/**',
                    '@Src/features/**',
                    '../app/**',
                    '../pages/**',
                    '../widgets/**',
                    '../features/**',
                  ],
                  message:
                    '🚫 entities 레이어에서는 app/pages/widgets/features 를 import 할 수 없습니다.',
                },
              ],
            },
          ],
        },
      },
      {
        files: ['src/features/**/*.{ts,tsx,js,jsx}'],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: [
                {
                  group: [
                    '@Src/app/**',
                    '@Src/pages/**',
                    '@Src/widgets/**',
                    '../app/**',
                    '../pages/**',
                    '../widgets/**',
                  ],
                  message:
                    '🚫 features 레이어에서는 app/pages/widgets 를 import 할 수 없습니다.',
                },
              ],
            },
          ],
        },
      },
      {
        files: ['src/widgets/**/*.{ts,tsx,js,jsx}'],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: [
                {
                  group: [
                    '@Src/app/**',
                    '@Src/pages/**',
                    '../app/**',
                    '../pages/**',
                  ],
                  message:
                    '🚫 widgets 레이어에서는 app/pages 를 import 할 수 없습니다.',
                },
              ],
            },
          ],
        },
      },
      {
        files: ['src/pages/**/*.{ts,tsx,js,jsx}'],
        rules: {
          'no-restricted-imports': [
            'error',
            {
              patterns: [
                {
                  group: ['@Src/app/**', '../app/**'],
                  message:
                    '🚫 widgets 레이어에서는 app/pages 를 import 할 수 없습니다.',
                },
              ],
            },
          ],
        },
      },
    ],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  }),
];

export default eslintConfig;
