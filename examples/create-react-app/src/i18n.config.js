import { i18n } from "@lingui/core"
import { en, cs } from "make-plural/plurals"

i18n.loadLocaleData("en", { plurals: en })
i18n.loadLocaleData("cs", { plurals: cs })

export const locales = {
  en: "English",
  cs: "Česky",
}

export async function activate(locale) {
  const { messages } = await import(
    /* webpackChunkName: "i18n-[index]" */ `@lingui/loader!./locales/${locale}.po`
  )

  i18n.load(locale, messages)
  i18n.activate(locale)
}

activate("en")
