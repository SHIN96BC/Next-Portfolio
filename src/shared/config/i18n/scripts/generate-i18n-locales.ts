import codeGenerate from '@Src/shared/config/auto-generate/code-generate';
import AUTO_GEN_PATH from '@Src/shared/config/auto-generate/constants/path';
import * as fs from 'fs';
import * as path from 'path';

const fileName = 'i18n-locales.ts';

const localesRoot = path.join(__dirname, '../locales');
const outputDir = path.join(__dirname, `../${AUTO_GEN_PATH.GENERATE_DIRECTORY}/constants`);
const outputPath = path.join(outputDir, fileName);

// 디렉토리 이름 기준으로 로케일 추출
const useLocales = fs
  .readdirSync(localesRoot, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const entries = useLocales.map((locale) => `  ${locale.toUpperCase()}: '${locale}',`).join('\n');

const result = `export const I18N_LOCALE = {
${entries}
} as const;

// 지원하는 언어
export type Locale =
  typeof I18N_LOCALE[keyof typeof I18N_LOCALE];
`;

codeGenerate({ outputPath, outputDir, result, useLocales });
