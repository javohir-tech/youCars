import { createI18n } from 'vue-i18n';
import uz from './locales/uz.json';
import ru from './locales/ru.json';
import en from './locales/en.json'

const savedLang = localStorage.getItem('lang') || 'ru';

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'ru',
  messages: {
    ru,
    uz,
    en
  },
});

export default i18n;
