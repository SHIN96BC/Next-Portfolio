import codeGenerate from '@FsdShared/config/auto-generate/code-generate';
import AUTO_GEN_PATH from '@FsdShared/config/auto-generate/constants/path';
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

// 라벨 오버라이드
const LABEL_OVERRIDES: Record<string, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  // 'zh-CN': '简体中文',
  // 'zh-TW': '繁體中文',
};

// 안전한 라벨 생성기
function toAutonym(code: string): string {
  // 우선 override
  if (LABEL_OVERRIDES[code]) return LABEL_OVERRIDES[code];

  try {
    // 코드 자체의 언어로 자기 자신을 표시 (자칭)
    // 예: ('ko','language')에 '한국어', ('en')에 'English'
    const dn = new (Intl as any).DisplayNames([code], { type: 'language' });
    const name = dn.of(code);
    if (name && typeof name === 'string') return name;
  } catch (_) {}

  try {
    // 지역코드가 섞인 경우 'pt-BR' -> 'pt'만으로 재시도
    const base = code.split('-')[0];
    if (base) {
      const dn2 = new (Intl as any).DisplayNames([code], { type: 'language' });
      const name2 = dn2.of(base);
      if (name2 && typeof name2 === 'string') return name2;
    }
  } catch (_) {}

  // 마지막 안전망: 코드 그대로(대문자/소문자 적당히)
  return code;
}

// 문자열 안전 처리
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const i18Locale = useLocales.map((locale) => `  ${locale.toUpperCase()}: '${locale}',`).join('\n');
const i18LocaleOptions = useLocales
  // 보기 좋게 라벨 기준 정렬 (원하면 주석 처리)
  .map((code) => ({ code, label: toAutonym(code) }))
  .sort((a, b) => a.label.localeCompare(b.label))
  .map(({ code, label }) => `  { label: '${esc(label)}', value: '${code}' },`)
  .join('\n');
const supportedLocales = useLocales.map((locale) => `'${locale}'`).join(', ');

const result = `export const I18N_LOCALE = {
${i18Locale}
} as const;

export const I18N_LOCALE_OPTIONS = [
${i18LocaleOptions}
];

export const supportedLocales = [${supportedLocales}]; // 지원하는 언어 목록

// 지원하는 언어
export type Locale =
  typeof I18N_LOCALE[keyof typeof I18N_LOCALE];
`;

codeGenerate({ outputPath, outputDir, result, useLocales });
