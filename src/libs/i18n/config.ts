export const COOKIE_NAME = 'language'
export const languages = ['en', 'uz']
export const defaultLanguage: Language = 'uz'
export type Language = (typeof languages)[number]
