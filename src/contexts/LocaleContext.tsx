'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'id' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  id: {
    'common.explore':       'Jelajahi',
    'common.ai_assistant':  'Asisten AI',
    'common.planner':       'Perencana',
    'common.map':           'Peta',
    'common.saved':         'Disimpan',
    'common.login':         'Masuk',
    'common.register':      'Daftar',
    'common.logout':        'Keluar',
    'common.search':        'Cari',
    'common.see_all':       'Lihat Semua',
    'home.upcoming_festivals': 'Festival Mendatang',
    'home.hero_title':      'Temukan Keajaiban Yogyakarta',
    'home.hero_subtitle':   'Petualangan tersembunyi dan permata tersembunyi',
  },
  en: {
    'common.explore':       'Explore',
    'common.ai_assistant':  'AI Assistant',
    'common.planner':       'Planner',
    'common.map':           'Map',
    'common.saved':         'Saved',
    'common.login':         'Login',
    'common.register':      'Register',
    'common.logout':        'Logout',
    'common.search':        'Search',
    'common.see_all':       'See All',
    'home.upcoming_festivals': 'Upcoming Festivals',
    'home.hero_title':      'Discover the Magic of Yogyakarta',
    'home.hero_subtitle':   'Hidden adventures and secret gems',
  },
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('id');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale') as Locale;
    if (saved === 'id' || saved === 'en') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  const t = (key: string): string =>
    translations[locale]?.[key] ?? key;

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within LocaleProvider');
  return context;
}
