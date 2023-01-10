import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

const DEFAULT_LOCALE = 'ja';

const initAndGetLocale = () => {
  const userLocale = localStorage.getItem('user.locale');
  if (userLocale) {
    return userLocale;
  }

  const browserLocale = navigator.language;
  if (browserLocale.indexOf('ja') !== -1) {
    localStorage.setItem('user.locale', 'ja');
    return browserLocale;
  }

  localStorage.setItem('user.locale', DEFAULT_LOCALE);
  return DEFAULT_LOCALE;
};

export const i18n = createI18n({
  locale: initAndGetLocale(),
  legacy: false,
  messages,
});

export const $t = i18n.global.t;

export default boot(({ app }) => {
  app.use(i18n);
});
