import i18n from 'i18next';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const loadPath = ([lang]) => {
  const langToPathMap = {
    cs: 'cs-CZ',
    de: 'de-DE',
    en: 'en-EN',
    es: 'es-ES',
    es419: 'es-419',
    fr: 'fr-FR',
    frCa: 'fr-CA',
    it: 'it-IT',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ptBr: 'pt-BR',
    ru: 'ru-RU',
    zhHans: 'zh-CN',
    zhHant: 'zh-HK',
  };

  const defaultPathPattern = '{{lng}}';

  return `/locales/${langToPathMap[lang] || defaultPathPattern}/{{ns}}.json`;
};

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    backend: {
      loadPath,
    },
    fallbackLng: 'en',
    lng: 'en',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
      defaultVariables: { key: 'value' },
    },
  });

export default i18n;
