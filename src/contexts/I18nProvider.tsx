'use client';

import { LocaleProvider } from './LocaleContext';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
