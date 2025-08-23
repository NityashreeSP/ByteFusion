import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("hi")}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        हिंदी
      </button>
      <button
        onClick={() => changeLanguage("kn")}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
