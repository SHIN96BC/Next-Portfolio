import 'server-only';
import { DictionaryCommon } from '@Src/shared/config/i18n/auto-gen/types/common';
import { DictionaryHome } from '@Src/shared/config/i18n/auto-gen/types/home';

const dictionaries = {
  en: {
    common: () =>
      import('@Src/shared/config/i18n/locales/en/common.json').then((module): DictionaryCommon => module.default),
    home: () => import('@Src/shared/config/i18n/locales/en/home.json').then((module): DictionaryHome => module.default),
  },
  ko: {
    common: () =>
      import('@Src/shared/config/i18n/locales/ko/common.json').then((module): DictionaryCommon => module.default),
    home: () => import('@Src/shared/config/i18n/locales/ko/home.json').then((module): DictionaryHome => module.default),
  },
} as const;

export default dictionaries;
