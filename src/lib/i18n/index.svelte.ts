/**
 * Tiny rune-based i18n store.
 *
 * Source of truth: `localStorage.lang` (manual override) > navigator.language >
 * `en`. The store exposes a reactive `current` getter so any `$derived(t)` in a
 * component picks up switches with no extra wiring.
 */

import { dictionaries, type Dict, type Locale, en } from './dict';

const STORAGE_KEY = 'lavescar-ytdl.lang';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'tr') return stored;
  const nav = navigator.language?.toLowerCase() ?? '';
  if (nav.startsWith('tr')) return 'tr';
  return 'en';
}

class I18nStore {
  locale = $state<Locale>('en');

  /** Reactive current dictionary; falls back to `en` for any locale that
   *  ever has missing keys (right now both are full, but future locales
   *  could ship partial). */
  t = $derived<Dict>(dictionaries[this.locale] ?? en);

  init() {
    this.locale = detectLocale();
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.locale;
    }
  }

  set(loc: Locale) {
    this.locale = loc;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, loc);
      document.documentElement.lang = loc;
    }
  }
}

export const i18n = new I18nStore();
