"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale,locales } from "@/i18n/config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  let local_ =defaultLocale;
  let local = cookies().get(COOKIE_NAME)?.value??defaultLocale;
  for (const locale of locales) {
    if (local.toLowerCase().includes(locale)){
      local=locale;
      local_=locale;
      break;
    }
  }
  return local_;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
