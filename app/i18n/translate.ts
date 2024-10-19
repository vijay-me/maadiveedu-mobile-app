import * as i18n from "i18n-js"
import { TxKeyPath } from "./i18n"

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The i18n options.
 * @returns The translated text.
 *
 * @example
 * Translations:
 *
 * ```en.ts
 * {
 *  "hello": "Hello, {{name}}!"
 * }
 * ```
 *
 * Usage:
 * ```ts
 * import { translate } from "i18n-js"
 *
 * translate("common.ok", { name: "world" })
 * // => "Hello world!"
 * ```
 */
export function translate(key: TxKeyPath, options?: i18n.TranslateOptions) {
// Ensure i18n is properly initialized
if (i18n && (i18n as any).t) {
  return (i18n as any).t(key, options)
} else {
  console.error("i18n is not properly initialized or 't' method is not available.")
  return key // Fallback to returning the key if translation fails
}
}