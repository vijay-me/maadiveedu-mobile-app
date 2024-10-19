// import * as Localization from "expo-localization";
// import i18n from "i18n-js";
// import { I18nManager } from "react-native";

// // if English isn't your default language, move Translations to the appropriate language file.
// import en, { Translations } from "./en";

// // Ensure i18n is properly initialized
// if (i18n) {
//   (i18n as any).fallbacks = true;
//   /**
//    * we need always include "*-US" for some valid language codes because when you change the system language,
//    * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
//    * if you change to another language and then return to English language code is now "en-US".
//    */
//   (i18n as any).translations = { en, "en-US": en };

//   (i18n as any).locale = Localization.locale;

//   // Check if the 't' method is available
//   if (typeof (i18n as any).t !== 'function') {
//     console.error("i18n 't' method is not available.");
//   }
// } else {
//   console.error("i18n is not properly initialized.");
// }

// // handle RTL languages
// export const isRTL = Localization.isRTL;
// I18nManager.allowRTL(isRTL);
// I18nManager.forceRTL(isRTL);

// /**
//  * Builds up valid keypaths for translations.
//  */
// export type TxKeyPath = RecursiveKeyOf<Translations>;

// // via: https://stackoverflow.com/a/65333050
// type RecursiveKeyOf<TObj extends object> = {
//   [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
// }[keyof TObj & (string | number)];

// type RecursiveKeyOfInner<TObj extends object> = {
//   [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
//     TObj[TKey],
//     `['${TKey}']` | `.${TKey}`
//   >
// }[keyof TObj & (string | number)];

// type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
//   ? Text
//   : TValue extends object
//   ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
//   : Text;


import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { I18nManager } from "react-native";

// if English isn't your default language, move Translations to the appropriate language file.
import en, { Translations } from "./en";

// Debugging statements
console.log("i18n object:", I18n);
console.log("Localization locale:", Localization.locale);
console.log("English translations:", en);

// Ensure i18n is properly initialized
if (I18n) {
  (I18n as any).fallbacks = true;
  /**
   * we need always include "*-US" for some valid language codes because when you change the system language,
   * the language code is the suffixed with "-US". i.e. if a device is set to English ("en"),
   * if you change to another language and then return to English language code is now "en-US".
   */
  (I18n as any).translations = { en, "en-US": en };

  (I18n as any).locale = Localization.locale;

  // Check if the 't' method is available
  if (typeof (I18n as any).t !== 'function') {
    console.error("i18n 't' method is not available.");
  }
} else {
  console.error("i18n is not properly initialized.");
}

// handle RTL languages
export const isRTL = Localization.isRTL;
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;