'use client';

import useI18n from '@Src/shared/libs/i18n/hooks/useI18n';
import { I18N_DICTIONARY_NAMESPACE } from '@Src/shared/libs/i18n';

export default function TestWidgets() {
  const { dict } = useI18n(I18N_DICTIONARY_NAMESPACE.COMMON);

  return (
    <div>
      TestWidgets
      <div>{dict.test.title}</div>
    </div>
  );
}
