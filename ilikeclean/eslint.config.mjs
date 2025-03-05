import fs from 'node:fs'

import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

// `.prettierrc` 파일에서 설정을 읽어 ESLint에 적용 (Prettier와 ESLint 충돌 방지)
const prettierConfig = JSON.parse(fs.readFileSync('.prettierrc', 'utf8'))

const eslintConfig = [
	{
		ignores: [
			'node_modules/',
			'dist/',
			'.next/', // Next.js 빌드 폴더 제외
			'public/',
			'coverage/',
			'next-env.d.ts',
			'yarn.lock',
			'README.md',
			'Dockerfile',
			'.yarn',
		],
	},
	...compat.extends(
		'next/core-web-vitals', // Next.js 최적화된 ESLint 규칙
		'next/typescript', // Next.js + TypeScript 규칙
		'plugin:prettier/recommended', // Prettier와 ESLint 충돌 방지 및 자동 활성화
		'eslint-config-prettier', // ✅ Prettier 관련 규칙 무시
	),
	{
		settings: {
			react: {
				version: 'detect', // React 버전 자동 감지
			},
		},
		plugins: {
			'simple-import-sort': simpleImportSort, // Import 순서 정리용 플러그인
			'unused-imports': unusedImportsPlugin,
			prettier: prettierPlugin, // Prettier 플러그인 추가
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn', // 미사용 변수 경고
			'@typescript-eslint/no-explicit-any': 'off', // any 사용 허용
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'unused-imports/no-unused-imports': 'error',
			'prettier/prettier': ['error', prettierConfig], // ✅ `.prettierrc` 설정 적용
		},
	},
]

export default eslintConfig
