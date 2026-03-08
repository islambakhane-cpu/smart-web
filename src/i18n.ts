import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          products: {
            view_all: "View All"
          }
        }
      },
      fr: {
        translation: {
          products: {
            view_all: "Voir tout"
          }
        }
      }
    },
    lng: "fr", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
